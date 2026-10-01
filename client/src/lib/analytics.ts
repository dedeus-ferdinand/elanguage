/** Deferred GA4 loader — keeps gtag off the critical path. */

export const GA_MEASUREMENT_ID = "G-TRGF8N6CQV";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaReady?: boolean;
  }
}

type PageViewPayload = {
  page_title: string;
  page_location: string;
  page_path: string;
};

const pendingPageViews: PageViewPayload[] = [];
let loadScheduled = false;

function ensureStub() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }
}

function flushPageViews() {
  if (typeof window.gtag !== "function") return;
  for (const view of pendingPageViews.splice(0)) {
    window.gtag("event", "page_view", {
      ...view,
      send_to: GA_MEASUREMENT_ID,
    });
  }
}

function loadGtag() {
  if (window.__gaReady) return;
  window.__gaReady = true;
  ensureStub();

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.onload = () => {
    window.gtag!("js", new Date());
    window.gtag!("config", GA_MEASUREMENT_ID, { send_page_view: false });
    flushPageViews();
    window.dispatchEvent(new Event("gtag-ready"));
  };
  document.head.appendChild(script);
}

const CERT_FUNNEL_PATH_PREFIX = "/certificacion/ec";

function defaultAnalyticsDelayMs(): number {
  if (typeof window === "undefined") return 2500;
  const path = window.location.pathname || "/";
  return path.startsWith(CERT_FUNNEL_PATH_PREFIX) ? 5500 : 2500;
}

/** Schedule GA after first paint / idle. Longer delay on cert landings. Call once from app boot. */
export function scheduleDeferredAnalytics(delayMs = defaultAnalyticsDelayMs()) {
  if (loadScheduled || typeof window === "undefined") return;
  loadScheduled = true;
  ensureStub();

  const run = () => {
    window.setTimeout(loadGtag, delayMs);
  };

  if (document.readyState === "complete") {
    if ("requestIdleCallback" in window) {
      (
        window as Window & {
          requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void;
        }
      ).requestIdleCallback(run, { timeout: 4000 });
    } else {
      run();
    }
  } else {
    window.addEventListener(
      "load",
      () => {
        if ("requestIdleCallback" in window) {
          (
            window as Window & {
              requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void;
            }
          ).requestIdleCallback(run, { timeout: 4000 });
        } else {
          run();
        }
      },
      { once: true },
    );
  }
}

export function trackGaPageView(payload: PageViewPayload) {
  ensureStub();
  if (window.__gaReady && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      ...payload,
      send_to: GA_MEASUREMENT_ID,
    });
    return;
  }
  pendingPageViews.push(payload);
}
