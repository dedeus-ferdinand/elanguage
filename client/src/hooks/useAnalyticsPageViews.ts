import { useEffect } from "react";
import { useLocation } from "wouter";
import { applyRouteFavicon } from "@/lib/applyRouteFavicon";
import { trackGaPageView } from "@/lib/analytics";

/** Send a GA4 page_view on every SPA route change (and initial load). */
export function useAnalyticsPageViews() {
  const [location] = useLocation();

  useEffect(() => {
    applyRouteFavicon(location);
    trackGaPageView({
      page_title: document.title,
      page_location: window.location.href,
      page_path: location,
    });
  }, [location]);
}
