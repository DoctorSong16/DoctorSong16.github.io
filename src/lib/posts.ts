import { getCollection } from 'astro:content';

// Newest first. Drafts show up in `npm run dev` but never in the built site.
export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// e.g. "1 February 2025". Post dates are midnight UTC, so format in UTC too.
export function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
