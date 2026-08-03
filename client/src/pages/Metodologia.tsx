import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/SiteFooter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { asset } from "@/lib/asset";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CAL_COM_URL } from "@/lib/links";

export default function Metodologia() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  usePageMeta({
    title: "Metodología | E-Language",
    description:
      "Enfoque híbrido: clases en vivo con tutores, práctica con IA y foco en el 40% final de competencia oral laboral.",
    path: "/metodologia",
    image: "images/metodologia.webp",
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
            <a href="#" className="text-sm text-blue-900 font-semibold">Metodología</a>
            <button onClick={() => setLocation("/certificacion")} className="text-sm text-gray-600 hover:text-blue-900 transition">Certificación</button>
            <button onClick={() => setLocation("/empresas")} className="text-sm text-gray-600 hover:text-blue-900 transition">Para Empresas</button>
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
              <a href="#" onClick={() => setMenuOpen(false)} className="block text-sm text-blue-900 font-semibold py-2">Metodología</a>
              <button onClick={() => { setLocation("/certificacion"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Certificación</button>
              <button onClick={() => { setLocation("/empresas"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Para Empresas</button>
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
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-12">
            <p className="text-green-600 font-bold mb-2">ENFOQUE HÍBRIDO</p>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Metodología</h1>
            <p className="text-blue-900 font-bold text-lg mb-4">APRENDE COMO LOS PROFESIONALES</p>
            <p className="text-gray-700 max-w-3xl">
              Transformamos conocimiento en competencia. Nuestro modelo híbrido combina lo mejor de la tecnología con la guía experta de tutores certificados.
            </p>
          </div>

          {/* Imagen Clases en Vivo - Responsiva */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center">
            <img
              src={asset("images/metodologia.webp")}
              alt="Clases en Vivo con Tutores, Tecnología e Inteligencia Artificial"
              width={1024}
              height={1536}
              className="w-full h-auto block"
              fetchPriority="high"
              decoding="async"
              style={{
                objectFit: 'cover',
                height: '500px',
              }}
            />
          </div>

          {/* 3 Pasos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: "01",
                title: "Clases en Vivo con Tutores",
                description: "Sesiones interactivas de 3 horas semanales donde practicas conversación, presentaciones, negociación y fluidez laboral con retroalimentación inmediata.",
                color: "bg-blue-900",
              },
              {
                number: "02",
                title: "Práctica con Inteligencia Artificial",
                description: "2 horas semanales de práctica autónoma en nuestra plataforma. Simulaciones reales de trabajo, práctica oral intensiva y desarrollo de comprensión auditiva.",
                color: "bg-green-600",
              },
              {
                number: "03",
                title: "Enfoque en el 40% Final",
                description: "Nos especializamos en la parte más difícil: hablar con seguridad, rapidez y precisión en situaciones reales. Liderazgo conversacional y argumentación técnica.",
                color: "bg-orange-500",
              },
            ].map((step, idx) => (
              <Card key={idx} className="bg-white p-8 border-0 shadow-sm">
                <div className={`${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-blue-900 font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                Conoce más sobre nuestra Metodología
              </Button>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
