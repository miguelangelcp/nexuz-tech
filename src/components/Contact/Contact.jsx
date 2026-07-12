import { useState } from "react";
import "./Contact.css";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    equipo: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = "5210000000000";

    const text = `
Hola, quiero solicitar un diagnóstico en Nexuz Tech.

Nombre: ${form.nombre}
Teléfono: ${form.telefono}
Equipo: ${form.equipo}
Servicio: ${form.servicio}
Problema: ${form.mensaje}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <div className="contact-container">
        <div className="contact-information">
          <span className="contact-eyebrow">ESTAMOS PARA AYUDARTE</span>

          <h2>
            AGENDA TU <strong>DIAGNÓSTICO</strong>
          </h2>

          <p className="contact-description">
            Cuéntanos qué problema presenta tu computadora o laptop. Te
            contactaremos para revisar el equipo y ofrecerte una solución.
          </p>

          <div className="contact-details">
            <a
              href="https://wa.me/523333566247"
              target="_blank"
              rel="noreferrer"
              className="contact-detail"
            >
              <span className="contact-detail-icon">
                <FaWhatsapp />
              </span>

              <div>
                <small>WhatsApp</small>
                <strong>3333566247</strong>
              </div>
            </a>

            <a href="tel:+523300000000" className="contact-detail">
              <span className="contact-detail-icon">
                <FaPhoneAlt />
              </span>

              <div>
                <small>Teléfono</small>
                <strong>3333566247</strong>
              </div>
            </a>

            <a
              href="mailto:contacto@nexuztech.com"
              className="contact-detail"
            >
              <span className="contact-detail-icon">
                <FaEnvelope />
              </span>

              <div>
                <small>Correo electrónico</small>
                <strong>miguelcervantes.cetis14@gmail.com</strong>
              </div>
            </a>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <FaMapMarkerAlt />
              </span>

              <div>
                <small>Ubicación</small>
                <strong>Guadalajara, Jalisco</strong>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <FaClock />
              </span>

              <div>
                <small>Horario de atención</small>
                <strong>Lunes a sábado, 9:00 a 19:00</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <span>Solicitud de servicio</span>
            <h3>Cuéntanos sobre tu equipo</h3>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label>
                <span>Nombre completo</span>

                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Escribe tu nombre"
                  required
                />
              </label>

              <label>
                <span>Teléfono</span>

                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="33 0000 0000"
                  required
                />
              </label>
            </div>

            <div className="contact-form-row">
              <label>
                <span>Tipo de equipo</span>

                <select
                  name="equipo"
                  value={form.equipo}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Computadora de escritorio">
                    Computadora de escritorio
                  </option>
                  <option value="PC Gamer">PC Gamer</option>
                  <option value="Otro equipo">Otro equipo</option>
                </select>
              </label>

              <label>
                <span>Servicio requerido</span>

                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Diagnóstico">Diagnóstico</option>
                  <option value="Reparación">Reparación</option>
                  <option value="Mantenimiento">Mantenimiento</option>
                  <option value="Formateo e instalación">
                    Formateo e instalación
                  </option>
                  <option value="Armado de PC Gamer">
                    Armado de PC Gamer
                  </option>
                  <option value="Eliminación de virus">
                    Eliminación de virus
                  </option>
                </select>
              </label>
            </div>

            <label>
              <span>Describe el problema</span>

              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows="6"
                placeholder="Ejemplo: la laptop no enciende, se calienta demasiado o está muy lenta..."
                required
              />
            </label>

            <button type="submit" className="contact-submit">
              <FaPaperPlane />
              Enviar solicitud por WhatsApp
            </button>

            <p className="contact-privacy">
              Tus datos solo se utilizarán para dar seguimiento a tu solicitud.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}