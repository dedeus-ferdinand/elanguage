/** Ensure /fonts/cert.css is in the document (hard load + SPA navigation). */
export function ensureCertFonts() {
  if (typeof document === "undefined") return;
  if (document.querySelector('link[href="/fonts/cert.css"]')) return;

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/fonts/cert.css";
  document.head.appendChild(link);
}

/** Preload an LCP image early (module evaluation / mount). */
export function preloadLcpImage(href: string) {
  if (typeof document === "undefined") return;
  if (document.querySelector(`link[rel="preload"][as="image"][href="${href}"]`)) return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = href;
  link.setAttribute("fetchpriority", "high");
  document.head.appendChild(link);
}
