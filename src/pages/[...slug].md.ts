import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { articleMarkdown, markdownResponse } from '../lib/markdown';

export async function getStaticPaths() {
  const specimens = await getCollection('failureMood');
  return specimens.map((spec) => ({
    params: { slug: spec.id },
    props: { spec },
  }));
}

export const GET = ({ props, params }: APIContext) => {
  const { spec } = props as { spec: Awaited<ReturnType<typeof getCollection<'failureMood'>>>[number] };
  return markdownResponse(articleMarkdown(`https://fm.cabin1701.com/${params.slug}/`, spec.data, spec.body));
};
