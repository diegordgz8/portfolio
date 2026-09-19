export const languages = {
    es: 'Español',
    en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const navItems = [
    { id: 'hero', label: 'nav.home' },
    { id: 'jobs', label: 'nav.jobs' },
    { id: 'portfolio', label: 'nav.portfolio' },
    { id: 'skills', label: 'nav.skills' },
    { id: 'contact', label: 'nav.contact' },
] as const;

export const ui = {
    es: {
        'meta.title': 'Diego A. Rodríguez - Portafolio',
        'meta.description':
            'Portafolio de Diego Rodríguez, desarrollador web especializado en Laravel. Explora mis proyectos y experiencia laboral.',
        'meta.defaultDescription':
            'Portafolio de Diego Rodríguez, Technical Lead especializado en PHP, Laravel y WordPress.',
        'meta.ogLocale': 'es_ES',

        'nav.home': 'Inicio',
        'nav.jobs': 'Experiencia',
        'nav.portfolio': 'Proyectos',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contacto',
        'nav.openMenu': 'Abrir menú',
        'nav.closeMenu': 'Cerrar menú',
        'nav.toggleTheme': 'Cambiar tema',
        'nav.switchLanguage': 'Ver la página en español',

        'hero.portraitAlt': 'Retrato de Diego Rodríguez',
        'hero.tagline': 'Transformo ideas complejas en soluciones web de alto rendimiento',
        'hero.intro':
            'Soy Diego, Technical Lead e Ingeniero especializado en PHP y Laravel. Mi enfoque combina la arquitectura técnica con el liderazgo de equipos para entregar software que optimiza procesos y escala con tu negocio.',
        'hero.viewProjects': 'Ver Proyectos',
        'hero.downloadCv': 'Descargar CV',
        'hero.cvFile': '/Desarrollador Web CV [es].pdf',

        'section.jobs': 'Experiencia laboral',
        'section.portfolio': 'Proyectos',
        'section.skills': 'Habilidades',
        'section.contact': 'Contacto',

        'contact.pitch':
            '¿Tienes un proyecto en mente? Escríbeme y hablemos sobre cómo puedo ayudarte.',
        'contact.imageAlt': 'Desarrollando',

        'skills.management': 'Gestión y Planificación',
        'skills.development': 'Desarrollo y Ejecución',
        'skills.projectManagement': 'Gestión de Proyectos',

        'project.titleSuffix': 'Proyectos',
        'project.back': 'Regresar',
        'project.view': 'Ver proyecto',
        'project.screenshot': 'captura',

        'lightbox.close': 'Cerrar',
        'lightbox.prev': 'Anterior',
        'lightbox.next': 'Siguiente',
    },
    en: {
        'meta.title': 'Diego A. Rodríguez - Portfolio',
        'meta.description':
            'Portfolio of Diego Rodríguez, web developer specialized in Laravel. Explore my projects and work experience.',
        'meta.defaultDescription':
            'Portfolio of Diego Rodríguez, Technical Lead specialized in PHP, Laravel and WordPress.',
        'meta.ogLocale': 'en_US',

        'nav.home': 'Home',
        'nav.jobs': 'Experience',
        'nav.portfolio': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'nav.openMenu': 'Open menu',
        'nav.closeMenu': 'Close menu',
        'nav.toggleTheme': 'Toggle theme',
        'nav.switchLanguage': 'View this page in English',

        'hero.portraitAlt': "Diego Rodríguez's portrait",
        'hero.tagline': 'I turn complex ideas into high-performance web solutions',
        'hero.intro':
            "I'm Diego, a Technical Lead and engineer specialized in PHP and Laravel. My approach combines technical architecture with team leadership to deliver software that streamlines processes and scales with your business.",
        'hero.viewProjects': 'View Projects',
        'hero.downloadCv': 'Download CV',
        'hero.cvFile': '/Web Developer CV [en].pdf',

        'section.jobs': 'Work experience',
        'section.portfolio': 'Projects',
        'section.skills': 'Skills',
        'section.contact': 'Contact',

        'contact.pitch':
            "Have a project in mind? Get in touch and let's talk about how I can help.",
        'contact.imageAlt': 'Developing',

        'skills.management': 'Management & Planning',
        'skills.development': 'Development & Delivery',
        'skills.projectManagement': 'Project Management',

        'project.titleSuffix': 'Projects',
        'project.back': 'Back',
        'project.view': 'View project',
        'project.screenshot': 'screenshot',

        'lightbox.close': 'Close',
        'lightbox.prev': 'Previous',
        'lightbox.next': 'Next',
    },
} as const;

export const skillsKnowledge = {
    es: {
        management: [
            'Análisis y Levantamiento de Requerimientos: Traduzco necesidades de negocio en especificaciones técnicas claras.',
            'Arquitectura de Información y UX: Planificación de estructuras de datos y flujos de usuario antes de tocar una sola línea de código.',
            'Gestión de Proyectos con Kanban: Control de tiempos y entregables para asegurar que el proyecto no se desvíe del presupuesto.',
            'Consultoría Técnica: Evaluación de viabilidad para proyectos escalables (SaaS, LMS, E-commerce).',
        ],
        development: [
            'Desarrollo Web Full-Stack: Implementación robusta con Laravel o WordPress.',
            'Optimización de Rendimiento (WPO): Sitios rápidos y eficientes para mejorar la conversión.',
            'Integración de APIs y Automatización: Conexión de sistemas para optimizar procesos operativos.',
            'Comunicación e Inglés Avanzado: Comunicación en entornos bilingües. Actualmente cursando el nivel superior para maestría total del idioma.',
        ],
    },
    en: {
        management: [
            'Requirements Analysis & Gathering: I translate business needs into clear technical specifications.',
            'Information Architecture & UX: Planning data structures and user flows before writing a single line of code.',
            'Kanban Project Management: Tracking timelines and deliverables to keep the project within budget.',
            'Technical Consulting: Feasibility assessment for scalable projects (SaaS, LMS, E-commerce).',
        ],
        development: [
            'Full-Stack Web Development: Robust implementations with Laravel or WordPress.',
            'Web Performance Optimization (WPO): Fast, efficient sites that improve conversion.',
            'API Integration & Automation: Connecting systems to streamline business operations.',
            'Communication & Advanced English: Comfortable working in bilingual environments. Currently taking the highest-level course to fully master the language.',
        ],
    },
} as const;
