---
name: Portafolio Personal
description: Sitio web de alto rendimiento desarrollado con Astro. Enfocado en la optimización de assets, estética minimalista de terminal y arquitectura de componentes. Un proyecto que prioriza el SEO y la velocidad de carga mediante la generación de sitios estáticos (SSG).
stack:
    - Astro
    - Tailwind CSS
    - TypeScript
    - GitHub Pages
cover: ./portfolio.png
link: https://diegordgz8.dev
github: https://github.com/diegordgz8/portfolio
---

### El Reto

Diseñar y desarrollar un portafolio profesional que sea rápido, accesible y fácil de mantener, con soporte para modo oscuro y contenido gestionado mediante Markdown.

### Implementación Técnica

- **Astro 5:** Generación estática con View Transitions para navegación fluida entre páginas sin recargar.
- **Tailwind CSS 4:** Sistema de diseño personalizado con paleta de colores semántica, dark mode y componentes reutilizables definidos en `@layer components`.
- **Content Collections:** Experiencia laboral y proyectos gestionados como Markdown con schemas Zod, permitiendo agregar contenido sin tocar código.
- **Bento Grid:** Sección de habilidades con layout bento box que destaca las tecnologías principales del stack.
- **SEO:** Meta tags, Open Graph y Twitter Cards para compartibilidad óptima.

### Resultado

- Sitio 100% estático con deploy automático en GitHub Pages via GitHub Actions.
- Lighthouse score optimizado gracias a la generación estática y optimización de imágenes con Sharp.
- Tema claro/oscuro persistente entre navegaciones gracias a `astro:before-swap`.
