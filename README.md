# Portfolio — [diegordgz8.dev](https://diegordgz8.dev)

Personal portfolio and website of Diego A. Rodríguez, built as a static site with
Astro 5 and Tailwind CSS 4. Site content and UI are in Spanish.

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
│   ├── jobs/        Work experience entries
│   └── projects/    Portfolio projects
├── layouts/         Layout.astro — wraps every page
├── pages/           index.astro and portfolio/[id].astro
└── styles/          global.css — theme tokens and component classes
```

### Content

Work experience and projects live in `src/content/` as Markdown with YAML
frontmatter, validated by the Zod schemas in `src/content/config.ts`. Project
detail pages are generated from the collection slugs, and the Markdown body is
rendered inside a `prose` container.

To add a project, drop a new `.md` file into `src/content/projects/` along with
its cover image — no code changes needed.

## Deployment

The live site at [diegordgz8.dev](https://diegordgz8.dev) is served from a
self-hosted Coolify instance behind Cloudflare.

A GitHub Actions workflow (`.github/workflows/deploy.yml`) additionally builds
the site on every push to `main` and publishes `dist/` to GitHub Pages.

## Conventions

- Line endings are normalized to LF via `.gitattributes`
- Formatting is handled by Prettier with the Astro and Tailwind plugins
- Code comments in English; all user-facing copy in Spanish
