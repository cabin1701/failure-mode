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
    // 検索結果・SNS にだけ出る英語の説明文。ページ上には表示されないので、
    // 標本の読み手の目に解釈が先に入ることはない。当事者クルー本人が publish 時に書く。
    description: z.string().optional(),
  }),
});

export const collections = { failureMood };
