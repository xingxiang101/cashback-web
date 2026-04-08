/** Production site URL (matches public/CNAME). */
export const SITE_URL = "https://koox.io";

function ensureMeta(attr: "name" | "property", key: string): HTMLMetaElement {
  const sel =
    attr === "name" ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  let el = document.querySelector(sel);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  return el as HTMLMetaElement;
}

function setAlternateLink(hreflang: string, href: string): void {
  const sel = `link[rel="alternate"][hreflang="${hreflang}"]`;
  let el = document.querySelector(sel) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = "alternate";
    el.hreflang = hreflang;
    document.head.appendChild(el);
  }
  el.href = href;
}

const OG_IMAGE_PATH = "/showcase-smart-planner.jpg";

/**
 * Keeps title, description, Open Graph, Twitter, and hreflang pointers in sync
 * with the active locale (SPA single URL).
 */
export function applyWebSeo(params: {
  title: string;
  description: string;
  locale: "en" | "zh-Hant";
  /** Path including leading slash, e.g. `/` or `/merchants`. */
  path?: string;
}): void {
  const { title, description, locale, path = "/" } = params;
  const ogLocale = locale === "zh-Hant" ? "zh_TW" : "en_US";
  const ogLocaleAlternate = locale === "zh-Hant" ? "en_US" : "zh_TW";
  const normalizedPath =
    path === "/" || path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const pageUrl = `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
  const imageUrl = new URL(OG_IMAGE_PATH, `${SITE_URL}/`).href;

  document.title = title;
  ensureMeta("name", "description").content = description;

  ensureMeta("property", "og:type").content = "website";
  ensureMeta("property", "og:url").content = pageUrl;
  ensureMeta("property", "og:title").content = title;
  ensureMeta("property", "og:description").content = description;
  ensureMeta("property", "og:site_name").content = "Koox";
  ensureMeta("property", "og:image").content = imageUrl;
  ensureMeta("property", "og:image:alt").content = "Koox app preview";
  ensureMeta("property", "og:locale").content = ogLocale;
  ensureMeta("property", "og:locale:alternate").content = ogLocaleAlternate;

  ensureMeta("name", "twitter:card").content = "summary_large_image";
  ensureMeta("name", "twitter:title").content = title;
  ensureMeta("name", "twitter:description").content = description;
  ensureMeta("name", "twitter:image").content = imageUrl;

  const canonical = document.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;
  if (canonical) canonical.href = pageUrl;

  setAlternateLink("en", pageUrl);
  setAlternateLink("zh-Hant", pageUrl);
  setAlternateLink("x-default", pageUrl);
}
