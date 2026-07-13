// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fm.cabin1701.com',
  base: '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
