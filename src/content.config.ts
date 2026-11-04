import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Fields here must stay in sync with the "posts" collection in .pages.yml.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      category: z.string().default('General'),
      summary: z.string().default(''),
      // Relative to the post file, e.g. ../../assets/covers/photo.jpg, so astro:assets
      // can resize it. Pages CMS writes null when the image is removed.
      cover: image().nullish(),
      coverAlt: z.string().nullish(),
      draft: z.boolean().default(false),
    }),
});

// Single editable pages (e.g. home.md for the home page intro).
// Fields must stay in sync with the matching "file" entries in .pages.yml.
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      heading: z.string(),
      // Relative to the page file, e.g. ../../assets/home/photo.jpg. Any size or shape
      // works: Hero.astro crops it to fit each layout. Pages CMS writes null when removed.
      photo: image().nullish(),
      photoAlt: z.string().nullish(),
      // Which part of the photo to keep when it's cropped. "auto" picks the busiest area.
      photoFocus: z.enum(['auto', 'center', 'top', 'bottom', 'left', 'right']).nullish(),
    }),
});

export const collections = { posts, pages };
