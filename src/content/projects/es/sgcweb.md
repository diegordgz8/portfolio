---
name: SGC Web
description: Sistema web de gestión de condominios desarrollado con el TALL Stack. Un proyecto académico de alta complejidad que incluye módulos de pagos, cierres mensuales y comunicación interna. Enfocado en la reactividad de la interfaz con Livewire y una arquitectura de backend robusta en Laravel.
stack:
    - Laravel
    - Livewire
    - Tailwind CSS
    - Alpine.js
cover: ../sgcweb.png
pictures:
    - ../sgcweb/panel-condominio.png
    - ../sgcweb/about.png
github: https://www.github.com/diegordgz8/sgcweb
---

### El Reto

El objetivo era digitalizar la administración de comunidades residenciales, sustituyendo los procesos manuales por una plataforma centralizada. El desafío principal fue crear un sistema de comunicación en tiempo real y una gestión financiera transparente para propietarios y administradores.

### Implementación Técnica (TALL Stack)

- **Backend Reactivo:** Utilicé **Laravel** con **Livewire** para crear una interfaz dinámica sin salir del ecosistema de PHP, permitiendo que las actualizaciones de pagos y comunicados se reflejen instantáneamente.
- **Panel de Administración:** Implementación de un Dashboard robusto para la gestión de unidades, registro de proveedores y control de gastos comunes.
- **Frontend Dinámico:** Diseño de componentes con **Tailwind CSS** y manejo de estados ligeros en el cliente con **Alpine.js** (como modales de confirmación y filtrados rápidos).
- **Seguridad y Roles:** Estructuración de permisos para diferenciar las vistas entre un Administrador (gestión total) y un Residente (consulta de estados de cuenta y noticias).

### Impacto del Proyecto

- **Optimización de tiempos:** Reducción del trabajo administrativo manual mediante la automatización de reportes de "Cierre de mes".
- **Transparencia:** Módulo de comunicados centralizado que mejora la trazabilidad de la información enviada a los residentes.
