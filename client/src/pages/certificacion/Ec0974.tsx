import { useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  FileCheck2,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "wouter";
import { asset } from "@/lib/asset";
import { usePageMeta } from "@/hooks/usePageMeta";
import { META_PIXEL_ID_EC0974, useMetaPixel } from "@/hooks/useMetaPixel";
import "./ec0974.css";

const BOOKING_PATH = "/certificacion/ec0974/agenda";

const IMG = {
  mark: asset("images/ec0974/mark.png"),
  isotipoOficial: asset("images/ec0974/isotipo-oficial.png"),
  heroCertificate: asset("images/ec0974/hero-certificate.webp"),
};

const navItems = [
  ["Comparativa", "#comparativa"],
  ["Proceso", "#proceso"],
  ["Agendar", "#diagnostico"],
  ["FAQ", "#faq"],
] as const;

const faqs = [
  {
    question: "¿El EC0974 sustituye a mi certificado de Cambridge, IELTS o TOEFL?",
    answer:
      "No. Son acreditaciones complementarias: tus certificaciones internacionales prueban el dominio lingüístico, mientras que el EC0974 acredita cómo ejecutas el idioma en un contexto laboral y añade reconocimiento oficial en México.",
  },
  {
    question: "¿El certificado EC0974 caduca como el TOEFL o el IELTS?",
    answer:
      "El estándar EC0974 tiene vigencia permanente. La cédula con registro en RENAP no requiere renovaciones periódicas como algunas certificaciones internacionales.",
  },
  {
    question: "Si ya hablo inglés fluido, ¿cuánto tiempo toma el proceso?",
    answer:
      "El proceso se enfoca en alinear tu experiencia con la evaluación, no en enseñar gramática. En el diagnóstico inicial revisamos tus credenciales y te orientamos sobre la ruta más directa.",
  },
  {
    question: "¿Sirve para dar factura deducible si imparto cursos de inglés?",
    answer:
      "El estándar puede respaldar programas de capacitación y servicios profesionales dentro de esquemas B2B. Un asesor revisará tu caso y el uso que necesitas darle durante el diagnóstico.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function Brand({ compact = false, official = false }: { compact?: boolean; official?: boolean }) {
  return (
    <a href="#hero" className={`brand ${compact ? "brand--compact" : ""} ${official ? "brand--official" : ""}`} aria-label="Certificación EC0974, volver al inicio">
      <span className="brand-mark"><img src={official ? IMG.isotipoOficial : IMG.mark} alt="" /></span>
      <span className="brand-copy">
        <strong>EC0974</strong>
        <span>Red CONOCER / SEP</span>
      </span>
    </a>
  );
}

function CheckList({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <ul className={`check-list ${dark ? "check-list--dark" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="check-icon"><Check size={13} strokeWidth={3} /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Ec0974() {
  const [mobileOpen, setMobileOpen] = useState(false);

  usePageMeta({
    title: "Certificación EC0974 | E-Language",
    description:
      "Convierte tu certificación internacional en Competencia Laboral Oficial EC0974. Red CONOCER / SEP, vigencia permanente.",
    path: "/certificacion/ec0974",
    image: "images/ec0974/hero-certificate.webp",
  });
  useMetaPixel(META_PIXEL_ID_EC0974);

  return (
    <div className="ec0974-landing site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Brand compact official />
          <button
            type="button"
            className="mobile-menu-button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${mobileOpen ? "main-nav--open" : ""}`} aria-label="Navegación principal">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</a>
            ))}
          </nav>
          <Link className="button button--primary header-cta" href={BOOKING_PATH}>
            Agendar Diagnóstico <ArrowUpRight size={15} /></Link>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="accreditation-pill"><span /> Acreditado Red CONOCER / SEP</div>
              <h1><span>Tu inglés ya está</span><span>probado.</span><em>Ahora demuestra</em><span>lo que puedes</span><span>ejecutar.</span></h1>
              <p className="hero-description">Convierte tus certificaciones internacionales en una <strong>Competencia Laboral Oficial</strong> con el estándar EC0974.</p>
              <p className="hero-kicker">Para poseedores de Cambridge, IELTS, TOEFL, TOEIC y TKT que buscan llevar su perfil profesional más lejos en México.</p>
              <div className="hero-actions">
                <Link className="button button--primary" href={BOOKING_PATH}>Agendar diagnóstico gratuito <ArrowUpRight size={16} /></Link>
              </div>
            </div>
            <div className="hero-visual" aria-label="Visual editorial de certificación EC0974">
              <div className="hero-visual-frame" />
              <img src={IMG.heroCertificate} alt="E-LANGUAGE y certificación EC0974 con una profesional sosteniendo certificados internacionales" />
            </div>
            <div className="hero-benefits">
              {[
                "Cédula digital",
                "Vigencia permanente",
                "Registro RENAP",
              ].map((benefit) => (
                <div className="benefit-chip" key={benefit}><CircleCheck size={17} /> <span>{benefit}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="sinergia" className="section synergy-section">
          <div className="container">
            <div className="section-heading section-heading--center">
              <SectionLabel>Sinergia de Perfil</SectionLabel>
              <h2>¿Por qué combinar ambos?</h2>
              <p>Estructura de Valor Dual: el respaldo técnico internacional más la certeza legal mexicana.</p>
            </div>
            <div className="synergy-grid">
              <article className="synergy-card synergy-card--international">
                <div className="card-topline"><span className="mini-label">Tu certificado internacional</span></div>
                <h3>Cambridge / IELTS / TOEFL</h3>
                <p>Demuestra tu conocimiento técnico y gramatical del idioma.</p>
                <div className="card-footer-note"><span className="thin-rule" /> Dominio lingüístico global</div>
              </article>
              <div className="synergy-plus" aria-hidden="true">+</div>
              <article className="synergy-card synergy-card--official">
                <div className="card-topline"><span className="mini-label mini-label--blue">Estándar EC0974 (SEP)</span></div>
                <h3>CONOCER</h3>
                <p>Acredita tu capacidad de resolución de problemas e interacción laboral ejecutiva en México.</p>
                <div className="official-stamp"><BadgeCheck size={16} /> Reconocimiento Nacional <span /> <FileCheck2 size={16} /> <strong className="official-accent">Cédula SEP Oficial</strong></div>
              </article>
            </div>
          </div>
        </section>

        <section id="comparativa" className="section compare-section">
          <div className="container compare-inner">
            <div className="section-heading section-heading--center">
              <SectionLabel>El Complemento Inteligente</SectionLabel>
              <h2>¿Por qué tus certificaciones previas no son suficientes en México?</h2>
              <p>No se trata de elegir una sobre la otra, sino de sumar el valor técnico internacional con la certeza legal mexicana.</p>
            </div>
            <div className="compare-labels"><span>Enfoque Académico y Global</span><span>Enfoque Laboral y Legal en México</span></div>
            <div className="compare-grid">
              <article className="compare-card compare-card--light">
                <div className="compare-number">01</div>
                <p className="mini-label">Certificaciones Internacionales</p>
                <h3>IELTS, TOEFL, TOEIC, Cambridge <span>(CAE/FCE), TKT</span></h3>
                <CheckList items={[
                  "Acreditan tu dominio lingüístico general (Gramática, Lectura, Redacción, Escucha).",
                  "Ideales para procesos migratorios, intercambios académicos o posgrados en el extranjero.",
                  "Vencimiento temporal: IELTS y TOEFL requieren re-certificación cada 2 años ($4,500–$6,500 MXN).",
                  "No otorgan Cédula de Competencia Laboral emitida directamente por la SEP.",
                  "Validan tu conocimiento teórico del idioma.",
                ]} />
              </article>
              <article className="compare-card compare-card--blue">
                <div className="compare-number">02</div>
                <p className="mini-label">Estándar EC0974 (CONOCER)</p>
                <h3>Uso de la lengua inglesa en un contexto laboral: <span>Nivel Avanzado</span></h3>
                <CheckList dark items={[
                  "Cédula Oficial con Registro RENAP: Folio inalterable ante la Secretaría de Educación Pública.",
                  "Vigencia Permanente: Amortiza tu inversión sin pagos de renovación continuos.",
                  "Valor Escalafonario Directo: Puntos computables inmediatos en convocatorias públicas y universidades.",
                  "Deducibilidad Fiscal B2B: Permite que empresas facturen programas de capacitación bajo la Ley de Adquisiciones.",
                  "Acredita lo que eres capaz de EJECUTAR con tu nivel de inglés en el trabajo.",
                ]} />
              </article>
            </div>
          </div>
        </section>

        <section id="ventajas" className="section benefits-section">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div><SectionLabel>Ventajas concretas</SectionLabel><h2>Beneficios Directos de Obtener tu Certificación EC0974</h2></div>
              <p>Diseñado para potenciar las oportunidades profesionales dentro del territorio nacional.</p>
            </div>
            <div className="benefits-grid">
              {[
                [BadgeCheck, "Cédula SEP Digital", "Inscripción oficial en el Registro Nacional de Personas con Competencias Certificadas (RENAP) accesible por cualquier empleador."],
                [Clock3, "Bono Salarial y Horas", "En universidades y centros de idiomas públicos, cumple con las normativas para asignación de mejores tarifas hora-clase."],
                [BriefcaseBusiness, "Licitaciones B2B", "Habilita a capacitadores e instructores independientes a concursar en licitaciones públicas de formación corporativa."],
                [Sparkles, "Proceso Acelerado", "Como ya dominas el idioma, el programa no te enseña gramática: se enfoca directamente en la alineación técnica de tu evaluación."],
              ].map(([Icon, title, description], index) => {
                const BenefitIcon = Icon as typeof BadgeCheck;
                return <article className="benefit-card" key={title as string}><span className="benefit-card-index">0{index + 1}</span><span className="benefit-card-icon"><BenefitIcon size={21} /></span><h3>{title as string}</h3><p>{description as string}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section id="proceso" className="section process-section">
          <div className="container">
            <div className="section-heading section-heading--center">
              <SectionLabel>Ruta clara</SectionLabel>
              <h2>Tu Ruta de Certificación en 4 Pasos Sencillos</h2>
              <p>Aprovechamos tu experiencia previa para llevarte a la certificación sin pérdidas de tiempo.</p>
            </div>
            <div className="process-steps">
              {[
                ["1", "Diagnóstico Inicial", "Revisamos tus credenciales previas para validar tu elegibilidad directa para el EC0974."],
                ["2", "Alineación Práctica", "Te orientamos en el portafolio de evidencias y simulacros de resolución de casos laborales."],
                ["3", "Evaluación", "Demuestras tus desempeños ejecutivos (presentaciones, minutas, interacción) en contexto real."],
                ["4", "Emisión de Cédula", "Recibes tu certificado con registro oficial en RENAP emitido por la Red CONOCER / SEP."],
              ].map(([number, title, description]) => <article className="process-step" key={number}><div className="step-number">{number}</div><div className="step-connector" /><div><p className="mini-label">Paso {number}</p><h3>{title}</h3><p>{description}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="diagnostico" className="diagnostic-section">
          <div className="container diagnostic-inner">
            <div className="diagnostic-emblem"><img src={IMG.isotipoOficial} alt="Isotipo EC de certificación" /></div>
            <div className="diagnostic-copy"><SectionLabel>Evaluación gratuita de perfil</SectionLabel><h2>Agenda tu Diagnóstico para la Certificación EC0974</h2><p>Elige el horario que te convenga en nuestra agenda. Un asesor revisará tus certificados actuales y te confirmará tu nivel de preparación sin costo.</p></div>
            <div className="diagnostic-details"><span><Check size={14} /> Sin costo y sin compromiso</span><span><Check size={14} /> Reserva directa en tu calendario con confirmación automática</span><span><Check size={14} /> Orientación según tu certificado actual</span></div>
            <Link className="button button--orange" href={BOOKING_PATH}>Agendar Diagnóstico <ArrowUpRight size={16} /></Link>
            <p className="diagnostic-footnote">Se abre nuestra agenda en Cal. Elige fecha y hora en menos de un minuto.</p>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container faq-inner">
            <div className="section-heading"><SectionLabel>Preguntas frecuentes</SectionLabel><h2>Resuelve tus dudas sobre el valor del estándar EC0974 en México</h2></div>
            <div className="faq-list">
              {faqs.map((faq, index) => <details className="faq-item" key={faq.question} open={index === 0}><summary><span>{faq.question}</span><ChevronDown size={19} /></summary><p>{faq.answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="container closing-inner"><div><SectionLabel>Último paso</SectionLabel><h2>¿Listo para validar tu elegibilidad?</h2><p>Agenda tu diagnóstico gratuito y recibe orientación personalizada.</p></div><Link className="button button--primary" href={BOOKING_PATH}>Agendar Diagnóstico <ArrowUpRight size={16} /></Link></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand"><Brand official /><p>Convierte tu certificación internacional de inglés en una Competencia Laboral Oficial con validez legal, fiscal y ejecutiva en México.</p></div>
          <div className="footer-column"><p className="footer-label">Navegación</p>{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <div className="footer-column footer-accreditation"><p className="footer-label">Acreditación</p><p>Estándar EC0974 — Uso de la lengua inglesa en un contexto laboral: Nivel Avanzado. Red CONOCER / SEP.</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Certificación EC0974. Todos los derechos reservados.</span><span>Acreditado Red CONOCER / SEP</span></div>
      </footer>
    </div>
  );
}
