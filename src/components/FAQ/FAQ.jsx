import { useState } from "react";
import "./FAQ.css";

import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      question: "¿Cuánto tarda una reparación?",
      answer:
        "El tiempo depende de la falla y de la disponibilidad de refacciones. Después del diagnóstico te indicamos un tiempo estimado antes de comenzar.",
    },
    {
      question: "¿El diagnóstico tiene costo?",
      answer:
        "Puedes definir si el diagnóstico será gratuito, con costo fijo o sin costo al autorizar la reparación. Cambia este texto según la política de tu negocio.",
    },
    {
      question: "¿Ofrecen garantía?",
      answer:
        "Sí. La garantía depende del servicio realizado y de la refacción utilizada. Al entregar el equipo te indicamos claramente su vigencia y condiciones.",
    },
    {
      question: "¿Pueden recuperar archivos?",
      answer:
        "Sí, siempre que el dispositivo de almacenamiento aún permita acceder a la información. Primero realizamos una revisión para determinar las posibilidades de recuperación.",
    },
    {
      question: "¿Instalan Windows y programas?",
      answer:
        "Sí. Podemos instalar Windows, controladores y programas básicos, además de realizar optimización y configuración inicial del equipo.",
    },
    {
      question: "¿Arman computadoras gamer?",
      answer:
        "Sí. Te ayudamos a elegir componentes compatibles según tu presupuesto, juegos, resolución y necesidades de rendimiento.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-glow" />

      <div className="faq-container">
        <div className="faq-heading">
          <span className="faq-eyebrow">RESOLVEMOS TUS DUDAS</span>

          <h2>
            PREGUNTAS <strong>FRECUENTES</strong>
          </h2>

          <p>
            Consulta las respuestas a las dudas más comunes sobre nuestros
            servicios, tiempos de reparación y garantías.
          </p>

          <div className="faq-help-card">
            <div className="faq-help-icon">
              <FaQuestionCircle />
            </div>

            <div>
              <h3>¿Tienes otra pregunta?</h3>

              <p>
                Escríbenos por WhatsApp y te ayudaremos a resolverla.
              </p>

              <a
                href="https://wa.me/523333566247"
                target="_blank"
                rel="noreferrer"
              >
                Preguntar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>

                  <FaChevronDown />
                </button>

                <div
                  className={`faq-answer ${
                    isOpen ? "faq-answer-open" : ""
                  }`}
                >
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}