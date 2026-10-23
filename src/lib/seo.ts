import { business, origin } from '../data/site';

export interface ArticleMetadata {
  title: string;
  description: string;
  published: string;
  updated?: string;
  slug: string;
  image?: string;
}
export function seoGraph(
  path: string,
  title: string,
  description: string,
  crumbs: { name: string; href: string }[] = [],
  article?: ArticleMetadata,
) {
  const url = (value: string) => new URL(value, origin).href;
  const id = (value: string) => ({ '@id': url(value) });
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'HealthAndBeautyBusiness',
      '@id': url('/#negocio'),
      name: business.name,
      url: origin,
      description: business.description,
      telephone: business.telephone,
      logo: url('/brand/juliane-original.png'),
      image: url('/og-image.jpg'),
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address,
        addressLocality: business.city,
        addressRegion: business.state,
        postalCode: business.postalCode,
        addressCountry: 'BR',
      },
      areaServed: {
        '@type': 'City',
        name: 'Colombo',
        containedInPlace: { '@type': 'State', name: 'Paraná' },
      },
      sameAs: [business.instagram, business.google],
      hasMap: business.maps,
    },
    {
      '@type': 'Person',
      '@id': url('/#juliane'),
      name: business.person,
      jobTitle: 'Podóloga',
      worksFor: id('/#negocio'),
      url: url('/sobre/'),
      sameAs: [business.instagram],
    },
    {
      '@type': 'Organization',
      '@id': url('/#editorial'),
      name: 'Codexo',
      url: 'https://codexo.com.br/',
    },
    {
      '@type': 'WebSite',
      '@id': url('/#site'),
      name: business.name,
      url: origin,
      inLanguage: 'pt-BR',
      publisher: id('/#negocio'),
    },
    {
      '@type':
        path === '/sobre/'
          ? 'AboutPage'
          : path === '/localizacao/'
            ? 'ContactPage'
            : path === '/blog/'
              ? 'CollectionPage'
              : 'WebPage',
      '@id': url(`${path}#pagina`),
      name: title,
      description,
      url: url(path),
      inLanguage: 'pt-BR',
      isPartOf: id('/#site'),
      about: id('/#negocio'),
      ...(crumbs.length ? { breadcrumb: id(`${path}#caminho`) } : {}),
    },
  ];
  if (crumbs.length)
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': url(`${path}#caminho`),
      itemListElement: [{ name: 'Início', href: '/' }, ...crumbs].map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: url(c.href),
      })),
    });
  if (path === '/ilib/' || path.startsWith('/atendimentos/'))
    graph.push({
      '@type': 'Service',
      '@id': url(`${path}#atendimento`),
      name: title,
      description,
      serviceType: path === '/ilib/' ? 'Atendimento ILIB' : 'Podologia e bem-estar',
      provider: id('/#negocio'),
      url: url(path),
      areaServed: { '@type': 'City', name: 'Colombo, PR' },
    });
  if (article)
    graph.push({
      '@type': 'BlogPosting',
      '@id': url(`${path}#artigo`),
      headline: article.title,
      description: article.description,
      datePublished: article.published,
      ...(article.updated ? { dateModified: article.updated } : {}),
      image: url(article.image || '/og-image.jpg'),
      author: id('/#editorial'),
      publisher: id('/#negocio'),
      inLanguage: 'pt-BR',
      mainEntityOfPage: id(`${path}#pagina`),
    });
  // Avaliações externas são exibidas com fonte; não são marcadas como notas próprias.
  return { '@context': 'https://schema.org', '@graph': graph };
}
export const jsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
