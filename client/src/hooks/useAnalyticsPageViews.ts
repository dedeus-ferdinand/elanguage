import { useEffect } from "react";
import { useLocation } from "wouter";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-TRGF8N6CQV";

/** Send a GA4 page_view on every SPA route change (and initial load). */
export function useAnalyticsPageViews() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [location]);
}
