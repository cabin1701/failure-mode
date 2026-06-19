import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const failureMood = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/failure-mood' }),
  schema: z.object({
    date: z.coerce.date(),
    crew: z.string(),
    model: z.string(),
    title: z.string(),
    context: z.string().optional(),
  }),
});

export const collections = { failureMood };
