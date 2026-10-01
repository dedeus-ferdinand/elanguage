import { asset } from "@/lib/asset";
import { isCertFunnelPath } from "@/lib/isCertFunnelPath";

const SITE_ICON = "favicon.png";
const CERT_ICON = "images/isotipo-centro-evaluador.png";

/** ECS isotipo on cert funnels; E-Language mark everywhere else. */
export function applyRouteFavicon(pathname: string) {
  if (typeof document === "undefined") return;
  const href = asset(isCertFunnelPath(pathname) ? CERT_ICON : SITE_ICON);
  for (const rel of ["icon", "apple-touch-icon"] as const) {
    let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = href;
  }
}