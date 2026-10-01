import { lazy, Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { asset } from "@/lib/asset";
import { CEDULA_CENTRO_EVALUADOR } from "@/lib/links";
import { ensureCertFonts } from "@/lib/perf";
import { usePageMeta } from "@/hooks/usePageMeta";
import { META_PIXEL_ID_EC0974, useMetaPixel } from "@/hooks/useMetaPixel";
import { CAL_COM_EC0974_LINK } from "@/lib/links";
import "./ec0974.css";

ensureCertFonts();

const Cal = lazy(() =>
  import("@calcom/embed-react").then((m) => ({ default: m.default })),
);

const calConfig = {
  layout: "month_view" as const,
  theme: "light" as const,
};

export default function Ec0974Agenda() {
  usePageMeta({
    title: "Agendar EC0974 | E-Language",
    description:
      "Agenda tu diagnóstico gratuito para la certificación EC0974. Revisión de credenciales y orientación con asesor.",
    path: "/certificacion/ec0974/agenda",
    image: "images/ec0974/hero-certificate.webp",
  });
  useMetaPixel(META_PIXEL_ID_EC0974);

  const officialLogoSrc = asset("images/isotipo-centro-evaluador.png");

  return (
    <div className="ec0974-landing booking-shell">
      <header className="booking-header">
        <Link className="booking-brand" href="/certificacion/ec0974" aria-label="Volver a la landing EC0974">
          <span className="booking-brand-mark">
            <img src={officialLogoSrc} alt="" />
          </span>
          <span className="booking-brand-copy">
            <strong>EC0974</strong>
            <small>Red CONOCER / SEP</small>
            <small className="brand-cedula">Cédula {CEDULA_CENTRO_EVALUADOR}</small>
          </span>
        </Link>
        <Link className="booking-back" href="/certificacion/ec0974">
          <ArrowLeft size={15} /> Volver a la landing
        </Link>
      </header>

      <main className="booking-main">
        <div className="booking-orbit booking-orbit--one" aria-hidden="true" />
        <div className="booking-orbit booking-orbit--two" aria-hidden="true" />
        <div className="booking-intro">
          <p className="section-label">Evaluación gratuita de perfil</p>
          <h1>
            Agenda tu Diagnóstico para la <em>Certificación EC0974</em>
          </h1>
          <p>
            Elige el horario que te convenga. Un asesor revisará tus certificaciones actuales y te orientará sobre tu
            ruta de certificación.
          </p>
          <div className="booking-trust">
            <span /> Reserva segura <span /> Confirmación automática <span /> Sin costo y sin compromiso
          </div>
        </div>

        <section className="booking-panel" aria-label="Agenda de diagnóstico">
          <div className="booking-panel-topline">
            <span>Agenda disponible</span>
            <span>Reunión informativa</span>
          </div>
          <Suspense
            fallback={
              <div className="booking-embed booking-cal-host booking-cal-host--loading" aria-busy="true">
                Cargando agenda…
              </div>
            }
          >
            <Cal
              calLink={CAL_COM_EC0974_LINK}
              calOrigin="https://cal.com"
              embedJsUrl="https://cal.com/embed/embed.js"
              config={calConfig}
              className="booking-embed booking-cal-host"
              aria-label="Agenda de diagnóstico EC0974"
            />
          </Suspense>
          <p className="booking-status">Agenda segura dentro de tu sitio</p>
        </section>
      </main>
    </div>
  );
}
