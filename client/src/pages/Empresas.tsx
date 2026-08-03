import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/SiteFooter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { asset } from "@/lib/asset";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CAL_COM_URL, CAL_COM_EMPRESAS_URL, DRIVE_PROGRAM_URL } from "@/lib/links";

export default function Empresas() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  usePageMeta({
    title: "Para Empresas | E-Language",
    description:
      "Capacitación de inglés laboral para equipos. Resultados medibles, metodología híbrida y certificación profesional.",
    path: "/empresas",
    image: "images/empresas.webp",
  });

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <button onClick={handleGoHome} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
            <img src={asset("images/logo.png")} alt="E-Language Isotipo" className="w-10 h-10" />
            <span className="font-bold text-lg text-blue-900">E-Language</span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={handleGoHome} className="text-sm text-gray-600 hover:text-blue-900 transition">Inicio</button>
            <button onClick={() => setLocation("/metodologia")} className="text-sm text-gray-600 hover:text-blue-900 transition">Metodología</button>
            <button onClick={() => setLocation("/certificacion")} className="text-sm text-gray-600 hover:text-blue-900 transition">Certificación</button>
            <a href="#" className="text-sm text-blue-900 font-semibold">Para Empresas</a>
            <button onClick={() => setLocation("/fundadora")} className="text-sm text-gray-600 hover:text-blue-900 transition">Fundadora</button>
            <button onClick={() => setLocation("/blog")} className="text-sm text-gray-600 hover:text-blue-900 transition">Blog</button>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X className="w-6 h-6 text-blue-900" /> : <Menu className="w-6 h-6 text-blue-900" />}
            </button>
            <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button className="bg-red-500 hover:bg-red-600 text-white">Agenda tu diagnóstico</Button>
            </a>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container py-4 space-y-3">
              <button onClick={() => { handleGoHome(); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Inicio</button>
              <button onClick={() => { setLocation("/metodologia"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Metodología</button>
              <button onClick={() => { setLocation("/certificacion"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Certificación</button>
              <a href="#" onClick={() => setMenuOpen(false)} className="block text-sm text-blue-900 font-semibold py-2">Para Empresas</a>
              <button onClick={() => { setLocation("/fundadora"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Fundadora</button>
              <button onClick={() => { setLocation("/blog"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Blog</button>
              <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Agenda tu diagnóstico</Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <section className="py-0 bg-white">
        <div className="w-full overflow-hidden">
          <div className="mb-0">
            <img
              src={asset("images/empresas.webp")}
              alt="Para Empresas"
              width={1122}
              height={1017}
              className="w-full h-auto block"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
        <div className="container py-20">

          <p className="text-gray-700 mb-12 max-w-4xl leading-relaxed">
            Un equipo que no sabe argumentar en inglés representa retrasos en proyectos, malentendidos en contratos y pérdida de clientes globales. E-Language ofrece intervenciones lingüísticas de élite que se traducen en un retorno de inversión inmediato para los sectores de tecnología, manufactura y logística.
          </p>

          {/* El Costo Oculto */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">El Costo Oculto de la Fricción Comunicativa</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Retrasos en Proyectos",
                  description: "La comunicación ineficiente genera retrabajo y extensiones de plazo que impactan directamente los costos operativos.",
                },
                {
                  title: "Malentendidos en Contratos",
                  description: "Negociaciones que fallan o se complican por la incapacidad de articular posiciones con claridad en inglés.",
                },
                {
                  title: "Pérdida de Clientes Globales",
                  description: "Contratos perdidos o diferenciación comprometida frente a competidores con mejor comunicación internacional.",
                },
              ].map((item, idx) => (
                <Card key={idx} className="bg-red-50 p-8 border-l-4 border-red-500 shadow-sm">
                  <h4 className="text-red-600 font-bold text-lg mb-3">{item.title}</h4>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Plan de Diagnóstico */}
          <div className="bg-blue-50 p-12 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Plan de Diagnóstico Corporativo</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Ofrecemos un "Stress-Test" inicial para sus líderes de área. Una sesión piloto de 1 hora para detectar brechas críticas de comunicación antes de iniciar el programa de capacitación.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                { time: "30 min", description: "con instructor clínico" },
                { time: "30 min", description: "con IA de voz" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg text-center border border-blue-200">
                  <p className="text-3xl font-bold text-blue-900 mb-2">{item.time}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CAL_COM_EMPRESAS_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                  Solicitar Diagnóstico Corporativo
                </Button>
              </a>
              <a href={DRIVE_PROGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
                  Descargar el Programa Detallado
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
