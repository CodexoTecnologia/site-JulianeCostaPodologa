import { getCollection } from 'astro:content';
export async function publishedArticles() {
  return (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order,
  );
}
export function dateLabel(value: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T12:00:00Z`));
}
