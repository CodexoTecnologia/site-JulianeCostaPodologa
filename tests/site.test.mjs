import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat, access } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import sharp from 'sharp';
import { reviews } from '../src/data/reviews.ts';
const root = resolve(process.env.SITE_TEST_DIR || 'dist');
async function files(dir) {
  return (
    await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map((e) =>
        e.isDirectory() ? files(join(dir, e.name)) : join(dir, e.name),
      ),
    )
  ).flat();
}
const pages = (await files(root)).filter(
  (f) => f.endsWith('.html') && !f.includes('googlec47846e9ced625ab'),
);
const html = await Promise.all(
  pages.map(async (file) => ({ file, body: await readFile(file, 'utf8') })),
);
test('todas as páginas entregam título, conteúdo, sem preços nem dados antigos', () => {
  assert.equal(pages.length, 22);
  for (const { file, body } of html) {
    assert.match(body, /<h1[ >]/, file);
    assert.match(body, /<title>[^<]+<\/title>/, file);
    assert.doesNotMatch(
      body,
      /R\$|priceRange|priceCurrency|"price"|99655|Francisco Camargo|controle da diabetes|rejuvenescimento celular/i,
      file,
    );
  }
});
test('links internos, imagens e âncoras apontam para recursos existentes', async () => {
  for (const { file, body } of html) {
    for (const match of body.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
      const href = match[1];
      if (!href.startsWith('/') && !href.startsWith('#')) continue;
      const [pathname, hash] = href.split('#');
      const path =
        pathname ||
        '/' +
          file
            .slice(root.length + 1)
            .replaceAll('\\', '/')
            .replace(/index\.html$/, '');
      const target = resolve(root, '.' + decodeURIComponent(path));
      let dest;
      try {
        dest = (await stat(target)).isDirectory() ? join(target, 'index.html') : target;
      } catch {
        assert.fail(`${file}: recurso ausente ${href}`);
      }
      if (hash && dest.endsWith('.html'))
        assert.match(
          await readFile(dest, 'utf8'),
          new RegExp(`id="${hash}"`),
          `${file}: âncora ${href}`,
        );
    }
  }
});
test('HOM fica fora do índice por padrão, e 404 continua sem indexação', async () => {
  for (const { file, body } of html) {
    const preview = process.env.PUBLIC_SITE_MODE !== 'production' || file.endsWith('404.html');
    assert.match(
      body,
      new RegExp(`name="robots" content="${preview ? 'noindex, follow' : 'index, follow'}`),
      file,
    );
  }
  const robots = await readFile(join(root, 'robots.txt'), 'utf8');
  assert.match(robots, /Allow: \//);
  assert.doesNotMatch(robots, /Disallow: \//);
  if (process.env.PUBLIC_SITE_MODE === 'production') {
    assert.match(robots, /Sitemap: https:\/\/julianecostapodologa.com.br\/sitemap-index.xml/);
    const sitemap = await readFile(join(root, 'sitemap-0.xml'), 'utf8');
    assert.equal([...sitemap.matchAll(/<loc>/g)].length, 21);
    assert.doesNotMatch(sitemap, /404|localhost|127\.0\.0\.1/);
  } else {
    assert.doesNotMatch(robots, /Sitemap:/);
    await assert.rejects(access(join(root, 'sitemap-index.xml')));
  }
});
test('dados estruturados são válidos, sem estrelas próprias, preços ou credenciais inventadas', () => {
  for (const { file, body } of html) {
    if (file.endsWith('404.html')) continue;
    const match = body.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    assert.ok(match, file);
    const data = JSON.parse(match[1]);
    assert.equal(data['@context'], 'https://schema.org');
    assert.ok(data['@graph'].some((e) => e['@type'] === 'HealthAndBeautyBusiness'));
    assert.doesNotMatch(match[1], /aggregateRating|reviewRating|Physician|priceRange/);
    assert.match(match[1], /Venâncio Trevisan, 137, sala 01/);
    assert.match(match[1], /\+5541995726923/);
  }
});
test('vídeo não cria mídia para baixar na abertura, artigos têm autoria real', () => {
  for (const { body } of html) assert.doesNotMatch(body, /<video|<source[^>]+mp4/);
  for (const pathname of ['index.html', 'ilib/index.html']) {
    const { body } = html.find(({ file }) => file === join(root, pathname));
    if (process.env.PUBLIC_ENABLE_VIDEO === 'false') {
      assert.doesNotMatch(body, /data-video-trigger/);
    } else {
      assert.match(body, /<a[^>]+href="\/media\/ilib-demonstracao\.mp4"[^>]+data-video-trigger/);
      assert.match(body, /12 segundos/);
      assert.match(body, /Descrição do vídeo/);
    }
  }
  for (const { file, body } of html.filter((x) => /blog[\\/].+[\\/]index\.html$/.test(x.file))) {
    assert.match(body, /Equipe Codexo/);
    assert.match(body, /BlogPosting/);
    assert.doesNotMatch(body, /revisado por Juliane/i, file);
  }
});
test('Google tem origem e data explícitas; recursos de marca e fontes estão corretos', async () => {
  const home = await readFile(join(root, 'index.html'), 'utf8');
  assert.match(home, /58 avaliações no Google/);
  assert.match(home, /23\/10\/2026/);
  assert.doesNotMatch(home, /maps\/contrib|Ver perfil de avaliações no Google/);
  assert.equal([...home.matchAll(/<blockquote>/g)].length, 20);
  assert.match(home, /Avaliações selecionadas/);
  const og = await sharp(join(root, 'og-image.jpg')).metadata();
  assert.equal(og.width, 1200);
  assert.equal(og.height, 630);
  const fonts = await Promise.all(
    ['questrial-latin.woff2', 'league-spartan-latin.woff2'].map((f) =>
      stat(join(root, 'fonts', f)),
    ),
  );
  assert.ok(fonts.reduce((n, s) => n + s.size, 0) < 90000);
  assert.match(
    await readFile(join(root, 'googlec47846e9ced625ab.html'), 'utf8'),
    /google-site-verification/,
  );
});
test('mapas integrados são adiados e os produtos abrem uma consulta específica', async () => {
  for (const pathname of ['index.html', 'localizacao/index.html']) {
    const body = await readFile(join(root, pathname), 'utf8');
    const iframe = body.match(/<iframe\b[^>]+>/)?.[0];
    assert.ok(iframe, pathname);
    assert.match(iframe, /src="https:\/\/www.google.com\/maps\?/);
    assert.match(iframe, /loading="lazy"/);
    assert.match(iframe, /title="Google Maps: Juliane Costa/);
    assert.match(iframe, /Trevisan/);
  }
  const catalog = await readFile(join(root, 'produtos/index.html'), 'utf8');
  for (const name of [
    'Maxiderm',
    'Psorin Unhas',
    'Ônico Blend',
    'Nutri Derm',
    'Smell Feet',
    'Blend Spray',
  ]) {
    assert.match(catalog, new RegExp(`<h3>${name}</h3>`));
    assert.ok(catalog.includes(encodeURIComponent(`Vi o ${name}`)), name);
  }
});
test('conteúdos educativos indicam fontes e a home mantém uma decisão clara', async () => {
  const home = await readFile(join(root, 'index.html'), 'utf8');
  assert.ok(home.indexOf('SUA PRIMEIRA VISITA') < home.indexOf('id="ilib"'));
  const faqSection = home.match(/<section[^>]*id="faq"[\s\S]*?<\/section>/)?.[0];
  assert.ok(faqSection);
  assert.equal([...faqSection.matchAll(/<details>/g)].length, 7);
  const faq = await readFile(join(root, 'duvidas/index.html'), 'utf8');
  assert.equal([...faq.matchAll(/<details>/g)].length, 22);
  const educational = html.filter(({ body }) => body.includes('conteúdo educativo'));
  assert.equal(educational.length, 6);
  for (const { body } of educational) {
    assert.match(body, /Referência/);
    assert.match(
      body,
      /https:\/\/(www\.(sbd\.org\.br|aad\.org|nhs\.uk|guysandstthomas\.nhs\.uk)|www\.gov\.br)/,
    );
  }
});
test('comentários resumidos têm a íntegra disponível sem requisição adicional', async () => {
  const home = await readFile(join(root, 'index.html'), 'utf8');
  assert.match(home, /<dialog[^>]+aria-labelledby="review-dialog-title"/);
  const expanded = reviews.filter((review) => review.excerpt);
  assert.equal(
    [...home.matchAll(/aria-label="Ver avaliação completa de /g)].length,
    expanded.length,
  );
  assert.equal([...home.matchAll(/class="review-full-text"/g)].length, expanded.length);
  const normalized = home.replace(/\s+/g, ' ');
  for (const review of expanded) {
    assert.notEqual(review.fullText, review.text, review.author);
    for (const paragraph of review.fullText.split(/\n{2,}/)) {
      assert.ok(normalized.includes(paragraph.replace(/\s+/g, ' ')), review.author);
    }
  }
  assert.equal(new Set(reviews.map((review) => review.url)).size, 20);
});
