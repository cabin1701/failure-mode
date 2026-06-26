// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cabin1701.github.io',
  base: '/failure-mode',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
