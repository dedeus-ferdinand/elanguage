import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/SiteFooter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { asset } from "@/lib/asset";
import { CAL_COM_URL } from "@/lib/links";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function PrivacyPolicy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  usePageMeta({
    title: "Aviso de Privacidad | E-Language",
    description:
      "Aviso de privacidad de E-Language México. Conozca cómo tratamos sus datos personales y sus derechos ARCO.",
    path: "/privacy-policy",
  });

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
          >
            <img src={asset("images/logo.png")} alt="E-Language Isotipo" className="w-10 h-10" />
            <span className="font-bold text-lg text-blue-900">E-Language</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={handleGoHome} className="text-sm text-gray-600 hover:text-blue-900 transition">
              Inicio
            </button>
            <button
              onClick={() => setLocation("/metodologia")}
              className="text-sm text-gray-600 hover:text-blue-900 transition"
            >
              Metodología
            </button>
            <button
              onClick={() => setLocation("/certificacion")}
              className="text-sm text-gray-600 hover:text-blue-900 transition"
            >
              Certificación
            </button>
            <button
              onClick={() => setLocation("/empresas")}
              className="text-sm text-gray-600 hover:text-blue-900 transition"
            >
              Para Empresas
            </button>
            <button
              onClick={() => setLocation("/fundadora")}
              className="text-sm text-gray-600 hover:text-blue-900 transition"
            >
              Fundadora
            </button>
            <button
              onClick={() => setLocation("/blog")}
              className="text-sm text-gray-600 hover:text-blue-900 transition"
            >
              Blog
            </button>
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
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Agenda tu diagnóstico
              </Button>
            </a>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container py-4 space-y-3">
              <button
                onClick={() => {
                  handleGoHome();
                  setMenuOpen(false);
                }}
                className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => {
                  setLocation("/metodologia");
                  setMenuOpen(false);
                }}
                className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left"
              >
                Metodología
              </button>
              <button
                onClick={() => {
                  setLocation("/certificacion");
                  setMenuOpen(false);
                }}
                className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left"
              >
                Certificación
              </button>
              <button
                onClick={() => {
                  setLocation("/empresas");
                  setMenuOpen(false);
                }}
                className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left"
              >
                Para Empresas
              </button>
              <button
                onClick={() => {
                  setLocation("/fundadora");
                  setMenuOpen(false);
                }}
                className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left"
              >
                Fundadora
              </button>
              <button
                onClick={() => {
                  setLocation("/blog");
                  setMenuOpen(false);
                }}
                className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left"
              >
                Blog
              </button>
              <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Agenda tu diagnóstico</Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Aviso de Privacidad</h1>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">E-Language México</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    1. Responsable del tratamiento de datos personales
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    E-Language Mexico es responsable del tratamiento de los datos personales que usted
                    proporcione a través de nuestro sitio web, campañas en redes sociales y cualquier otro
                    canal de comunicación.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">2. Finalidades del tratamiento de los datos</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Los datos personales que usted nos proporcione (incluyendo, entre otros: nombre completo,
                    teléfono móvil, correo electrónico, intereses) serán utilizados únicamente para las
                    siguientes finalidades:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>
                      Informarle sobre nuestros cursos, promociones, eventos y servicios que sean de su
                      interés.
                    </li>
                    <li>
                      Mantener contacto con usted para brindarle asesoría, seguimiento y actualizaciones
                      relacionadas con nuestros servicios.
                    </li>
                    <li>Gestionar los servicios de consulta y atención que usted solicite.</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    En ningún caso sus datos serán utilizados para fines distintos a los aquí descritos, salvo
                    que se cuente con su consentimiento expreso para una finalidad adicional o la ley lo
                    permita.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">3. Datos personales que recabamos</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">Los datos que pueden ser recabados de usted son:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>
                      <strong>Datos de identificación:</strong> nombre completo.
                    </li>
                    <li>
                      <strong>Datos de contacto:</strong> teléfono, correo electrónico.
                    </li>
                    <li>
                      <strong>Datos relacionados con sus intereses de aprendizaje.</strong>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    No recabamos datos sensibles salvo que usted los proporcione de forma voluntaria y expresa.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">4. Transferencia de datos personales</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sus datos personales no se comparten ni se transfieren a terceros, salvo para cumplir con
                    disposiciones legales aplicables o cuando sea necesario para la prestación de un servicio,
                    conforme a la ley.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">5. Consentimiento del titular</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Al enviar sus datos a través de formularios, campañas en redes sociales, WhatsApp, correo
                    electrónico o cualquier otro medio autorizado, usted manifiesta su consentimiento expreso
                    para que sean tratados conforme a este aviso de privacidad.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">6. Derechos ARCO</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    En términos de la Ley Federal de Protección de Datos Personales en Posesión de los
                    Particulares, usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento
                    de sus datos.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para ejercer estos derechos, puede enviar un correo a:{" "}
                    <strong>contacto@e-languagemexico.com</strong> indicando su solicitud.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    El plazo máximo para atender su solicitud será de 20 días hábiles, prorrogables conforme a
                    la ley.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    7. Uso de cookies y tecnologías digitales
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Este sitio web puede utilizar cookies y herramientas digitales para mejorar su experiencia
                    de navegación.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">8. Cambios al aviso de privacidad</h3>
                  <p className="text-gray-700 leading-relaxed">
                    E-Language Mexico puede actualizar este aviso de privacidad para reflejar cambios en
                    nuestras prácticas o en la legislación aplicable.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">9. Plazo de conservación de datos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sus datos personales se conservarán mientras sean necesarios para cumplir con las
                    finalidades aquí descritas o conforme lo exija la ley.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">10. Contacto y comentarios</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Si tiene alguna duda sobre este aviso de privacidad o desea ejercer sus derechos ARCO,
                    puede contactarnos en:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>
                      <strong>Correo electrónico:</strong> contacto@e-languagemexico.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
