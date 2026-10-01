/** EC0679 / EC0974 landings + agenda — lightweight boot (no site Tailwind shell). */
export function isCertFunnelPath(pathname = typeof location !== "undefined" ? location.pathname : "/") {
  const p = pathname || "/";
  return p.includes("/certificacion/ec0679") || p.includes("/certificacion/ec0974");
}
