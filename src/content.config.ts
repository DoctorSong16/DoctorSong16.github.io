import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Fields here must stay in sync with the "posts" collection in .pages.yml.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().default('General'),
    summary: z.string().default(''),
    draft: z.boolean().default(false),
  }),
});

// Single editable pages (e.g. home.md for the home page intro).
// Fields must stay in sync with the matching "file" entries in .pages.yml.
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    heading: z.string(),
  }),
});

export const collections = { posts, pages };
