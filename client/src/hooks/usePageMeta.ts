import { useEffect } from "react";

const SITE_ORIGIN = "https://dedeus-ferdinand.github.io";
const SITE_BASE = "/elanguage";

function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `${SITE_ORIGIN}${SITE_BASE}/`;
  return `${SITE_ORIGIN}${SITE_BASE}${clean}`;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
}

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** Path under public/, e.g. images/hero.webp */
  image?: string;
};

export function usePageMeta({ title, description, path, image = "images/hero.webp" }: PageMeta) {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", absoluteUrl(path));
    upsertMeta("property", "og:image", absoluteUrl(image));
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertCanonical(absoluteUrl(path));
  }, [title, description, path, image]);
}
