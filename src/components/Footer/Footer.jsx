import "./Footer.css";

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";

import logo from "../../assets/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={logo} alt="Nexuz Tech" />

            <p>
              Soluciones profesionales para computadoras, laptops y equipos
              gamer. Diagnóstico, reparación, mantenimiento y actualización.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>

              <a
                href="https://wa.me/523333566247"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Navegación</h3>

            <nav>
              <a href="#inicio">Inicio</a>
              <a href="#servicios">Servicios</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#proceso">Proceso</a>
              <a href="#galeria">Galería</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>

          <div className="footer-column">
            <h3>Servicios</h3>

            <nav>
              <a href="#servicios">Reparación de laptops</a>
              <a href="#servicios">Reparación de PC</a>
              <a href="#servicios">Mantenimiento</a>
              <a href="#servicios">PC Gamer</a>
              <a href="#servicios">Instalación de Windows</a>
              <a href="#servicios">Eliminación de virus</a>
            </nav>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contacto</h3>

            <a href="mailto:contacto@nexuztech.com">
              <FaEnvelope />
              miguelcervantes.cetis14@gmail.com
            </a>

            <div>
              <FaMapMarkerAlt />
              Guadalajara, Jalisco
            </div>

            <div>
              <FaClock />
              Lunes a sábado, 9:00 a 19:00
            </div>

            <a
              href="https://wa.me/523333566247"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              3333566247
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Nexuz Tech. Todos los derechos reservados.
          </p>

          <div className="footer-legal">
            <a href="#inicio">Aviso de privacidad</a>
            <a href="#inicio">Términos y condiciones</a>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="footer-top-button"
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}