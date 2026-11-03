# dundu does stuff

Source for [www.dundudoes.com](https://www.dundudoes.com), built with [Astro](https://astro.build) and Tailwind CSS, and deployed to GitHub Pages.

## Writing a post (no coding needed)

Posts are edited with [Pages CMS](https://app.pagescms.org):

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Open **DoctorSong16.github.io**, then **Blog posts**.
3. Click **Add an entry**, fill in the title, date, a short summary, and write the post.
   - Use the toolbar for headings, lists, links and images. Images are uploaded straight from your computer.
   - Tick **Draft** to save without publishing. Untick it when the post is ready.
4. Click **Save**. The site updates about a minute later.

To fix a typo later, open the post in Pages CMS, edit, and save again.

## Development

```bash
npm install
npm run dev      # http://localhost:4321, drafts are visible here
npm run build    # type-checks and builds to dist/
npm run preview  # serves the built site
```

- Pages live in `src/pages`, shared layout in `src/layouts`, components in `src/components`.
- Posts are Markdown files in `src/content/posts`. Their fields are defined in `src/content.config.ts` and must match `.pages.yml`.
- Uploaded images go to `public/images` and are referenced as `/images/<name>`.
- Pushing to `main` deploys via `.github/workflows/deploy.yml`.
