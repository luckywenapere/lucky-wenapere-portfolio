# Oyin Wenapere portfolio

Next.js 15 (App Router, Turbopack), React 19, Tailwind 4, TypeScript. Static site, deployed on Vercel from `main`. Every push deploys.

## Commands

- `npm run dev` local server at http://localhost:3000
- `npx tsc --noEmit` type-check. Run before pushing.
- `npm run build` production build
- `npm run lint`

## Where things live

- Pages: `src/app` (home, `/posts`, `/posts/[slug]`). Pages are server components.
- Posts: Markdown in `src/posts`. Frontmatter: `title`, `date` (YYYY-MM-DD), `author`. Read by `src/lib/posts.ts`. Adding a post is adding a file.
- Site-wide constants (name, URL, socials, OG image): `src/lib/site.ts`.
- Theme: `src/lib/theme.ts` owns the whole light/dark state machine. Runtime source of truth is `html[data-theme]`. Never mirror it into React state. The toggle label is CSS in `globals.css`.
- Design tokens: CSS variables in `src/app/globals.css`. Use `var(--foreground)`, `var(--muted)`, `var(--line)`, `var(--link)`, not Tailwind palette colours.
- `Header` is the only client component. Keep it that way unless the browser truly needs state.

## Copy

Plain words, short sentences, no em dashes, no hype.
