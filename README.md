# Portfolio — [diegordgz8.dev](https://diegordgz8.dev)

Personal portfolio and website of Diego A. Rodríguez, built as a static site with
Astro 5 and Tailwind CSS 4. Available in Spanish (default) and English (`/en/`).

## Stack

- **[Astro 5](https://astro.build)** — static site generation, content collections, view transitions
- **[Tailwind CSS 4](https://tailwindcss.com)** — configured entirely in `src/styles/global.css` via `@theme`
- **TypeScript** — strict mode
- **astro-icon** with the Lucide and MDI icon sets
- Deployed with **Coolify** on a self-hosted VPS, behind Cloudflare

## Getting started

Requires Node 22+ and [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:4321`.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Build the production site to `./dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm format` | Format `src/` with Prettier |

## Project structure

```
src/
├── assets/img/      Images processed by Astro's <Image> component
├── components/      UI components (.astro only — no UI framework)
├── content/
│   ├── config.ts    Zod schemas for the content collections
│   ├── jobs/        Work experience entries, one folder per language (es/, en/)
│   └── projects/    Portfolio projects, one folder per language (es/, en/)
├── i18n/            UI strings (ui.ts) and locale helpers (utils.ts)
├── layouts/         Layout.astro — wraps every page
├── pages/[...lang]/ index.astro and portfolio/[id].astro, rendered once per language
└── styles/          global.css — theme tokens and component classes
```

### Content

Work experience and projects live in `src/content/` as Markdown with YAML
frontmatter, validated by the Zod schemas in `src/content/config.ts`. Project
detail pages are generated from the collection slugs, and the Markdown body is
rendered inside a `prose` container.

To add a project, drop its cover image into `src/content/projects/` and a `.md`
file with the same name into both `es/` and `en/` (images are referenced as
`../image.png`) — no code changes needed. UI strings live in `src/i18n/ui.ts`.

## Deployment

The live site at [diegordgz8.dev](https://diegordgz8.dev) is served from a
self-hosted Coolify instance behind Cloudflare.

A GitHub Actions workflow (`.github/workflows/deploy.yml`) additionally builds
the site on every push to `main` and publishes `dist/` to GitHub Pages.

## Conventions

- Line endings are normalized to LF via `.gitattributes`
- Formatting is handled by Prettier with the Astro and Tailwind plugins
- Code comments in English; user-facing copy in Spanish and English
