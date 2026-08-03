import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SiteFooter from "@/components/SiteFooter";
import { CheckCircle2, Users, Zap, Award, BookOpen, Briefcase, Globe, TrendingUp, Clock, Target, Zap as ZapIcon, FileCheck, Users2, Brain, MessageSquare, BarChart3, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { asset } from "@/lib/asset";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CAL_COM_URL, DRIVE_PROGRAM_URL } from "@/lib/links";

/**
 * E_Language - English Certification for the Workplace
 * 
 * Design Philosophy: Corporate Elegance + Modern Minimalism
 * - Montserrat para headings (bold, corporate)
 * - Open Sans para body (clean, readable)
 * - Azul corporativo (#1F3A5F) como primario
 * - Verde (#43A047) para growth, Rojo (#E53935) para CTAs, Naranja (#FB8C00) para energía
 * - Hero con overlay corporativo y foto de fondo
 * - Secciones: Programa, Metodología, Certificación, Para Empresas, Fundadora
 */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  usePageMeta({
    title: "E-Language | Programa de aceleración lingüística de inglés",
    description:
      "Transforme su inglés laboral en 12 semanas con metodología híbrida. Evaluación práctica y certificación alineada a SEP y CONOCER.",
    path: "/",
    image: "images/hero.webp",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={asset("images/logo.png")} alt="E-Language Isotipo" className="w-10 h-10" />
            <span className="font-bold text-lg text-blue-900">E-Language</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#programa" className="text-sm text-gray-600 hover:text-blue-900 transition">Programa</a>
            <button onClick={() => setLocation("/metodologia")} className="text-sm text-gray-600 hover:text-blue-900 transition">Metodología</button>
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
              <a href="#programa" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2">Programa</a>
              <button onClick={() => { setLocation("/metodologia"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Metodología</button>
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

      {/* Hero Section con Overlay Corporativo */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={asset("images/hero.webp")}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          {/* Overlay corporativo */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-900">Programa de</span>
                <br />
                <span className="text-blue-900">Aceleración Lingüística</span>
                <br />
                <span className="text-green-600">de  Inglés</span>
              </h1>

              <p className="text-lg md:text-xl font-semibold text-blue-900 max-w-2xl mt-6">
                Destrabe el verdadero potencial de su inglés. Domine la ejecución en el mundo de los negocios.
              </p>

              <p className="text-base text-gray-700 max-w-2xl mt-6 leading-relaxed">
                No le vendemos un curso de gramática estática ni un diploma sin valor de mercado. Con nuestra metodología híbrida de 12 semanas, transformamos su base teórica (60% de nivel) en una competencia verbal y argumentativa del 100%. Al finalizar, valide su rendimiento mediante una evaluación oficial bajo estándares de la SEP y el CONOCER.
              </p>

              {/* Transformación 60% → 100% */}
              <div className="flex items-center gap-4 py-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-900">60%</p>
                </div>
                <div className="text-4xl text-red-500 font-bold">→</div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">100%</p>
                </div>
              </div>

              {/* Métricas */}
              <div className="grid grid-cols-3 gap-4 py-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-900">12</p>
                  <p className="text-sm text-gray-600">Semanas</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-900">60</p>
                  <p className="text-sm text-gray-600">Horas</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-900">Metodología</p>
                  <p className="text-sm text-gray-600">Híbrida</p>
                </div>
              </div>

              {/* Enfoque en el 40% Final */}
              <div className="bg-white/95 p-6 rounded-lg space-y-4 mb-6">
                <h3 className="font-bold text-lg text-blue-900">El Enfoque en el 40% Final</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">3h</div>
                    <div>
                      <p className="font-semibold text-gray-900">Semanales - Clases en vivo</p>
                      <p className="text-sm text-gray-700">con tutores expertos en grupos ultra-reducidos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">2h</div>
                    <div>
                      <p className="font-semibold text-gray-900">Semanales - Práctica con IA</p>
                      <p className="text-sm text-gray-700">de voz en entornos laborales de alta fidelidad</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                    <div>
                      <p className="font-semibold text-gray-900">Evaluación Práctica</p>
                      <p className="text-sm text-gray-700">Prueba de 2.5 horas enfocada en resolver retos comunicativos reales</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avalado por */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Avalado por</p>
                <p className="text-lg font-bold text-blue-900">SEP • CONOCER</p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-red-500 hover:bg-red-600 text-white">
                    Agenda tu diagnóstico
                  </Button>
                </a>
                <a href={DRIVE_PROGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50">
                    Descargar el Programa Detallado
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programa Section */}
      <section id="programa" className="py-20 bg-blue-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Programa de Aceleración Lingüística de Ingles</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Un programa intensivo diseñado para profesionales que necesitan dominar el inglés en contextos corporativos reales. No es un curso tradicional, es una transformación lingüística.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Certificación de Inglés Laboral",
                description: "Para profesionales que ya hablan inglés y desean validar oficialmente sus competencias.",
                features: [
                  "Diagnóstico inicial",
                  "Evaluación práctica",
                  "Preparación estratégica",
                  "Certificación alineada a CONOCER",
                  "Validación de competencias laborales",
                ],
              },
              {
                title: "Inglés Profesional por Sectores",
                description: "Programas especializados para negocios, logística, manufactura, turismo, tecnología y comercio internacional.",
                features: [
                  "Contenido especializado",
                  "Contexto laboral real",
                  "Vocabulario técnico",
                  "Aplicación práctica",
                  "Certificación por sector",
                ],
              },
              {
                title: "Programa Intensivo de Fluidez",
                description: "12 semanas intensivas con 3 horas semanales en vivo + 2 horas con IA.",
                features: [
                  "60 horas de formación",
                  "Material especializado",
                  "Seguimiento personalizado",
                  "Evaluación práctica final",
                  "Certificación validada",
                ],
              },
            ].map((program, idx) => (
              <Card key={idx} className="bg-white p-8 border-0 shadow-sm hover:shadow-md transition">
                <h3 className="text-blue-900 font-bold text-lg mb-3">{program.title}</h3>
                <p className="text-gray-700 text-sm mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">¿Quiénes estudian en E-Language?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Profesionales", description: "Que necesitan utilizar inglés en reuniones, presentaciones, llamadas internacionales y negociaciones." },
                { title: "Universitarios", description: "Que buscan desarrollar competencias reales antes de ingresar al mercado laboral." },
                { title: "Empresas", description: "Que necesitan talento con comunicación efectiva en inglés para contextos globales." },
                { title: "Personas que ya hablan inglés", description: "Pero necesitan fluidez profesional, seguridad, validación oficial y mayor competitividad laboral." },
              ].map((item, idx) => (
                <div key={idx}>
                  <p className="font-bold text-lg mb-2">{item.title}</p>
                  <p className="text-blue-100 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      <SiteFooter />
    </div>
  );
}
