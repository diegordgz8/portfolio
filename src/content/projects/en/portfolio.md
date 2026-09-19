---
name: Personal Portfolio
description: A high-performance website built with Astro. Focused on asset optimization, a minimalist terminal aesthetic and component architecture. A project that prioritizes SEO and load speed through static site generation (SSG).
stack:
    - Astro
    - Tailwind CSS
    - TypeScript
    - Coolify
    - Cloudflare
cover: ../portfolio.png
link: https://diegordgz8.dev
github: https://github.com/diegordgz8/portfolio
---

### The Challenge

Design and build a professional portfolio that is fast, accessible and easy to maintain, with dark mode support and content managed through Markdown.

### Technical Implementation

- **Astro 5:** Static generation with View Transitions for smooth navigation between pages without full reloads.
- **Tailwind CSS 4:** Custom design system with a semantic color palette, dark mode and reusable components defined in `@layer components`.
- **Content Collections:** Work experience and projects managed as Markdown with Zod schemas, so content can be added without touching code.
- **Internationalization:** Available in Spanish and English using Astro's native i18n routing, with `hreflang` tags and per-language content.
- **Bento Grid:** Skills section with a bento box layout that highlights the core technologies in the stack.
- **SEO:** Meta tags, Open Graph and Twitter Cards for optimal shareability.

### Outcome

- 100% static site, self-hosted on my own VPS, managed with Coolify and served behind Cloudflare.
- Optimized Lighthouse score thanks to static generation and image optimization with Sharp.
- Light/dark theme persisted across navigations thanks to `astro:before-swap`.
