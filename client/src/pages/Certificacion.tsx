import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { asset } from "@/lib/asset";

export default function Certificacion() {
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
            <button onClick={() => setLocation("/metodologia")} className="text-sm text-gray-600 hover:text-blue-900 transition">Metodología</button>
            <a href="#" className="text-sm text-blue-900 font-semibold">Certificación</a>
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
              <button onClick={() => { setLocation("/metodologia"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Metodología</button>
              <a href="#" onClick={() => setMenuOpen(false)} className="block text-sm text-blue-900 font-semibold py-2">Certificación</a>
              <button onClick={() => { setLocation("/empresas"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Para Empresas</button>
              <button onClick={() => { setLocation("/fundadora"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Fundadora</button>
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Agenda tu diagnóstico</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <section className="py-20 bg-blue-50">
        <div className="w-full">
          <div className="mb-12">
            <img src={asset("images/certificacion.webp")} alt="Certifica lo que Realmente Sabes Hacer" className="w-screen h-auto" />
          </div>
        </div>
        <div className="container">
          
          <div className="max-w-4xl mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              En E-Language desarrollamos sus competencias lingüísticas al máximo nivel. Al concluir el programa, y tras demostrar la solidez de sus habilidades en nuestra evaluación práctica, usted tendrá la oportunidad de presentar el proceso formal de certificación. Como Centro Evaluador, alineamos sus competencias para que pueda obtener un reconocimiento con validez oficial permanente emitido por la Secretaría de Educación Pública (SEP) a través del CONOCER.
            </p>
          </div>

          {/* Estándares */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                code: "Estándar EC0679",
                title: "Uso de la lengua inglesa en un contexto laboral",
                description: "Ideal para mandos medios y personal operativo de alto rendimiento. Certifica la capacidad de comunicarse eficazmente en situaciones laborales rutinarias y técnicas.",
              },
              {
                code: "Estándar EC0974",
                title: "Uso de la lengua inglesa en un contexto laboral avanzado",
                description: "Diseñado para la alta dirección y negociadores internacionales. Certifica la capacidad de liderar conversaciones complejas y cerrar acuerdos en inglés.",
              },
            ].map((standard, idx) => (
              <Card key={idx} className="bg-white p-8 border-l-4 border-blue-900 shadow-sm">
                <p className="text-blue-900 font-bold text-sm mb-2">{standard.code}</p>
                <h3 className="text-blue-900 font-bold text-lg mb-3">{standard.title}</h3>
                <p className="text-gray-700 text-sm">{standard.description}</p>
              </Card>
            ))}
          </div>

          {/* Garantía del Proceso */}
          <div className="bg-white p-8 rounded-lg border-l-4 border-green-600 mb-12 shadow-sm">
            <h3 className="text-blue-900 font-bold text-lg mb-4">Garantía del Proceso</h3>
            <p className="text-gray-700 mb-6">
              La emisión del certificado formal y su inscripción en el RENAP es la consecuencia natural de un perfil verdaderamente competente y entrenado bajo nuestro método.
            </p>
            <ul className="space-y-3">
              {[
                "Evaluación práctica de 2.5 horas en plataforma tecnológica",
                "Certificado con validez permanente en el RENAP",
                "Reconocimiento oficial de la SEP",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Avales */}
          <div className="mb-12">
            <p className="text-gray-700 font-semibold mb-6">Avalado por</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "SEP", subtitle: "Secretaría de Educación Pública" },
                { name: "CONOCER", subtitle: "Organismo Nacional de Normalización" },
              ].map((org, idx) => (
                <div key={idx} className="bg-blue-900 text-white p-6 rounded-lg text-center">
                  <p className="text-2xl font-bold mb-2">{org.name}</p>
                  <p className="text-blue-200 text-sm">{org.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
              Conoce el Proceso de Certificación
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
                <li><button onClick={() => setLocation("/metodologia")} className="hover:text-white transition">Metodología</button></li>
                <li><a href="#" className="hover:text-white transition">Certificación</a></li>
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
