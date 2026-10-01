import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useMetaPixel } from "@/hooks/useMetaPixel";
import { CAL_COM_EC0679_EMBED } from "@/lib/links";

export default function Ec0679Agenda() {
  usePageMeta({
    title: "Agendar EC0679 | E-Language",
    description:
      "Reserva tu sesión de orientación sobre la certificación EC0679 con el Centro Evaluador E-Language.",
    path: "/certificacion/ec0679/agenda",
    image: "images/ec0679/hero.webp",
  });
  useMetaPixel();

  useEffect(() => {
    window.scrollTo(0, 0);
    void import("@/index.css");
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#294B70]">
      <header className="h-20 px-6 md:px-12 flex items-center justify-between border-b border-[rgba(41,75,112,0.1)] sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <Link
          href="/certificacion/ec0679"
          className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase hover:text-[#E76F2E] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Volver al sitio
        </Link>
        <div className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#667085]">
          Centro Evaluador <span className="text-[#E76F2E]">EC0679</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <div className="bg-[#1C3858] py-8 px-6 text-center text-white">
          <h1 className="font-serif text-3xl md:text-4xl mb-2">Reserva tu sesión de orientación</h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Selecciona el horario que mejor te convenga para hablar con Paulina González sobre tu proceso de
            certificación.
          </p>
        </div>

        <div className="flex-1 relative min-h-[700px]">
          <iframe
            src={CAL_COM_EC0679_EMBED}
            title="Agenda de Cal.com EC0679"
            className="absolute inset-0 w-full h-full border-0"
            allow="geolocation; microphone; camera; fullscreen"
          />
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-[rgba(41,75,112,0.1)] text-center">
        <p className="text-[10px] font-bold tracking-widest uppercase text-[#667085]">
          © 2026 E-Language México · Certificación Oficial SEP-CONOCER
        </p>
      </footer>
    </div>
  );
}
