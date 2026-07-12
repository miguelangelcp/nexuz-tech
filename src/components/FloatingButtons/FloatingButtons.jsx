import { useEffect, useState } from "react";
import "./FloatingButtons.css";

import {
  FaWhatsapp,
  FaCalendarAlt,
  FaArrowUp,
} from "react-icons/fa";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/523333566247"
        target="_blank"
        rel="noreferrer"
        className="floating-button floating-whatsapp"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp />

        <span>WhatsApp</span>
      </a>

      <a
        href="#contacto"
        className="floating-button floating-calendar"
        aria-label="Agendar cita"
      >
        <FaCalendarAlt />

        <span>Agendar cita</span>
      </a>

      <button
        type="button"
        onClick={scrollToTop}
        className={`floating-button floating-top ${
          showTop ? "floating-top-visible" : ""
        }`}
        aria-label="Volver arriba"
      >
        <FaArrowUp />

        <span>Volver arriba</span>
      </button>
    </div>
  );
}