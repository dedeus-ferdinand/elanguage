# Plan de fix — post línea base Lighthouse

Plan ejecutable para corregir los hallazgos del diagnóstico de línea base y los gaps del repo.

Relacionado:

- [RELEASE-1.md](./RELEASE-1.md) — alcance de la primera release
- [SITE-OVERVIEW.md](./SITE-OVERVIEW.md) — stack, rutas, assets, URL

**Sitio medido:** https://dedeus-ferdinand.github.io/elanguage/  
**Baseline (30 jul 2026, Lighthouse 13.3, incógnito):** Performance Mobile 93 / Desktop 99 · Best Practices ~75 · SEO 91 · LCP Mobile 3.0 s

Tras aplicar los fixes, volver a medir Mobile y Desktop y comparar con esta línea base.

---

## Orden de ejecución

```text
[x] 1.1 Hero local (sacar CloudFront)
[x] 1.2 Favicon
[x] 2.1 lang="es"
[x] 2.2–2.3 Titles + meta descriptions por página
[x] 3.1 Quitar analytics Umami roto (placeholders)
[x] 2.4–2.7 Open Graph + robots.txt + sitemap.xml
[x] 4.1 Fuentes (sin @import; menos pesos)
[x] 4.2 Code splitting por ruta
[x] 1.3 loading="lazy" en imágenes no-LCP
[ ] Push + deploy Pages en verde
[ ] Re-Lighthouse Mobile + Desktop y comparar
```

---

## Fase 0 — Preparación

- Confirmar en Network si el hero de CloudFront carga o da 403.
- Tener el archivo del hero listo para `client/public/images/` (si 403, obtenerirlo al cliente / fuente de marca).
- Trabajar sobre el repo actual; documentar resultados post-fix junto a este plan o en un doc de seguimiento.

**Done when:** hay asset de hero disponible (o decisión explícita de reemplazo).

---

## Fase 1 — Imágenes críticas

| # | Tarea | Notas | Criterio done |
|---|--------|-------|---------------|
| 1.1 | Hero local | Guardar en `client/public/images/hero.webp`. Actualizar `Home.tsx`: quitar URL CloudFront; preferir `<img>` con `fetchpriority="high"` y `asset()` | Hero visible en local y en GitHub Pages |
| 1.2 | Favicon | Derivar de `logo.png` → `client/public/favicon.ico` (+ opcional apple-touch-icon). Link en `index.html` | Ícono en la pestaña |
| 1.3 | Lazy en no-LCP | `loading="lazy"` en imágenes de páginas interiores; logo del nav sin lazy | Sin cambiar diseño |

**No incluido aquí:** rediseño, responsive, convertir logo a SVG (opcional / más adelante).

### Nota sobre el hero (CloudFront)

La foto del inicio hoy se pide a una URL externa (CloudFront / Manus). Fuera de ese entorno a menudo falla (403) o no hay control de caché. La solución es la misma que con las otras imágenes: archivo en el repo y ruta local.

---

## Fase 2 — SEO básico

| # | Tarea | Detalle | Criterio done |
|---|--------|---------|---------------|
| 2.1 | Idioma | `client/index.html`: `lang="es"` | Contenido marcado en español |
| 2.2 | Titles | Título real por ruta (Home, Metodología, Certificación, Empresas, Fundadora, 404). En SPA: actualizar `document.title` al navegar. Quitar `{{project_title}}` | Sin placeholder |
| 2.3 | Meta description | Una description por página | Lighthouse deja de marcar description faltante |
| 2.4 | Open Graph | `og:title`, `og:description`, `og:image`, `og:url` (URLs absolutas bajo `/elanguage/`) | Meta OG presentes |
| 2.5 | Canonical | URL canónica absoluta por ruta | Canonical correcto |
| 2.6 | robots.txt | `client/public/robots.txt` con Allow + URL del sitemap | 200 en Pages |
| 2.7 | sitemap.xml | Las 5 rutas reales con base `/elanguage/` | 200 en Pages |

**No es** SEO de marketing (keywords, blog, backlinks).

---

## Fase 3 — Best Practices / consola

| # | Tarea | Detalle |
|---|--------|---------|
| 3.1 | Analytics roto | Quitar o condicionar el script Umami con `%VITE_ANALYTICS_*%` en `index.html` hasta tener GA4 |
| 3.2 | Consola | Revisar errores/warnings en DevTools al cargar Home |
| 3.3 | Ruido Manus | Si runtime/debug Manus afecta Best Practices en prod, desactivar en el build de Pages |

**Done when:** consola limpia o solo warnings no bloqueantes en la carga inicial.

---

## Fase 4 — Velocidad

| # | Tarea | Detalle |
|---|--------|---------|
| 4.1 | Fuentes | Sacar `@import` de Google Fonts en `index.css`. Usar `preconnect` + `<link>` en HTML. Reducir pesos (p. ej. Montserrat 600/700, Open Sans 400/600) |
| 4.2 | Code splitting | `React.lazy` + `Suspense` por página en `App.tsx` para bajar JS no usado en la carga inicial |
| 4.3 | Logo (opcional) | SVG o PNG de mayor resolución si Lighthouse sigue marcando baja resolución |

**Caché corta de GitHub Pages (~10 min):** limitación de la plataforma; no es el foco de este plan. Se acepta o se revisa en publicación/hosting posterior.

---

## Fase 5 — Re-medir

1. Deploy de GitHub Actions en verde.
2. Lighthouse Mobile y Desktop en **incógnito** (evitar extensiones).
3. Comparar con la línea base:

| Métrica | Baseline | Meta |
|---------|----------|------|
| Performance Mobile | 93 | Mantener o mejorar |
| LCP Mobile | 3.0 s | ≤ 2.5 s |
| SEO | 91 | ≥ 95 |
| Best Practices | ~75 | ≥ 90 |
| Title / description / favicon | Fallan | Pasan |

Registrar el resultado post-fix (doc o sección nueva en `docs/`).

---

## Fuera de este plan

Quedan en Release 1 pero **después** de este fix plan:

- Google Analytics 4
- Google Search Console (enviar sitemap)
- Dominio custom / publicación “final” más allá de Pages

Excluido del release (ver RELEASE-1):

- Mejoras de diseño
- Optimización responsive
- CMS / blog
- Migración de stack, formularios/CRM, SEO avanzado, ads pixels, accesibilidad profunda
