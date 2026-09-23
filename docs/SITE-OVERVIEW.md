# Site Overview — E-Language Web

Resumen del estado actual del sitio. Actualizar cuando cambien stack, rutas, assets o URL de publicación.

Relacionado: [RELEASE-1.md](./RELEASE-1.md) (alcance de la primera release).

---

## 1. Stack

| Ítem | Valor |
|------|--------|
| Framework | Vite + React 19 (no Next, no Astro) |
| UI | Tailwind 4 + shadcn/ui |
| Router | Wouter — rutas client-side fijas (SPA) |
| Package manager | pnpm |
| Server | Express mínimo para servir estáticos en producción (`server/index.ts`) |
| Origen | Template Manus (`web-static`) |
| Deploy | Nada aún — sin Vercel/Netlify/remote configurado |

**Arranque local:** `pnpm dev` → http://localhost:3000/

---

## 2. Mapa del sitio

Todo estático (sin rutas dinámicas tipo `/post/:id`).

| Ruta | Página |
|------|--------|
| `/` | Home |
| `/metodologia` | Metodología |
| `/certificacion` | Certificación (hub) |
| `/empresas` | Para Empresas |
| `/fundadora` | Fundadora |
| `/404` + fallback | Not Found |

### Certificaciones CONOCER

| Ruta | Página |
|------|--------|
| `/certificacion/ec0679` | Landing EC0679 |
| `/certificacion/ec0679/agenda` | Agendar EC0679 |
| `/certificacion/ec0974` | Landing EC0974 |
| `/certificacion/ec0974/agenda` | Agendar EC0974 |

Rutas en minúsculas, agrupadas bajo `/certificacion`. El hub general sigue siendo `/certificacion`.

---

## 3. Assets actuales

| Asset | Estado |
|-------|--------|
| Logo | Local: `client/public/images/logo.png` (60×60, PNG) — no SVG |
| Certificación | Local: `/images/certificacion.webp` |
| Empresas | Local: `/images/empresas.webp` |
| Fundadora | Local: `/images/fundadora.webp` |
| Metodología | Local: `/images/metodologia.webp` |
| Hero Home | Local: `/images/hero.webp` |
| Favicon | `client/public/favicon.png` |
| Manus storage | Ya no se usa en logo ni en las 4 imágenes de páginas |

Carpeta de assets: `client/public/images/`

| EC0679 landing | `client/public/images/ec0679/` — tarjetas, certificado, oficina; pendiente hero editorial e isotipo final |
| EC0974 landing | `client/public/images/ec0974/` — reemplazar placeholders con artes finales del repo Manus |

---

## 4. URL del sitio

| Entorno | URL |
|---------|-----|
| Local | http://localhost:3000/ |
| Producción (GitHub Pages) | https://dedeus-ferdinand.github.io/elanguage/ |

Deploy: GitHub Action `.github/workflows/deploy-pages.yml` (build Vite con `base: /elanguage/`). En Settings → Pages, la fuente debe ser **GitHub Actions** (no “Deploy from a branch”).
