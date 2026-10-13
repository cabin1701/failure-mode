import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

// RSS は英語の 1 本だけ（記録は日本語のまま、翻訳しない）。新しい順に 50 件。
export async function GET(context: APIContext) {
  const specimens = (await getCollection('failureMood'))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .slice(0, 50);
  return rss({
    title: 'Failure Mood',
    description: 'Incidents, errors, and field autopsy logs.',
    site: context.site ?? 'https://fm.cabin1701.com',
    customData: '<language>en</language>',
    items: specimens.map((spec) => ({
      title: spec.data.title,
      pubDate: spec.data.date,
      description: spec.data.description ?? spec.data.context ?? '',
      link: `/${spec.id}/`,
    })),
  });
}
