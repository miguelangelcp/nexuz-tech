import "./WhyChooseUs.css";

import {
  FaUserCog,
  FaShieldAlt,
  FaBolt,
  FaDollarSign,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaUserCog />,
      title: "Técnicos certificados",
      description:
        "Personal capacitado y en constante actualización para ofrecer soluciones confiables.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Garantía total",
      description:
        "Todos nuestros servicios cuentan con garantía y seguimiento profesional.",
    },
    {
      icon: <FaBolt />,
      title: "Atención rápida",
      description:
        "Diagnósticos eficientes y soluciones pensadas para reducir tiempos de espera.",
    },
    {
      icon: <FaDollarSign />,
      title: "Precios justos",
      description:
        "Cotizaciones claras y transparentes, sin cobros ocultos ni sorpresas.",
    },
  ];

  return (
    <section id="nosotros" className="why-section">
      <div className="why-container">
        <div className="why-heading">
          <span className="why-eyebrow">CONFIANZA Y EXPERIENCIA</span>

          <h2>
            ¿POR QUÉ <span>ELEGIRNOS?</span>
          </h2>

          <p>
            Brindamos soluciones tecnológicas con calidad, rapidez y garantía
            para que tu equipo vuelva a funcionar correctamente.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <article className="why-card" key={reason.title}>
              <div className="why-icon">{reason.icon}</div>

              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}