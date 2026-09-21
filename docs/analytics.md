# Analytics

Site measurement runs through Google Tag Manager (container `GTM-MZZBZ8WR`), which
feeds Google Analytics 4 (`G-TEKT2938CN`). Microsoft Clarity is loaded from GTM as
well and has no configuration in this repo.

## How it works

The site **never calls GA4 directly**: everything goes through `dataLayer`. Each
interaction worth measuring pushes an object with an `event` key, and GTM decides what
to do with it. That keeps the code agnostic of the analytics vendor.

The Google tag fires on `Initialization - All Pages` with `send_page_view`
**disabled**. Page views are emitted by the site itself from `src/layouts/Layout.astro`,
because View Transitions means there is no document reload between navigations. That
inline script has two constraints that must not be broken (see also `CLAUDE.md`):

- It must stay **byte-identical across languages**. If its text differed per page,
  View Transitions would re-run it on a language switch and every later navigation
  would be reported twice. That is why the language is read from `<html lang>` at
  runtime instead of being templated in.
- It deduplicates on `pathname + search`, because the nav uses same-page hash links
  (`/#jobs`, `/#contact`) that can resolve into more than one `astro:page-load` per
  navigation.

Interaction events use **a single delegated listener on `document`**, never one
listener per element. Astro's bundled scripts run once per session, so one listener
covers every page reached through View Transitions; per-element listeners would be
lost after the first DOM swap.

## Environments

The GTM loader lives in `src/components/GoogleTagManager.astro` (plus its `<noscript>`
counterpart) and `Layout.astro` renders both only when `import.meta.env.PROD` is true.
`astro dev` therefore emits no container at all and local browsing never reaches GA4 or
Clarity.

`astro preview` serves the production build, so it _does_ load the real container: use
it — not `astro dev` — to debug tagging with GTM preview mode, and keep in mind that
those sessions are recorded like any other.

The `dataLayer` pushes themselves are not guarded. In development they simply pile up
in an array nobody reads, which is handy for inspecting payloads from the console.

## Naming convention

| Entity               | Format          | Example                    |
| -------------------- | --------------- | -------------------------- |
| Data layer variable  | `DLV - <key>`   | `DLV - page_language`      |
| Custom event trigger | `CE - <event>`  | `CE - certificate_verify`  |
| GA4 event tag        | `GA4 - <event>` | `GA4 - certificate_verify` |

`<event>` and `<key>` are **exactly** the string found in the `dataLayer`, in
snake_case. No Title Case, no spaces: the point is that searching the container for
`certificate_verify` surfaces all three pieces together.

Tags that are not GA4 events (the Google tag, gallery templates such as Clarity) keep
their descriptive names and do not follow this pattern.

## Event inventory

| Event                   | Source                                | Parameters                                                  | Trigger                      | Tag                           |
| ----------------------- | ------------------------------------- | ----------------------------------------------------------- | ---------------------------- | ----------------------------- |
| `pageview`              | `src/layouts/Layout.astro`            | `page_location`, `page_path`, `page_title`, `page_language` | `CE - pageview`              | `GA4 - pageview`              |
| `certificate_verify`    | `src/components/Certifications.astro` | `page_language`                                             | `CE - certificate_verify`    | `GA4 - certificate_verify`    |
| `certificate_code_copy` | `src/components/Certifications.astro` | `page_language`                                             | `CE - certificate_code_copy` | `GA4 - certificate_code_copy` |
| `language_switch`       | `src/components/LanguageSwitch.astro` | `language_from`, `language_to`                              | `CE - language_switch`       | `GA4 - language_switch`       |

Two notes on the `pageview` row. The GA4 tag sends it under the standard event name
`page_view` (with the underscore) so it feeds GA4's native page reports — the
`dataLayer` key and the GA4 event name differ here on purpose. And `page_path` is
pushed but not mapped on the tag, because GA4 derives the path from `page_location`;
`DLV - page_path` therefore exists but is currently unused.

`certificate_code_copy` fires on every click, so one person can count several times.
Read it as **users**, not as event count.

## GA4 custom dimensions

A parameter that is not registered as a custom dimension is still sent, but **does not
appear in reports**. The event-scoped dimensions currently registered:

| Dimension           | Parameter       |
| ------------------- | --------------- |
| Idioma de la página | `page_language` |
| Idioma origen       | `language_from` |
| Idioma destino      | `language_to`   |

They are shared across all events: a new event reusing `page_language` needs no
registration.

## Adding a new event

1. **In the code**: push to `dataLayer` from a delegated listener, reusing existing
   parameter names wherever possible.
2. **In GTM**: a `CE - <event>` custom event trigger (no extra conditions) and a
   `GA4 - <event>` tag pointing at the same GA4 configuration, with the event name
   matching the `dataLayer` one and parameters mapped to their `DLV - …` variables.
3. **Variables**: create `DLV - <key>` only for genuinely new parameters.
4. **In GA4**: register any new parameter as an event-scoped custom dimension.
5. **Verify** in GTM preview mode against `pnpm build && pnpm preview` (the dev
   server does not load the container), on both `/` and `/en/`, then publish.
6. **Update the inventory in this document.**

Renaming triggers and tags in GTM is safe: those names are container-internal labels.
What reaches GA4 is the tag's _event name_ field, which should not be changed without
accepting a break in historical continuity.

## Not measured yet

- CV download (`hero.downloadCv` in `src/pages/[...lang]/index.astro`): no event, and
  it is probably the strongest intent signal on the site.
- Contact form submission: the form does not exist yet.
- Outbound clicks on project links (`link`, `github`).

None of these is marked as a key event in GA4, deliberately: they are interest
signals, not business goals. Marking them would pollute the conversion rate.
