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
let scriptInjected = false;

function ensureFbqScript() {
  if (scriptInjected || window.fbq) {
    scriptInjected = true;
    return;
  }
  scriptInjected = true;

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
  document.head.appendChild(script);
}

function trackMetaPageView(pixelId: string) {
  ensureFbqScript();
  if (!initedPixelIds.has(pixelId)) {
    window.fbq!("init", pixelId);
    initedPixelIds.add(pixelId);
  }
  window.fbq!("track", "PageView");
}

function scheduleIdle(fn: () => void, delayMs: number) {
  const run = () => window.setTimeout(fn, delayMs);
  if ("requestIdleCallback" in window) {
    (
      window as Window & {
        requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void;
      }
    ).requestIdleCallback(run, { timeout: delayMs + 2000 });
  } else {
    run();
  }
}

const META_PIXEL_DELAY_MS = 5500;

/** Solo en rutas de funnel certificación (EC0679 / EC0974). Diferido post-LCP. */
export function useMetaPixel(pixelId: string = META_PIXEL_ID_EC0679) {
  useEffect(() => {
    let cancelled = false;
    scheduleIdle(() => {
      if (!cancelled) trackMetaPageView(pixelId);
    }, META_PIXEL_DELAY_MS);
    return () => {
      cancelled = true;
    };
  }, [pixelId]);
}
