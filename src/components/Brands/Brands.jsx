import "./Brands.css";

import {
  SiAsus,
  SiAcer,
  SiDell,
  SiHp,
  SiLenovo,
  SiMsi,
  SiIntel,
  SiAmd,
  SiNvidia,
  SiApple,
} from "react-icons/si";

export default function Brands() {
  const brands = [
    {
      name: "ASUS",
      icon: <SiAsus />,
    },
    {
      name: "Acer",
      icon: <SiAcer />,
    },
    {
      name: "Dell",
      icon: <SiDell />,
    },
    {
      name: "HP",
      icon: <SiHp />,
    },
    {
      name: "Lenovo",
      icon: <SiLenovo />,
    },
    {
      name: "MSI",
      icon: <SiMsi />,
    },
    {
      name: "Intel",
      icon: <SiIntel />,
    },
    {
      name: "AMD",
      icon: <SiAmd />,
    },
    {
      name: "NVIDIA",
      icon: <SiNvidia />,
    },
    {
      name: "Apple",
      icon: <SiApple />,
    },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="brands-section">
      <div className="brands-glow brands-glow-one" />
      <div className="brands-glow brands-glow-two" />

      <div className="brands-container">
        <header className="brands-heading">
          <span>COMPATIBILIDAD Y EXPERIENCIA</span>

          <h2>
            TRABAJAMOS CON LAS <strong>MEJORES MARCAS</strong>
          </h2>

          <p>
            Brindamos soporte, mantenimiento y reparación para equipos de las
            marcas más reconocidas del mercado.
          </p>
        </header>

        <div className="brands-slider">
          <div className="brands-track">
            {duplicatedBrands.map((brand, index) => (
              <div
                className="brand-card"
                key={`${brand.name}-${index}`}
                aria-label={brand.name}
              >
                <div className="brand-icon">{brand.icon}</div>

                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="brands-benefits">
          <div>
            <strong>Hardware</strong>
            <span>Diagnóstico y actualización</span>
          </div>

          <div>
            <strong>Software</strong>
            <span>Instalación y optimización</span>
          </div>

          <div>
            <strong>Gaming</strong>
            <span>Ensamble y configuración</span>
          </div>

          <div>
            <strong>Empresas</strong>
            <span>Soporte técnico especializado</span>
          </div>
        </div>
      </div>
    </section>
  );
}