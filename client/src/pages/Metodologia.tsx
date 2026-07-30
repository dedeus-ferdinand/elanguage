import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { asset } from "@/lib/asset";

export default function Metodologia() {
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
              <a href="#" onClick={() => setMenuOpen(false)} className="block text-sm text-blue-900 font-semibold py-2">Metodología</a>
              <button onClick={() => { setLocation("/certificacion"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Certificación</button>
              <button onClick={() => { setLocation("/empresas"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Para Empresas</button>
              <button onClick={() => { setLocation("/fundadora"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Fundadora</button>
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Agenda tu diagnóstico</Button>
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
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center -mx-4 md:mx-0">
            <img 
              src={asset("images/metodologia.webp")} 
              alt="Clases en Vivo con Tutores, Tecnología e Inteligencia Artificial" 
              className="w-screen md:w-full h-auto" 
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
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
              Conoce más sobre nuestra Metodología
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={asset("images/logo.png")} alt="E-Language Isotipo" className="w-8 h-8" />
                <span className="font-bold">E-Language</span>
              </div>
              <p className="text-blue-200 text-sm">English Certification for the Workplace</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programas</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><button onClick={handleGoHome} className="hover:text-white transition">Inicio</button></li>
                <li><a href="#" className="hover:text-white transition">Metodología</a></li>
                <li><button onClick={() => setLocation("/certificacion")} className="hover:text-white transition">Certificación</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><button onClick={() => setLocation("/empresas")} className="hover:text-white transition">Para Empresas</button></li>
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
