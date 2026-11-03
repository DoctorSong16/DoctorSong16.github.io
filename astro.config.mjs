// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.dundudoes.com',
  // Emit post.html rather than post/index.html so URLs match the old
  // Next.js export (/post, /post/welcome-post) with no trailing slash.
  build: { format: 'file' },
  trailingSlash: 'never',
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
