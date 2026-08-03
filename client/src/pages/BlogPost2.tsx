import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePageMeta } from "@/hooks/usePageMeta";
import { asset } from "@/lib/asset";
import { CAL_COM_URL } from "@/lib/links";
import { Menu, X, Calendar, User, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function BlogPost2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  usePageMeta({
    title: "De las Limitaciones a la Estrategia: Comunicar Soluciones en Inglés | E-Language",
    description:
      "Aprende el Método PSR (Problem - Solution - Result) para diagnosticar problemas, proponer soluciones y proyectar resultados en inglés.",
    path: "/blog/limitaciones-estrategia-comunicar-soluciones-ingles",
  });

  const handleGoHome = () => {
    setLocation("/");
  };

  const handleGoToBlog = () => {
    setLocation("/blog");
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
            <button onClick={() => setLocation("/fundadora")} className="text-sm text-gray-600 hover:text-blue-900 transition">Fundadora</button>
            <button onClick={handleGoToBlog} className="text-sm text-blue-900 font-semibold">Blog</button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
          >
            {menuOpen ? <X className="w-6 h-6 text-blue-900" /> : <Menu className="w-6 h-6 text-blue-900" />}
          </button>
          
          <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer">
            <Button className="hidden md:block bg-red-500 hover:bg-red-600 text-white">Agenda tu diagnóstico</Button>
          </a>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container py-4 space-y-3">
              <button onClick={() => { handleGoHome(); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Inicio</button>
              <button onClick={() => { setLocation("/metodologia"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Metodología</button>
              <button onClick={() => { setLocation("/certificacion"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Certificación</button>
              <button onClick={() => { setLocation("/empresas"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Para Empresas</button>
              <button onClick={() => { setLocation("/fundadora"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Fundadora</button>
              <button onClick={() => { handleGoToBlog(); setMenuOpen(false); }} className="block text-sm text-blue-900 font-semibold py-2 w-full text-left">Blog</button>
              <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Agenda tu diagnóstico</Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-4">
          <button
            onClick={handleGoToBlog}
            className="flex items-center gap-2 text-blue-900 hover:text-blue-700 font-semibold transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Blog
          </button>
        </div>
      </div>

      {/* Post Hero */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container max-w-3xl">
          <div className="mb-4">
            <span className="inline-block bg-orange-400 text-orange-900 px-3 py-1 rounded-full text-xs font-semibold">
              Estrategia
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            De las Limitaciones a la Estrategia: El Arte de Comunicar Soluciones en Inglés
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Paulina González</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>22 de junio, 2024</span>
            </div>
            <div>6 min de lectura</div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              ¿Te ha pasado alguna vez en una reunión que sabes exactamente cuál es el problema, pero al expresarlo en inglés suena como una simple queja? En el entorno corporativo global, los profesionales de alto impacto no solo señalan lo que está mal; diseñan la ruta de salida.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Si quieres que tus opiniones dejen de ser "comentarios" y se conviertan en decisiones respaldadas por tu equipo, necesitas una arquitectura mental clara.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Hoy vas a aprender el Método PSR (Problem - Solution - Result): la estructura lógica definitiva para diagnosticar un hecho en la oficina, proponer la solución más viable y proyectar el beneficio estratégico con total autoridad.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">La Estructura Base (Tu Hack Argumentativo)</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para dominar este sistema, grábate esta plantilla de tres pasos en la mente y rellénala según tu situación:
            </p>
            
            <div className="space-y-4 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900">
              <div className="font-mono text-sm text-gray-800 bg-white p-4 rounded">
                <p className="mb-3"><span className="font-bold">Currently, we are facing an issue with</span> [Verbo-ING o Sustantivo] due to ____________.</p>
                <p className="mb-3"><span className="font-bold">To address this, the most viable solution is</span> [Verbo-ING o Sustantivo] ____________.</p>
                <p><span className="font-bold">By doing so, we will be able to</span> ____________.</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Los 3 Pasos Explicados (Y cómo aplicarlos mañana mismo)</h2>
            
            <div className="space-y-6">
              {/* Paso 1 */}
              <Card className="bg-blue-50 border border-blue-200 p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Paso 1: El Hecho Exacto (The Problem)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <div>
                      <p className="font-semibold">La frase clave:</p>
                      <p className="text-sm italic">"Currently, we are facing an issue with..." (Actualmente, enfrentamos un problema con...)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <div>
                      <p className="font-semibold">La regla de oro:</p>
                      <p className="text-sm">El conector <span className="font-mono bg-gray-200 px-2 py-1 rounded">due to</span> (debido a) te obliga a ir al grano y señalar la causa raíz del problema, eliminando rodeos emocionales.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <div>
                      <p className="font-semibold">Nota gramatical:</p>
                      <p className="text-sm">Si usas un verbo después de <span className="font-mono bg-gray-200 px-2 py-1 rounded">with</span>, recuerda la regla profesional: debe terminar en <span className="font-mono bg-gray-200 px-2 py-1 rounded">-ing</span> (por ejemplo: with retaining..., with managing...).</p>
                    </div>
                  </li>
                </ul>
              </Card>

              {/* Paso 2 */}
              <Card className="bg-orange-50 border border-orange-200 p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Paso 2: La Propuesta Ejecutiva (The Solution)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <div>
                      <p className="font-semibold">La frase clave:</p>
                      <p className="text-sm italic">"To address this, the most viable solution is..." (Para abordar esto, la solución más viable es...)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <div>
                      <p className="font-semibold">El poder de "viable":</p>
                      <p className="text-sm">Al usar la palabra <span className="font-mono bg-gray-200 px-2 py-1 rounded">viable</span>, demuestras que no estás improvisando; implica que ya evaluaste que la propuesta es realista, rentable y lógica para la operación.</p>
                    </div>
                  </li>
                </ul>
              </Card>

              {/* Paso 3 */}
              <Card className="bg-green-50 border border-green-200 p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Paso 3: El Impacto Estratégico (The Result)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <div>
                      <p className="font-semibold">La frase clave:</p>
                      <p className="text-sm italic">"By doing so, we will be able to..." (Al hacer esto, seremos capaces de...)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <div>
                      <p className="font-semibold">El remate definitivo:</p>
                      <p className="text-sm">Este es el remate. A un tomador de decisiones le importa el beneficio final. Aquí es donde vendes el retorno de inversión, la optimización de tiempos o el blindaje del negocio.</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Caso Práctico */}
          <div className="mb-12 bg-blue-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">El Modelo en Acción: Caso Práctico de Oficina</h2>
            <p className="text-blue-100 mb-6">
              Imagina que estás en una junta de evaluación de proyectos y necesitas resolver un cuello de botella en el seguimiento de prospectos o clientes. Así se lee una argumentación con total fluidez cognitiva:
            </p>
            
            <div className="space-y-4">
              <div className="bg-blue-800 p-4 rounded border-l-4 border-green-400">
                <p className="text-xs font-bold text-green-400 mb-2">[PROBLEM]</p>
                <p className="text-white italic">"Currently, we are facing an issue with retaining high-value leads due to delays in our initial response time."</p>
                <p className="text-blue-200 text-sm mt-2">(Actualmente, enfrentamos un problema con la retención de prospectos de alto valor debido a retrasos en nuestro tiempo de respuesta inicial).</p>
              </div>

              <div className="bg-blue-800 p-4 rounded border-l-4 border-orange-400">
                <p className="text-xs font-bold text-orange-400 mb-2">[SOLUTION]</p>
                <p className="text-white italic">"To address this, the most viable solution is integrating an automated scheduling platform."</p>
                <p className="text-blue-200 text-sm mt-2">(Para abordar esto, la solución más viable es integrar una plataforma de agendamiento automatizado).</p>
              </div>

              <div className="bg-blue-800 p-4 rounded border-l-4 border-green-500">
                <p className="text-xs font-bold text-green-400 mb-2">[RESULT]</p>
                <p className="text-white italic">"By doing so, we will be able to secure immediate consultations and increase our conversion rate."</p>
                <p className="text-blue-200 text-sm mt-2">(Al hacer esto, seremos capaces de asegurar consultas inmediatas y aumentar nuestra tasa de conversión).</p>
              </div>
            </div>
          </div>

          {/* Reto Práctico */}
          <div className="mb-12 bg-gray-50 border-l-4 border-blue-900 p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Tu Reto Práctico de Hoy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El inglés de negocios no se aprende memorizando listas de verbos; se domina utilizando estructuras de liderazgo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lleva esta plantilla a tu block de notas. Piensa en un reto operativo o comercial que tengas en tu escritorio en este momento y rellena los tres pasos. Verás cómo tu discurso deja de ser una barrera y se convierte en tu principal herramienta de autoridad.
            </p>
            <p className="text-lg font-bold text-blue-900">
              ¿Cuál es el primer problema que vas a reestructurar hoy?
            </p>
          </div>

          {/* CTA */}
          <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">¿Listo para aplicar estas estrategias?</h3>
            <p className="text-blue-100 mb-6">
              Descubre cómo nuestra metodología te ayudará a comunicar con autoridad y avanzar en tu carrera.
            </p>
            <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                Agenda tu Diagnostico
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Más Artículos del Blog</h2>
          <p className="text-gray-700 text-center mb-8">
            Próximamente más contenido sobre estrategias de inglés profesional, metodología y certificación.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
