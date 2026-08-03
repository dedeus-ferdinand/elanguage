import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePageMeta } from "@/hooks/usePageMeta";
import { asset } from "@/lib/asset";
import { CAL_COM_URL } from "@/lib/links";
import { Menu, X, Calendar, User, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function BlogPost() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  usePageMeta({
    title: "El secreto del inglés ejecutivo: Get + lógica contable | E-Language",
    description:
      "Descubre cómo simplificar tu comunicación en inglés con el verbo Get y dominar los tiempos verbales con lógica contable.",
    path: "/blog/estructura-agilidad-ingles-oficina",
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
            <span className="inline-block bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-semibold">
              Metodología
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            El secreto del inglés ejecutivo: Get + lógica contable
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Paulina González</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>15 de junio, 2024</span>
            </div>
            <div>5 min de lectura</div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              En el entorno corporativo global, la comunicación no es solo una cuestión de vocabulario; es una cuestión de arquitectura mental. Para un ejecutivo, la fluidez no significa hablar rápido, sino comunicar con precisión y autoridad. Sin embargo, muchos profesionales se enfrentan a un obstáculo común: el uso de estructuras verbales complejas que ralentizan su mensaje.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Hoy desglosamos cómo simplificar tu comunicación utilizando el verbo "Get" y, lo más importante, cómo dominar de una vez por todas los tiempos verbales con una lógica contable.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">1. El Verbo "Get": Tu Herramienta de Agilidad Operativa</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nuestra metodología se enfoca en la funcionalidad aplicada al idioma. Te enseñamos a usar "Get" como un recurso multifuncional en dos ejes clave de tu jornada laboral:
            </p>
            
            <div className="space-y-6">
              {/* Get - Logística */}
              <Card className="bg-blue-50 border border-blue-200 p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Logística y Acción (Ir por/Traer)</h3>
                <p className="text-gray-700 mb-3">Ideal para la gestión de recursos o personas.</p>
                <div className="bg-white p-4 rounded border-l-4 border-green-600">
                  <p className="text-gray-800 italic">
                    <span className="font-semibold">Ejemplo:</span> "I am getting the client from the lobby" (Estoy yendo por el cliente al lobby).
                  </p>
                </div>
              </Card>

              {/* Get - Resultados */}
              <Card className="bg-orange-50 border border-orange-200 p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Resultados y Puntualidad (Llegar)</h3>
                <p className="text-gray-700 mb-3">Crucial para reportar estatus de manera natural.</p>
                <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                  <p className="text-gray-800 italic">
                    <span className="font-semibold">Ejemplo:</span> "What time did you get to the office yesterday?" (¿A qué hora llegaste ayer?).
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">2. El "Hack" Pedagógico: El Auxiliar como Asistente Contable</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para eliminar la confusión en los tiempos verbales (evitando errores como "I did got"), utilizamos la Analogía del Auxiliar de Contabilidad:
            </p>
            
            <Card className="bg-blue-900 text-white p-8 mb-6">
              <p className="text-lg leading-relaxed">
                "En una empresa, el asistente contable ayuda al contador (verbo principal) a organizar el tiempo y las tareas, pero no hace el trabajo del contador. En inglés, el auxiliar (Do/Did/Will) solo aparece en preguntas y negaciones para indicar el tiempo. En las afirmaciones, el asistente se retira y el verbo principal toma el control total".
              </p>
            </Card>

            <h3 className="text-2xl font-bold text-blue-900 mb-4">La regla de oro para tu próxima presentación:</h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Si preguntas o niegas (Pasado):</p>
                  <p className="text-gray-700">Usas el "asistente" (Did/Didn't) y el verbo en su forma más simple (Get).</p>
                  <p className="text-gray-600 italic mt-2">Ejemplo: "How did you get there?"</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Si afirmas (Pasado):</p>
                  <p className="text-gray-700">El asistente se retira y el verbo se conjuga directamente.</p>
                  <p className="text-gray-600 italic mt-2">Ejemplo: "I got to the meeting on time"</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">3. Aplicación Inmediata en tu Entorno Profesional</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para que este conocimiento sea útil en tu entorno laboral, te invitamos a aplicarlo hoy mismo en estos tres escenarios:
            </p>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-blue-900 p-6">
                <h3 className="font-bold text-blue-900 mb-2">En un correo electrónico</h3>
                <p className="text-gray-700 mb-3">Si necesitas confirmar la recepción de un archivo, evita el rígido "I received it" y usa:</p>
                <p className="bg-gray-100 p-3 rounded text-gray-800 italic">"I got the documents, thank you."</p>
              </Card>

              <Card className="border-l-4 border-orange-500 p-6">
                <h3 className="font-bold text-blue-900 mb-2">En una llamada de coordinación</h3>
                <p className="text-gray-700 mb-3">Si te ofrecen ayuda con un reporte, responde:</p>
                <p className="bg-gray-100 p-3 rounded text-gray-800 italic">"Don't worry, I'll get it myself." (No te preocupes, yo mismo lo consigo/traigo).</p>
              </Card>

              <Card className="border-l-4 border-green-600 p-6">
                <h3 className="font-bold text-blue-900 mb-2">Al recibir visitas</h3>
                <p className="text-gray-700 mb-3">Usa la frase de cortesía:</p>
                <p className="bg-gray-100 p-3 rounded text-gray-800 italic">"How did you get to our headquarters?" (¿Cómo llegaste a nuestras oficinas?).</p>
              </Card>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-12 bg-blue-50 border-l-4 border-blue-900 p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">El Enfoque E-Language</h2>
            <p className="text-gray-700 leading-relaxed">
              Nuestro objetivo es que dejes de ver el inglés como una materia académica. Al entender la lógica detrás de las reglas, eliminas la inseguridad y proyectas una imagen de competencia absoluta. En E-Language, no solo enseñamos idioma; transformamos tu relación con la comunicación profesional.
            </p>
          </div>

          {/* Author Bio */}
          <Card className="bg-gray-50 p-8 mb-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">PG</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Paulina González</h3>
                <p className="text-sm text-gray-600">
                  Este artículo integra la metodología y visión pedagógica de nuestra CEO y Fundadora de E-Language México.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">¿Listo para aplicar estas estrategias?</h3>
            <p className="text-blue-100 mb-6">
              Descubre cómo nuestra metodología te ayudará a dominar el inglés profesional y avanzar en tu carrera.
            </p>
            <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                Agenda tu Diagnóstico
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
