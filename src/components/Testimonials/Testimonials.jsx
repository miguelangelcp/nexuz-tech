import "./Testimonials.css";

import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Ramírez",
      service: "Reparación de laptop",
      text: "Mi laptop ya no encendía y lograron repararla. Me explicaron claramente la falla y el precio fue justo.",
    },
    {
      name: "Fernanda López",
      service: "Mantenimiento preventivo",
      text: "Mi computadora se calentaba demasiado y estaba muy lenta. Después del mantenimiento quedó funcionando excelente.",
    },
    {
      name: "Miguel Torres",
      service: "Armado de PC Gamer",
      text: "Me ayudaron a elegir los componentes adecuados para mi presupuesto. El equipo quedó potente y muy bien organizado.",
    },
    {
      name: "Andrea Martínez",
      service: "Eliminación de virus",
      text: "Recuperaron mis archivos y eliminaron todos los virus sin tener que formatear mi computadora. Muy recomendados.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-glow" />

      <div className="testimonials-container">
        <header className="testimonials-heading">
          <span>OPINIONES DE NUESTROS CLIENTES</span>

          <h2>
            EXPERIENCIAS QUE GENERAN <strong>CONFIANZA</strong>
          </h2>

          <p>
            Nuestro compromiso es ofrecer un servicio claro, profesional y
            confiable en cada reparación.
          </p>
        </header>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.name}
            >
              <FaQuoteLeft className="testimonial-quote" />

              <div className="testimonial-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>

              <p>{testimonial.text}</p>

              <div className="testimonial-client">
                <div className="testimonial-avatar">
                  {testimonial.name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.service}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}