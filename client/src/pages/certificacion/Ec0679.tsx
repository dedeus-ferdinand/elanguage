import { useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  TrendingUp,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Globe2,
  Landmark,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "wouter";
import { asset } from "@/lib/asset";
import { CEDULA_CENTRO_EVALUADOR } from "@/lib/links";
import { ensureCertFonts, preloadLcpImage } from "@/lib/perf";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useMetaPixel } from "@/hooks/useMetaPixel";
import "./ec0679.css";

const AGENDAMIENTO_PATH = "/certificacion/ec0679/agenda";

const IMG = {
  isotipo: asset("images/isotipo-centro-evaluador.png"),
  certificado: asset("images/ec0679/certificado-ejemplo.webp"),
  tarjeta1: asset("images/ec0679/tarjeta1.webp"),
  tarjeta2: asset("images/ec0679/tarjeta2.webp"),
  tarjeta3: asset("images/ec0679/tarjeta3.webp"),
  oficina: asset("images/ec0679/oficina.webp"),
  hero: asset("images/ec0679/hero.webp"),
};

ensureCertFonts();
preloadLcpImage(IMG.hero);

const benefits = [
  {
    number: "01",
    title: "Una credencial que permanece",
    body: "Convierte tu experiencia práctica en una certificación con registro nacional. Una vez emitida, no necesitas renovarla.",
    icon: Landmark,
    tone: "blue",
  },
  {
    number: "02",
    title: "Más peso en cada entrevista",
    body: "Haz visible tu capacidad para operar en inglés frente a empresas globales, clientes internacionales y equipos bilingües.",
    icon: TrendingUp,
    tone: "orange",
  },
  {
    number: "03",
    title: "Se evalúa lo que sí haces",
    body: "Llamadas, reuniones, correos y situaciones de trabajo reales. Menos teoría abstracta; más desempeño demostrable.",
    icon: ClipboardCheck,
    tone: "green",
  },
];

const audience = [
  ["Profesionales y ejecutivos", "Lideran proyectos, atienden proveedores o colaboran con clientes de habla inglesa."],
  ["Soporte, ventas y atención bilingüe", "Trabajan con cuentas globales, turismo, hotelería o mesas de ayuda internacionales."],
  ["Buscadores de empleo", "Quieren respaldar su CV con una evidencia formal y diferenciadora."],
];

const faqs = [
  [
    "¿La certificación tiene fecha de expiración?",
    "La certificación de competencia laboral está diseñada como una credencial permanente. Confirma con tu Centro Evaluador las condiciones vigentes de emisión y registro para tu proceso.",
  ],
  [
    "¿Qué nivel de inglés se necesita?",
    "El estándar está orientado a personas con bases operativas o intermedias de inglés laboral. El diagnóstico te ayuda a ubicar tu punto de partida antes de avanzar.",
  ],
  [
    "¿Qué se evalúa exactamente?",
    "Se revisan dos bloques: comunicación oral en escenarios laborales y comunicación escrita mediante correos, comprensión y fórmulas de cortesía corporativa.",
  ],
  [
    "¿Cuánto toma el proceso?",
    "Depende de tu preparación, agenda y tiempos de evaluación. El Centro Evaluador te comparte la ruta, requisitos y fechas disponibles después del diagnóstico.",
  ],
];

const quiz = [
  {
    q: "You need to ask for a status update without sounding demanding. Which option works best?",
    options: [
      "Send me the figures now.",
      "Could you please let us know when the figures will be finalized?",
      "I want the figures as soon as possible.",
    ],
    answer: 1,
  },
  {
    q: "You are opening a formal email to a client. Which sentence is strongest?",
    options: [
      "I am writing to follow up on our previous conversation.",
      "Hey, just checking this.",
      "I need to talk about this right now.",
    ],
    answer: 0,
  },
  {
    q: "A meeting is delayed. What is the most professional response?",
    options: [
      "No problem, we can reschedule for tomorrow at 10:00 a.m.",
      "Okay, bye.",
      "You should have told me earlier.",
    ],
    answer: 0,
  },
  {
    q: "You want to close an email with a clear next step.",
    options: [
      "Talk later.",
      "We appreciate your assistance and look forward to hearing from you.",
      "Answer me when you can.",
    ],
    answer: 1,
  },
  {
    q: "A customer reports an issue. What should you do first?",
    options: [
      "Ignore it until you have more time.",
      "Acknowledge the concern and clarify the details before proposing a solution.",
      "Tell them it is not your problem.",
    ],
    answer: 1,
  },
];

