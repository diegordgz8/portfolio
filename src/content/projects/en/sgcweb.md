---
name: SGC Web
description: A web-based condominium management system built with the TALL Stack. A highly complex academic project that includes payment modules, monthly closings and internal communication. Focused on interface reactivity with Livewire and a robust Laravel backend architecture.
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

### The Challenge

The goal was to digitize the administration of residential communities, replacing manual processes with a centralized platform. The main challenge was building a real-time communication system and transparent financial management for owners and administrators.

### Technical Implementation (TALL Stack)

- **Reactive backend:** Used **Laravel** with **Livewire** to build a dynamic interface without leaving the PHP ecosystem, so payment and announcement updates are reflected instantly.
- **Admin panel:** Implemented a robust dashboard to manage units, register suppliers and control shared expenses.
- **Dynamic frontend:** Designed components with **Tailwind CSS** and handled lightweight client-side state with **Alpine.js** (such as confirmation modals and quick filters).
- **Security & roles:** Structured permissions to separate the views of an Administrator (full management) and a Resident (account statements and news).

### Project Impact

- **Time savings:** Less manual administrative work by automating the "Month-end closing" reports.
- **Transparency:** A centralized announcements module that improves traceability of information sent to residents.
