import { useEffect } from "react";

/** EC0679 — certificacion-landing-EC0679/client/index.html */
export const META_PIXEL_ID_EC0679 = "2572438283218156";
/** EC0974 — certificacion-landing-EC0974/client/index.html */
export const META_PIXEL_ID_EC0974 = "3028091184200376";

/** @deprecated use META_PIXEL_ID_EC0679 */
export const META_PIXEL_ID = META_PIXEL_ID_EC0679;

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

const initedPixelIds = new Set<string>();

function ensureFbqScript() {
  if (window.fbq) return;

  const n: Fbq = function (...args: unknown[]) {
    if (n.callMethod) {
      n.callMethod.apply(n, args);
    } else {
      n.queue.push(args);
    }
  } as Fbq;

  if (!window._fbq) window._fbq = n;
  window.fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  const firstScript = document.getElementsByTagName("script")[0];
  firstScript?.parentNode?.insertBefore(script, firstScript);
}

function trackMetaPageView(pixelId: string) {
  ensureFbqScript();
  if (!initedPixelIds.has(pixelId)) {
    window.fbq!("init", pixelId);
    initedPixelIds.add(pixelId);
  }
  window.fbq!("track", "PageView");
}

/** Solo en rutas de funnel certificación (EC0679 / EC0974). No en index.html global. */
export function useMetaPixel(pixelId: string = META_PIXEL_ID_EC0679) {
  useEffect(() => {
    trackMetaPageView(pixelId);
  }, [pixelId]);
}
