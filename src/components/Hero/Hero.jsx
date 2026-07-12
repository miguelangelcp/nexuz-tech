import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./Hero.css";

import {
  FaWhatsapp,
  FaTools,
  FaShieldAlt,
  FaAward,
  FaArrowRight,
  FaLaptop,
  FaDesktop,
  FaCog,
  FaGamepad,
  FaWindows,
  FaVirus,
} from "react-icons/fa";

import hero from "../../assets/images/hero.jpg";
import background from "../../assets/images/background.jpg";

export default function Hero() {
  const services = [
    {
      icon: <FaLaptop />,
      title: "Reparación de Laptops",
      description:
        "Pantallas, teclados, bisagras, centros de carga, mantenimiento y más.",
    },
    {
      icon: <FaDesktop />,
      title: "Reparación de PC",
      description:
        "Tarjetas madre, fuentes, memoria RAM, SSD, tarjetas de video y más.",
    },
    {
      icon: <FaCog />,
      title: "Mantenimiento Preventivo",
      description:
        "Limpieza profunda, cambio de pasta térmica y optimización.",
    },
    {
      icon: <FaGamepad />,
      title: "Armado de PC Gamer",
      description:
        "Equipos de alto rendimiento personalizados para tus necesidades.",
    },
    {
      icon: <FaWindows />,
      title: "Formateo e Instalación",
      description:
        "Instalación de Windows, controladores, paquetería y programas.",
    },
    {
      icon: <FaVirus />,
      title: "Eliminación de Virus",
      description:
        "Eliminamos malware, spyware y amenazas para proteger tu información.",
    },
  ];

  const stats = [
  {
    value: 2500,
    prefix: "+",
    suffix: "",
    label: "Equipos reparados",
  },
  {
    value: 98,
    prefix: "",
    suffix: "%",
    label: "Clientes satisfechos",
  },
  {
    value: 15,
    prefix: "",
    suffix: "+",
    label: "Años de experiencia",
  },
  {
    value: 24,
    prefix: "",
    suffix: "/7",
    label: "Soporte técnico",
  },
];

  return (
    <section
      id="inicio"
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(5, 11, 19, 0.98) 0%,
            rgba(5, 11, 19, 0.91) 46%,
            rgba(5, 11, 19, 0.75) 100%
          ),
          url(${background})
        `,
      }}
    >
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="hero-mini">
            TECNOLOGÍA QUE CONECTA, SERVICIO QUE RESPALDA
          </span>

          <h1 className="hero-title">
            <span className="hero-title-white">REPARACIÓN</span>
            <span className="hero-title-cyan">PROFESIONAL</span>
            <span className="hero-title-white">DE COMPUTADORAS</span>
            <span className="hero-title-white">Y LAPTOPS</span>
          </h1>

          <p className="hero-description">
            En Nexuz Tech ofrecemos soluciones tecnológicas confiables,
            rápidas y garantizadas para que tu computadora o laptop vuelva
            a rendir al máximo.
          </p>

          <div className="hero-buttons">
            <a href="#contacto" className="btn-primary">
              <FaTools />
              <span>Agendar diagnóstico</span>
            </a>

            <a
              href="https://wa.me/523333566247"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="hero-benefits">
            <div className="benefit">
              <FaAward />
              <span>Técnicos certificados</span>
            </div>

            <div className="benefit">
              <FaShieldAlt />
              <span>Garantía en todas las reparaciones</span>
            </div>

            <div className="benefit">
              <FaTools />
              <span>Refacciones de calidad</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 70, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-image-glow" />

          <div className="hero-image">
            <img
              src={hero}
              alt="Computadora gamer, monitor y laptop de Nexuz Tech"
            />
          </div>
        </motion.div>
      </div>

      <div id="servicios" className="services-preview">
        {services.map((service, index) => (
          <motion.article
            className="service-card"
            key={service.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
            }}
          >
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contacto" className="service-link">
              <span>Ver más</span>
              <FaArrowRight />
            </a>
          </motion.article>
        ))}
      </div>

<div className="hero-stats">
  {stats.map((stat, index) => (
    <motion.div
      className="stat"
      key={stat.label}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
    >
      <h2>
        {stat.prefix}
{stat.value}
{stat.suffix}

      </h2>

      <span>{stat.label}</span>
    </motion.div>
  ))}
</div>

    </section>
  );
}