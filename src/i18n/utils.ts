import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, languages, ui, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
    const [, first] = url.pathname.split('/');
    return first in languages ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
    return (key: keyof (typeof ui)[typeof defaultLang]) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Prefixes a root-relative path with the locale, e.g. ('/#jobs', 'en') -> '/en/#jobs'. */
export function localizePath(path: string, lang: Lang): string {
    if (lang === defaultLang) return path;
    return `/${lang}${path === '/' ? '/' : path}`;
}

/** Strips the locale prefix, so the same page can be linked in another language. */
export function unlocalizePath(pathname: string): string {
    return pathname.replace(/^\/(en)(?=\/|$)/, '') || '/';
}

/** `getStaticPaths` param for the `[...lang]` routes: undefined renders the unprefixed default. */
export function langParam(lang: Lang): string | undefined {
    return lang === defaultLang ? undefined : lang;
}

/**
 * Content lives in `<collection>/<lang>/<slug>.md`. Returns the entries for one language,
 * with the language folder removed from the slug so URLs and sorting stay language-agnostic.
 */
export async function getLocalizedCollection<C extends 'jobs' | 'projects'>(
    collection: C,
    lang: Lang,
) {
    const entries = (await getCollection(collection)) as CollectionEntry<C>[];
    return entries
        .filter((entry) => entry.slug.startsWith(`${lang}/`))
        .map((entry) => ({ entry, slug: entry.slug.slice(lang.length + 1) }));
}
