# Release 1 — Alcance

Referencia de lo que se debe hacer en esta primera release del sitio E-Language.

Objetivo: mejorar tiempos de carga, SEO básico, observabilidad (analytics) y publicación. Desktop y móvil.

Estado actual del sitio (stack, rutas, assets, URL): [SITE-OVERVIEW.md](./SITE-OVERVIEW.md).

---

## Incluido

1. Imágenes y logos optimizados
2. Velocidad / tiempos de carga (menos peso, fuentes, loads)
3. SEO básico (title, description, lang, OG, favicon, sitemap/robots)
4. Google Analytics (GA4)
5. Google Search Console
6. Publicación del sitio (desktop y móvil)

## No incluido

- Mejoras de diseño
- Optimización responsive
- CMS / blog (no publicar blog sin gestión)
- Migración de stack, formularios/CRM, SEO avanzado, ads pixels, accesibilidad profunda

---

## Detalle del alcance

### 1. Imágenes y logos optimizados

- Assets propios (dejar de depender de Manus)
- Formato liviano (WebP/AVIF o SVG para logo)
- Compresión + tamaños razonables
- Uso correcto en código (`img`, lazy donde aplique, hero prioritario)
- Favicon

### 2. Velocidad / tiempos de carga

- Menos peso total (imágenes, JS, CSS)
- Fuentes: menos pesos + carga correcta (`preconnect` / self-host)
- Code splitting por ruta (JS no todo de golpe)
- Cache/CDN en publicación
- Medir antes/después (Lighthouse Mobile y Desktop)

### 3. SEO básico

Lo mínimo para que Google entienda y presente el sitio.

| Incluye | Ejemplo |
|---------|---------|
| Idioma | `lang="es"` |
| Título único por página | `<title>…</title>` |
| Meta description | 1–2 frases por página |
| Open Graph básicos | título, descripción, imagen al compartir |
| URLs limpias | las rutas que ya tienes |
| `alt` en imágenes clave | logo, hero, fotos |
| Favicon | ícono en pestaña |
| `robots.txt` + `sitemap.xml` | para Discovery |
| Canonical (simple) | evitar duplicados obvios |
| HTTPS | al publicar |

**No es** SEO de contenido/marketing (keywords research, blog, backlinks, copywriting).

### 4. Analytics (Google)

- Google Analytics 4 (GA4) en todas las páginas
- Eventos básicos opcionales: clics CTA (“Agenda…”, “Descargar…”), si los define el negocio
- Verificar que mide en móvil y desktop

### 5. Search Console

- Propiedad del dominio/URL
- Verificar ownership (DNS o meta tag o GA)
- Enviar sitemap
- Monitoreo inicial (cobertura, experiencia) — la data tarda días/semanas

### 6. Publicación

- Hosting + dominio (o subdominio)
- Build de producción
- HTTPS
- Variables de entorno correctas (sin placeholders rotos)
- Smoke test: home + 4 rutas cargan con imágenes
