# dundu does stuff

Source for [www.dundudoes.com](https://www.dundudoes.com), built with [Astro](https://astro.build) and Tailwind CSS, and deployed to GitHub Pages.

## Writing a post (no coding needed)

Posts are edited with [Pages CMS](https://app.pagescms.org):

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Open **DoctorSong16.github.io**, then **Blog posts**.
3. Click **Add an entry**, fill in the title, date, a short summary, and write the post.
   - Use the toolbar for headings, lists, links and images. Images are uploaded straight from your computer.
   - Optionally add a **Cover image**. It's shown as a square thumbnail next to the post on the blog page, so keep the subject near the middle. Add a few words in **Cover description** for people using screen readers.
   - Tick **Draft** to save without publishing. Untick it when the post is ready.
4. Click **Save**. The site updates about a minute later.

To fix a typo later, open the post in Pages CMS, edit, and save again.

## Editing the home page

In Pages CMS, open **Home page** to change the greeting and the introduction next to the photo, then click **Save**. Around 150 words lines up best with the photo on wide screens. Longer is fine too: the photo grows taller to match.

## Development

```bash
npm install
npm run dev      # http://localhost:4321, drafts are visible here
npm run build    # type-checks and builds to dist/
npm run preview  # serves the built site
```

- Pages live in `src/pages`, shared layout in `src/layouts`, components in `src/components`.
- Posts are Markdown files in `src/content/posts`, and the home page intro is `src/content/pages/home.md`. Their fields are defined in `src/content.config.ts` and must match `.pages.yml`.
- Images inside posts go to `public/images` and are referenced as `/images/<name>`.
- Cover images go to `src/assets/covers` and are referenced relative to the post (`../../assets/covers/<name>`), so Astro resizes them.
- Pushing to `main` deploys via `.github/workflows/deploy.yml`.
