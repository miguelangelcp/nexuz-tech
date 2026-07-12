import "./Gallery.css";

import { FaArrowRight, FaExpandAlt } from "react-icons/fa";

import technician from "../../assets/images/technician.jpg";
import gamer from "../../assets/images/gamer.jpg";
import security from "../../assets/images/security.jpg";
import hero from "../../assets/images/hero.jpg";

export default function Gallery() {
  const projects = [
    {
      image: technician,
      category: "Reparación",
      title: "Diagnóstico profesional",
      description:
        "Revisión completa de componentes para detectar fallas con precisión.",
      featured: true,
    },
    {
      image: gamer,
      category: "Gaming",
      title: "Armado de PC Gamer",
      description:
        "Equipos personalizados con excelente rendimiento y refrigeración.",
      featured: false,
    },
    {
      image: security,
      category: "Seguridad",
      title: "Protección y eliminación de virus",
      description:
        "Limpieza de malware, protección de archivos y optimización del sistema.",
      featured: false,
    },
    {
      image: hero,
      category: "Tecnología",
      title: "Actualización de equipos",
      description:
        "Instalación de memoria RAM, SSD y componentes para mejorar el rendimiento.",
      featured: true,
    },
  ];

  return (
    <section id="galeria" className="gallery-section">
      <div className="gallery-container">
        <header className="gallery-heading">
          <div>
            <span className="gallery-eyebrow">NUESTRO TRABAJO</span>

            <h2>
              PROYECTOS Y <strong>REPARACIONES</strong>
            </h2>
          </div>

          <p>
            Conoce algunos de los servicios y soluciones que realizamos en
            computadoras, laptops y equipos gamer.
          </p>
        </header>

        <div className="gallery-grid">
          {projects.map((project, index) => (
            <article
              className={`gallery-card ${
                project.featured ? "gallery-card-featured" : ""
              }`}
              key={`${project.title}-${index}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="gallery-image"
              />

              <div className="gallery-overlay" />

              <button
                type="button"
                className="gallery-expand"
                aria-label={`Ver ${project.title}`}
              >
                <FaExpandAlt />
              </button>

              <div className="gallery-content">
                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a href="#contacto">
                  Solicitar servicio
                  <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}