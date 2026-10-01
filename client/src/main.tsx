import { createRoot } from "react-dom/client";
import { scheduleDeferredAnalytics } from "./lib/analytics";
import { isCertFunnelPath } from "./lib/isCertFunnelPath";

scheduleDeferredAnalytics();

async function boot() {
  const rootEl = document.getElementById("root");
  if (!rootEl) return;

  if (isCertFunnelPath()) {
    const { default: CertApp } = await import("./CertApp");
    createRoot(rootEl).render(<CertApp />);
    return;
  }

  await import("./index.css");
  const { default: App } = await import("./App");
  createRoot(rootEl).render(<App />);
}

void boot();
