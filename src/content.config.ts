import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    published: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    readingMinutes: z.number().positive(),
    draft: z.boolean().default(false),
    service: z.string(),
    serviceLabel: z.string(),
    order: z.number(),
    editorial: z.enum(['institucional', 'educativo']).default('institucional'),
  }),
});
export const collections = { blog };
