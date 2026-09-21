# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build
- No linter or test runner is configured

## Architecture

Personal portfolio website built with **Astro 5** and **Tailwind CSS 4**. Bilingual: **Spanish** (default, unprefixed URLs) and **English** (under `/en/`).

### Content Collections

Content uses Astro's content layer with Zod schemas defined in `src/content/config.ts`:

Each collection has one folder per language (`jobs/es/`, `jobs/en/`, ...); entries share the same filename across languages and images stay at the collection root. Use `getLocalizedCollection()` from `src/i18n/utils.ts` instead of `getCollection()` directly — it filters by language and strips the language folder from the slug.

- **Jobs** (`src/content/jobs/`) — Work experience entries (name, position, dateFrom/dateTo as strings, description, stack, cover image)
- **Projects** (`src/content/projects/`) — Portfolio projects (name, description, stack, cover, pictures, link, github)

Content files are Markdown with YAML frontmatter. The Markdown body is rendered on project detail pages using `render()` from `astro:content` and displayed inside a `prose` container (`@tailwindcss/typography`).

### i18n

- Astro native i18n in `astro.config.mjs` (`defaultLocale: 'es'`, `prefixDefaultLocale: false`)
- UI strings live in `src/i18n/ui.ts`; use `useTranslations(lang)` and `localizePath(path, lang)` from `src/i18n/utils.ts`. Components without a `lang` prop derive it with `getLangFromUrl(Astro.url)`
- `Layout.astro` sets `<html lang>`, canonical, `hreflang` alternates and `og:locale`
- The inline GTM `pageview` script in `Layout.astro` must stay byte-identical across languages (it reads the language from `<html lang>` at runtime); otherwise View Transitions re-run it and pageviews get duplicated
- The GTM container only loads in production builds (`import.meta.env.PROD` gate in `Layout.astro`), so `astro dev` never reaches GA4 or Clarity; see `docs/analytics.md`

### Routing

- `src/pages/[...lang]/index.astro` — Homepage with hero, jobs, projects, and contact sections
- `src/pages/[...lang]/portfolio/[id].astro` — Dynamic project detail pages generated via `getStaticPaths()` using project slugs
- `[...lang]` is `undefined` for Spanish (renders at `/`) and `en` for English (renders at `/en/`)

### Layout & Components

- Single layout: `src/layouts/Layout.astro` — wraps all pages, includes `<Header>`, global CSS, font imports, and dark mode initialization script
- Uses Astro View Transitions (`ClientRouter` from `astro:transitions`) for page navigation
- Icons via `astro-icon` with `@iconify-json/lucide` and `@iconify-json/mdi` icon sets — use `<Icon name="mdi:icon-name" />` from `astro-icon/components`

### Styling

- Tailwind CSS v4 configured entirely in `src/styles/global.css` using `@theme` block (no separate tailwind config file)
- Custom color palette: primary, accent-light/dark, shade-light/dark, theme colors (cyan→navy) — all defined as CSS custom properties in `@theme`
- Dark mode via `html.dark` class and Tailwind `dark:` utilities; theme persisted in localStorage
- Custom component classes defined in `@layer components`: `.btn`, `.btn-solid`, `.btn-outline`, `.section-title`, `.container`, `.bg-ring`
- Container: max-width 1280px with auto inline margins and 1.5rem inline padding
- Geist Mono as the base font (`font-feature-settings: "ss01"`)

### Key Conventions

- All UI uses `.astro` components — no React/Vue/Svelte
- Images use Astro's `Image` component for optimization, stored in `src/assets/img/`
- TypeScript with strict mode (`astro/tsconfigs/strict`)
- Tailwind via Vite plugin (`@tailwindcss/vite`) in `astro.config.mjs`
- Package manager: pnpm (lockfile is `pnpm-lock.yaml`)

## Deployment

- `diegordgz8.dev` is served by a self-hosted Coolify instance (panel at `cp.diegordgz8.dev`) behind Cloudflare. The repo has no CI: the GitHub Pages mirror and its workflow were removed in `05cfa12`
- Pushing to `main` deploys on its own through the `git-hub-diegordgz8` GitHub App, which delivers the push event to `https://cp.diegordgz8.dev/webhooks/source/github/events`. A deploy takes about two minutes
- Confirm a deploy actually landed: `curl -sI https://diegordgz8.dev/` and read `last-modified`, or grep the served HTML for a string the change introduced
- If production stops updating, check the App's delivery log first (GitHub → Settings → Developer settings → GitHub Apps → Advanced → Recent Deliveries). Coolify writes that webhook URL when the App is created and never updates it, so moving the panel to another domain silently breaks auto-deploy — which is exactly what happened in September 2026
