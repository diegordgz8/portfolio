---
name: Bonsai Pricing Page
description: Replicación de interfaz profesional con enfoque en diseño responsivo y estados interactivos. Maquetación limpia usando Tailwind CSS y lógica frontend ligera con Alpine.js para la conmutación de planes y FAQ dinámicos. Un ejercicio de precisión UI y optimización de assets.
stack:
    - HTML
    - Tailwind CSS
    - Alpine.js
cover: ../bonsai.png
link: https://diegordgz8.github.io/pricing-page/
---

### El Reto

Replicar la compleja lógica de la página de precios de Bonsai, enfocándome en la interactividad y la precisión del diseño pixel-perfect. El reto era gestionar el estado de los precios (Mensual vs Anual) de forma eficiente.

### Implementación Técnica

- **Frontend moderno:** Implementado con **Tailwind CSS** para un desarrollo rápido de la interfaz y **Alpine.js** para manejar la lógica del switch de precios de forma ligera sin necesidad de un framework pesado.
- **Arquitectura:** Estructura de componentes reutilizables en **Astro**, permitiendo que cada tarjeta de precio sea una instancia limpia y fácil de mantener.
- **Animaciones:** Uso de transiciones nativas de Tailwind para mejorar la percepción de velocidad en el cambio de planes.

### Aprendizajes

- Dominio de la directiva `x-model` de Alpine para sincronizar múltiples estados de la UI.
- Optimización de accesibilidad en elementos de selección (toggles).