function SectionLabel({ children, code }: { children: React.ReactNode; code?: string }) {
  return (
    <div className="section-label">
      <span className="section-dot" /> <span>{code ?? "EC0679"}</span>
      <span className="section-label-line" />
      {children}
    </div>
  );
}

export default function Ec0679() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [simAnswers, setSimAnswers] = useState<Record<number, number>>({});
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizResultScore, setQuizResultScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  usePageMeta({
    title: "Certificación EC0679 | E-Language",
    description:
      "Certifica tu inglés laboral intermedio con el estándar EC0679. Diagnóstico express, simulador y agendamiento con Centro Evaluador SEP-CONOCER.",
    path: "/certificacion/ec0679",
    image: "images/ec0679/hero.webp",
  });
  useMetaPixel();

  const simulatorCorrectAnswers = [1, 0, 0];
  const simScore = useMemo(
    () =>
      Object.entries(simAnswers).filter(
        ([key, value]) => value === simulatorCorrectAnswers[Number(key)],
      ).length,
    [simAnswers],
  );
  const current = quiz[quizIndex];
  const progress = quizDone ? 100 : Math.round((quizIndex / quiz.length) * 100);

  const answerQuiz = (index: number) => {
    const nextScore = quizScore + (index === current.answer ? 1 : 0);
    const isLastQuestion = quizIndex === quiz.length - 1;
    setQuizScore(nextScore);
    if (isLastQuestion) {
      setQuizResultScore(nextScore);
      setQuizDone(true);
      return;
    }
    setQuizIndex((value) => value + 1);
  };

  return (
    <div className="ec0679-landing site-shell">
      <div className="urgency-bar">
        <span className="urgency-marker">●</span> Convocatoria abierta · Evaluación oficial EC0679{" "}
        <span className="urgency-separator">/</span>{" "}
        <strong>Cupos limitados para la próxima jornada</strong>
      </div>
      <header className="site-header">
        <a href="#inicio" className="brand-lockup" aria-label="Centro Evaluador EC0679">
          <img src={IMG.isotipo} alt="" className="brand-mark" />
          <span>
            <strong>
              CENTRO
              <br />
              EVALUADOR
            </strong>
            <small>SEP · CONOCER · EC0679</small>
            <small className="brand-cedula">Cédula {CEDULA_CENTRO_EVALUADOR}</small>
          </span>
        </a>
        <nav className={mobileOpen ? "main-nav mobile-nav" : "main-nav"}>
          <a href="#beneficios" onClick={() => setMobileOpen(false)}>
            La certificación
          </a>
          <a href="#evaluacion" onClick={() => setMobileOpen(false)}>
            Qué evalúa
          </a>
          <a href="#diagnostico" onClick={() => setMobileOpen(false)}>
            Diagnóstico
          </a>
          <a href="#faq" onClick={() => setMobileOpen(false)}>
            Preguntas
          </a>
          <Link href={AGENDAMIENTO_PATH} className="nav-cta">
            Hablar con un asesor <ArrowRight size={15} />
          </Link>
        </nav>
        <button className="menu-button" aria-label="Abrir menú" onClick={() => setMobileOpen((value) => !value)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-media" aria-hidden="true">
            <img
              src={IMG.hero}
              alt=""
              width={1536}
              height={1024}
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content shell-width">
            <div className="hero-copy">
              <SectionLabel code="ESTÁNDAR NACIONAL">CERTIFICACIÓN OFICIAL</SectionLabel>
              <h1>
                Haz visible
                <br />
                <em>lo que ya sabes hacer.</em>
              </h1>
              <p className="hero-lede">
                Certifica tu inglés laboral intermedio con el estándar <strong>EC0679</strong> y convierte tu
                experiencia cotidiana en una credencial verificable para el mercado profesional.
              </p>
              <div className="hero-actions">
                <Link href={AGENDAMIENTO_PATH} className="button button-primary">
                  Haz tu diagnóstico <ArrowRight size={18} />
                </Link>
              </div>
              <div className="hero-meta">
                <span>
                  <ShieldCheck size={17} /> Registro nacional
                </span>
                <span>
                  <Award size={17} /> Validez oficial
                </span>
                <span>
                  <Globe2 size={17} /> Alcance profesional
                </span>
              </div>
            </div>
            <div className="credential-card-wrap">
              <div className="credential-card photo-card">
                <img
                  className="credential-photo"
                  src={IMG.certificado}
                  alt="Certificado de competencia laboral EC0679"
                />
              </div>
              <span className="card-caption">01 / CREDENCIAL QUE PERMANECE</span>
            </div>
          </div>
          <div className="hero-index">
            01<span>/</span>05
          </div>
        </section>

        <section className="trust-strip">
          <div className="shell-width trust-inner">
            <span>
              Una certificación con validez oficial <strong className="trust-highlight">SEP-CONOCER</strong>
            </span>
          </div>
        </section>

        <section id="beneficios" className="section section-paper">
          <div className="shell-width">
            <div className="split-heading">
              <div>
                <SectionLabel>POR QUÉ EC0679</SectionLabel>
                <h2>
                  No es otro examen.
                  <br />
                  <em>Es una evidencia.</em>
                </h2>
              </div>
              <p>
                El estándar observa cómo te desempeñas en conversaciones, reuniones, correos y situaciones que ya
                forman parte de tu día de trabajo.
              </p>
            </div>
            <div className="benefit-grid">
              {benefits.map(({ number, title, body, tone }) =>
                number === "01" ? (
                  <article className="benefit-card benefit-photo-card" key={number}>
                    <img src={IMG.tarjeta1} alt="Una credencial que permanece: certificación con respaldo nacional" />
                  </article>
                ) : number === "02" ? (
                  <article className="benefit-card benefit-photo-card" key={number}>
                    <img
                      src={IMG.tarjeta2}
                      alt="Más peso en cada entrevista: ventaja profesional al operar en inglés"
                    />
                  </article>
                ) : number === "03" ? (
                  <article className="benefit-card benefit-photo-card" key={number}>
                    <img
                      src={IMG.tarjeta3}
                      alt="Se evalúa lo que sí haces: desempeño práctico en situaciones de trabajo reales"
                    />
                  </article>
                ) : (
                  <article className={`benefit-card tone-${tone}`} key={number}>
                    <div className="benefit-top">
                      <span className="card-number">{number}</span>
                    </div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <div className="card-footer">
                      DESEMPEÑO PRÁCTICO
                      <ArrowRight size={15} />
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="section section-ink audience-section">
          <div className="shell-width audience-layout">
            <div className="audience-image">
              <img src={IMG.oficina} alt="Equipo profesional colaborando en una reunión de trabajo" />
              <span className="image-note">02 / EL TRABAJO REAL ES EL CONTEXTO</span>
            </div>
            <div className="audience-copy">
              <SectionLabel>PERFIL IDÓNEO</SectionLabel>
              <h2>
                Si ya te comunicas,
                <br />
                <em>ya tienes un punto de partida.</em>
              </h2>
              <p>
                La certificación está pensada para profesionales que ya operan en inglés y quieren formalizar esa
                capacidad frente al mercado.
              </p>
              <div className="audience-list">
                {audience.map(([title, body]) => (
                  <div className="audience-item" key={title}>
                    <Check size={17} />
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="simulador" className="section section-paper simulator-section">
          <div className="shell-width">
            <div className="split-heading">
              <div>
                <SectionLabel>PRÁCTICA INTERACTIVA</SectionLabel>
                <h2>
                  Una muestra de
                  <br />
                  <em>cómo se evalúa.</em>
                </h2>
              </div>
              <p>
                Transforma un correo informal en uno profesional. Elige la respuesta que mejor representa una
                comunicación laboral clara, cortés y efectiva.
              </p>
            </div>
            <div className="simulator-window">
              <div className="window-bar">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>EC0679 / BUSINESS_COMMUNICATION</span>
                <span className="window-status">LIVE PRACTICE</span>
              </div>
              <div className="simulator-body">
                <div className="email-meta">
                  <span>TO</span> james.marketing@globalcorp.com <span>SUBJECT</span> Follow-up on project budget
                  update
                </div>
                <p className="email-opening">Dear Mr. James,</p>
                {["Intención del mensaje", "Petición de información", "Cierre corporativo"].map((label, questionIndex) => {
                  const options = [
                    [
                      "I want to talk about the budget right now.",
                      "I am writing to follow up on the status of our budget request.",
                    ],
                    [
                      "Send me the figures as soon as possible because I need them.",
                      "Could you please let us know when the figures will be finalized?",
                    ],
                    ["Bye, talk later.", "We appreciate your assistance and look forward to hearing from you."],
                  ][questionIndex];
                  return (
                    <div className="sim-question" key={label}>
                      <span className="sim-label">
                        0{questionIndex + 1} / {label}
                      </span>
                      <div className="sim-options">
                        {options.map((option, optionIndex) => (
                          <button
                            key={option}
                            className={
                              simAnswers[questionIndex] === optionIndex
                                ? `sim-option selected ${optionIndex === simulatorCorrectAnswers[questionIndex] ? "correct" : "incorrect"}`
                                : "sim-option"
                            }
                            onClick={() =>
                              setSimAnswers((answers) => ({ ...answers, [questionIndex]: optionIndex }))
                            }
                          >
                            {simAnswers[questionIndex] === optionIndex &&
                              (optionIndex === simulatorCorrectAnswers[questionIndex] ? (
                                <Check size={15} aria-label="Respuesta correcta" />
                              ) : (
                                <X size={15} aria-label="Respuesta incorrecta" />
                              ))}
                            <span>{option}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
                <div className="sim-result">
                  <span>
                    {simScore === 3 ? "Excelente criterio de comunicación." : "Selecciona una opción por sección."}
                  </span>
                  <strong>
                    {simScore} / 3
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="diagnostico" className="section section-orange diagnostic-section">
          <div className="shell-width diagnostic-layout">
            <div className="diagnostic-intro">
              <SectionLabel>DIAGNÓSTICO EXPRESS</SectionLabel>
              <p className="diagnostic-title">Diagnóstico de Inglés Laboral B1/B2</p>
              <h2>¿No estás seguro de si tu nivel de inglés califica para el estándar EC0679?</h2>
              <p>
                Responde cinco situaciones de inglés laboral y recibe una lectura inicial para decidir tu siguiente
                movimiento.
              </p>
              <div className="diagnostic-note">
                <Sparkles size={18} />
                <span>Sin costo · 5 preguntas · Resultado inmediato</span>
              </div>
            </div>
            <div className="quiz-card">
              {!quizDone ? (
                <>
                  <div className="quiz-progress">
                    <span>
                      Pregunta {quizIndex + 1} de {quiz.length}
                    </span>
                    <span>{progress}%</span>
                  </div>
                  <div className="progress-track">
                    <div style={{ width: `${progress}%` }} />
                  </div>
                  <p className="quiz-question">{current.q}</p>
                  <div className="quiz-options">
                    {current.options.map((option, index) => (
                      <button key={option} onClick={() => answerQuiz(index)}>
                        {String.fromCharCode(65 + index)} <span>{option}</span>
                        <ArrowRight size={16} />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="quiz-result">
                  <div className="result-icon">
                    <CheckCircle2 size={35} />
                  </div>
                  <span className="result-kicker">DIAGNÓSTICO COMPLETADO</span>
                  <h3>
                    {quizResultScore >= 4
                      ? "Tienes una base sólida para avanzar."
                      : quizResultScore >= 3
                        ? "Tienes una base útil para prepararte."
                        : "Tu siguiente paso es reforzar fundamentos."}
                  </h3>
                  <div className="result-score">
                    <strong>{quizResultScore} / 5</strong>
                    <span>Respuestas acertadas</span>
                  </div>
                  <div className="lead-row">
                    <Link href={AGENDAMIENTO_PATH} className="orientation-cta">
                      Solicita orientación <ArrowRight size={17} />
                    </Link>
                  </div>
                  <button
                    className="reset-link"
                    onClick={() => {
                      setQuizDone(false);
                      setQuizIndex(0);
                      setQuizScore(0);
                      setQuizResultScore(0);
                    }}
                  >
                    Repetir diagnóstico
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="evaluacion" className="section section-paper">
          <div className="shell-width">
            <div className="center-heading">
              <SectionLabel>EL ESTÁNDAR EN ACCIÓN</SectionLabel>
              <h2>
                Dos competencias.
                <br />
                <em>Un perfil más completo.</em>
              </h2>
              <p>La evaluación traduce el inglés laboral en comportamientos observables y evidencias concretas.</p>
            </div>
            <div className="competence-grid">
              <article className="competence-card">
                <span className="competence-code">COMPETENCIA A</span>
                <div className="competence-icon blue">
                  <Phone size={24} />
                </div>
                <h3>Comunicación oral</h3>
                <p>Responde escenarios en tiempo real con claridad, cortesía y criterio profesional.</p>
                <ul>
                  <li>Llamadas comerciales y toma de requerimientos</li>
                  <li>Reuniones, reportes y propuestas</li>
                  <li>Atención de incidencias y soluciones</li>
                </ul>
              </article>
              <article className="competence-card featured">
                <span className="competence-code">COMPETENCIA B</span>
                <div className="competence-icon orange">
                  <Mail size={24} />
                </div>
                <h3>Comunicación escrita</h3>
                <p>Redacta documentos de trabajo con precisión, coherencia y formalidad corporativa.</p>
                <ul>
                  <li>Correos, solicitudes y presupuestos</li>
                  <li>Comprensión de memos y directrices</li>
                  <li>Saludos, conectores y cierres</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-mist process-section">
          <div className="shell-width">
            <div className="split-heading">
              <div>
                <SectionLabel>RUTA DE CERTIFICACIÓN</SectionLabel>
                <h2>
                  Del diagnóstico
                  <br />
                  <em>a la cédula.</em>
                </h2>
              </div>
              <p>Un proceso acompañado, transparente y ordenado para que sepas qué sucede en cada etapa.</p>
            </div>
            <div className="process-grid">
              {[
                ["01", "Diagnóstico", "Ubicamos tu nivel y tu punto de partida."],
                ["02", "Alineación", "Conoces instrumentos y criterios de evaluación."],
                ["03", "Evaluación", "Presentas tus evidencias orales y escritas."],
                ["04", "Certificación", "Recibes el resultado y gestionas tu cédula."],
              ].map(([number, title, body], index) => (
                <div className="process-step" key={number}>
                  <span className={index === 3 ? "process-number final" : "process-number"}>{number}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section section-paper faq-section">
          <div className="shell-width faq-layout">
            <div>
              <SectionLabel>FAQ / A TU RITMO</SectionLabel>
              <h2>
                Las preguntas
                <br />
                <em>que importan.</em>
              </h2>
              <p>Si todavía estás evaluando si este es el momento, aquí tienes el contexto esencial.</p>
              <Link href={AGENDAMIENTO_PATH} className="nav-cta faq-cta">
                Hablar con un asesor <ArrowRight size={16} />
              </Link>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <div className={openFaq === index ? "faq-item open" : "faq-item"} key={question}>
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>{question}</span>
                    <ChevronDown size={18} />
                  </button>
                  {openFaq === index && <p>{answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell-width final-cta-inner">
            <div>
              <SectionLabel>EL SIGUIENTE PASO ES TUYO</SectionLabel>
              <h2>
                Haz que tu inglés
                <br />
                <em>también cuente en papel.</em>
              </h2>
            </div>
            <Link href={AGENDAMIENTO_PATH} className="button button-light">
              Descubre si estás listo para evaluarte <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell-width footer-inner">
          <div className="brand-lockup footer-brand">
            <img src={IMG.isotipo} alt="" className="brand-mark" />
            <span>
              <strong>CENTRO EVALUADOR</strong>
              <small>SEP · CONOCER · EC0679</small>
              <small className="brand-cedula">Cédula {CEDULA_CENTRO_EVALUADOR}</small>
            </span>
          </div>
          <p>Certificación de inglés laboral intermedio para profesionales que quieren avanzar con evidencia.</p>
          <span className="footer-code">EC0679 / 2026</span>
        </div>
      </footer>
    </div>
  );
}
