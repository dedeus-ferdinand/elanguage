import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Empresas() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <button onClick={handleGoHome} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
            <img src="/images/logo.png" alt="E-Language Isotipo" className="w-10 h-10" />
            <span className="font-bold text-lg text-blue-900">E-Language</span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={handleGoHome} className="text-sm text-gray-600 hover:text-blue-900 transition">Inicio</button>
            <button onClick={() => setLocation("/metodologia")} className="text-sm text-gray-600 hover:text-blue-900 transition">Metodología</button>
            <button onClick={() => setLocation("/certificacion")} className="text-sm text-gray-600 hover:text-blue-900 transition">Certificación</button>
            <a href="#" className="text-sm text-blue-900 font-semibold">Para Empresas</a>
            <button onClick={() => setLocation("/fundadora")} className="text-sm text-gray-600 hover:text-blue-900 transition">Fundadora</button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
          >
            {menuOpen ? <X className="w-6 h-6 text-blue-900" /> : <Menu className="w-6 h-6 text-blue-900" />}
          </button>
          
          <Button className="hidden md:block bg-red-500 hover:bg-red-600 text-white">Agenda tu diagnóstico</Button>
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
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Agenda tu diagnóstico</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <section className="py-0 bg-white">
        <div className="w-full">
          <div className="mb-0">
            <img src="/images/empresas.webp" alt="Para Empresas" className="w-screen h-auto" />
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

            <div className="text-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                Solicitar Diagnóstico Corporativo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/logo.png" alt="E-Language Isotipo" className="w-8 h-8" />
                <span className="font-bold">E-Language</span>
              </div>
              <p className="text-blue-200 text-sm">English Certification for the Workplace</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programas</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><button onClick={handleGoHome} className="hover:text-white transition">Inicio</button></li>
                <li><button onClick={() => setLocation("/metodologia")} className="hover:text-white transition">Metodología</button></li>
                <li><button onClick={() => setLocation("/certificacion")} className="hover:text-white transition">Certificación</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><a href="#" className="hover:text-white transition">Para Empresas</a></li>
                <li><button onClick={() => setLocation("/fundadora")} className="hover:text-white transition">Fundadora</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-blue-200 text-sm">Email: info@e-language.mx</p>
              <p className="text-blue-200 text-sm">Tel: +52 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-200 text-sm">
            <p>&copy; 2024 E-Language. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
