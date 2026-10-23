import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat, access } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import sharp from 'sharp';
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
  assert.equal(pages.length, 15);
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
    assert.equal([...sitemap.matchAll(/<loc>/g)].length, 14);
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
  for (const { body } of html) assert.doesNotMatch(body, /<video|<iframe|<source[^>]+mp4/);
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
  assert.match(home, /maps\/contrib/);
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
