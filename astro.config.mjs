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
    // Syntax colours come from the site palette (--astro-code-* in global.css).
    shikiConfig: { theme: 'css-variables' },
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
