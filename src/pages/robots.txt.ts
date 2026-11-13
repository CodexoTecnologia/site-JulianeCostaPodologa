import { production, origin } from '../data/site';
export const GET = () =>
  new Response(
    `User-agent: *\nAllow: /\n${production ? `\nSitemap: ${origin}/sitemap-index.xml\n` : ''}`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
