import "./Process.css";

import {
  FaLaptopMedical,
  FaSearch,
  FaFileInvoiceDollar,
  FaTools,
  FaClipboardCheck,
  FaBoxOpen,
} from "react-icons/fa";

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: <FaLaptopMedical />,
      title: "Recibimos tu equipo",
      description:
        "Registramos el equipo, sus accesorios y la falla que presenta.",
    },
    {
      number: "02",
      icon: <FaSearch />,
      title: "Diagnóstico",
      description:
        "Realizamos una revisión completa para encontrar el origen del problema.",
    },
    {
      number: "03",
      icon: <FaFileInvoiceDollar />,
      title: "Cotización",
      description:
        "Te presentamos una cotización clara antes de realizar cualquier reparación.",
    },
    {
      number: "04",
      icon: <FaTools />,
      title: "Reparación",
      description:
        "Trabajamos con herramientas adecuadas y componentes de calidad.",
    },
    {
      number: "05",
      icon: <FaClipboardCheck />,
      title: "Pruebas finales",
      description:
        "Probamos rendimiento, temperatura, estabilidad y funcionamiento general.",
    },
    {
      number: "06",
      icon: <FaBoxOpen />,
      title: "Entrega",
      description:
        "Te entregamos el equipo funcionando y con la garantía correspondiente.",
    },
  ];

  return (
    <section id="proceso" className="process-section">
      <div className="process-container">
        <header className="process-heading">
          <span>NUESTRO MÉTODO DE TRABAJO</span>

          <h2>
            UN PROCESO <strong>CLARO Y SEGURO</strong>
          </h2>

          <p>
            Te mantenemos informado desde que recibimos tu equipo hasta el
            momento de la entrega.
          </p>
        </header>

        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-card" key={step.number}>
              <span className="process-number">{step.number}</span>

              <div className="process-icon">{step.icon}</div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}