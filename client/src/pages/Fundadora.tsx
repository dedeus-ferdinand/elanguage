import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/SiteFooter";
import { CheckCircle2, Award, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { asset } from "@/lib/asset";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CAL_COM_URL, DRIVE_VOCABULARY_URL } from "@/lib/links";

export default function Fundadora() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  usePageMeta({
    title: "Fundadora | E-Language",
    description:
      "Conozca a Paulina González, la visión detrás de E-Language y el enfoque en inglés para el mundo laboral.",
    path: "/fundadora",
    image: "images/fundadora.webp",
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
            <button onClick={() => setLocation("/empresas")} className="text-sm text-gray-600 hover:text-blue-900 transition">Para Empresas</button>
            <a href="#" className="text-sm text-blue-900 font-semibold">Fundadora</a>
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
              <button onClick={() => { setLocation("/empresas"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Para Empresas</button>
              <a href="#" onClick={() => setMenuOpen(false)} className="block text-sm text-blue-900 font-semibold py-2">Fundadora</a>
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
        <div className="mb-8 w-full overflow-hidden">
          <img
            src={asset("images/fundadora.webp")}
            alt="Paulina González"
            width={1870}
            height={1014}
            className="w-full h-auto block"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">Conoce a Paulina González</h1>

            <h2 className="text-2xl font-bold text-blue-900 mb-6">La Visión detrás de E-Language</h2>
            
            <p className="text-gray-700 mb-6">
              E-Language nace de la experiencia, visión y trayectoria profesional de Paulina González, especialista en enseñanza de idiomas y desarrollo de competencias lingüísticas para contextos académicos y corporativos.
            </p>

            <p className="text-gray-700 font-semibold mb-4">Con más de 15 años de experiencia en educación, Paulina ha trabajado como:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                "Docente universitaria",
                "Instructora de inglés y español para empresas globales",
                "Diseñadora instruccional",
                "Desarrolladora de contenido educativo",
                "Especialista en programas de inglés laboral",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-gray-700 font-semibold mb-4">Su experiencia incluye colaboración con:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                "Universidad Iberoamericana Puebla",
                "Universidad Madero",
                "Go Fluent",
                "Planet English",
                "Luca Learning",
                "Instituciones educativas y corporativas internacionales",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="text-orange-500">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-gray-700 font-semibold mb-4">Además, ha participado en:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                "Desarrollo curricular alineado al CEFR",
                "Creación de materiales educativos especializados",
                "Diseño de programas de capacitación lingüística",
                "Formación de profesionales en América, Europa y Asia",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="text-orange-500">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white p-8 rounded-lg mb-8 border-l-4 border-blue-900">
              <h3 className="text-blue-900 font-bold mb-4">Formación y Certificaciones</h3>
              <ul className="space-y-2">
                {[
                  "Licenciatura en Enseñanza del Inglés – BUAP",
                  "Teacher's Diploma – Cambridge Assessment English",
                  "Certificate in Advanced English (C1)",
                  "Certificación CONOCER EC0934",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <Award className="w-4 h-4 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <p className="text-gray-700 mb-6">La trayectoria profesional y académica de Paulina González está documentada en su currículum profesional, y constituye el fundamento de su labor en la creación de materiales educativos especializados.</p>
              <a href={DRIVE_VOCABULARY_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
                  Descargar Muestra – Vocabulario Ejecutivo
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
