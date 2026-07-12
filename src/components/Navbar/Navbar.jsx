import { useEffect, useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineCalendar,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi";

import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { label: "Inicio", id: "inicio" },
    { label: "Servicios", id: "servicios" },
    { label: "Nosotros", id: "nosotros" },
    { label: "Proceso", id: "proceso" },
    { label: "Galería", id: "galeria" },
    { label: "Contacto", id: "contacto" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-cyan-400/20 bg-[#050b13]/90 shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-xl"
          : "bg-[#050b13]/75 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-5 md:px-8">
        <a
          href="#inicio"
          className="flex shrink-0 items-center"
          aria-label="Ir al inicio"
        >
          <img
            src={logo}
            alt="Nexuz Tech"
            className="h-14 w-auto object-contain md:h-16"
          />
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative py-3 text-sm font-semibold uppercase tracking-wide text-white/90 transition hover:text-cyan-300"
            >
              {item.label}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.8)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <div className="flex items-center rounded-full border border-cyan-300/20 bg-white/5 p-1 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setDarkMode(false)}
              className={`rounded-full p-2 transition ${
                !darkMode
                  ? "bg-cyan-400 text-[#041019]"
                  : "text-white/70 hover:text-cyan-300"
              }`}
              aria-label="Modo claro"
            >
              <HiOutlineSun className="text-xl" />
            </button>

            <button
              type="button"
              onClick={() => setDarkMode(true)}
              className={`rounded-full p-2 transition ${
                darkMode
                  ? "bg-cyan-400 text-[#041019]"
                  : "text-white/70 hover:text-cyan-300"
              }`}
              aria-label="Modo oscuro"
            >
              <HiOutlineMoon className="text-xl" />
            </button>
          </div>

          <a
            href="#contacto"
            className="flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-bold text-[#041019] shadow-[0_0_28px_rgba(34,211,238,.4)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_38px_rgba(34,211,238,.65)]"
          >
            <HiOutlineCalendar className="text-xl" />
            Agendar cita
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="rounded-lg border border-cyan-300/20 bg-white/5 p-2 text-3xl text-white backdrop-blur-md xl:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t bg-[#07111c]/95 backdrop-blur-xl transition-all duration-500 xl:hidden ${
          open
            ? "max-h-[620px] border-cyan-300/20"
            : "max-h-0 border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-2xl flex-col px-5 py-4">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-center font-semibold text-white transition hover:bg-cyan-400 hover:text-[#041019]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={closeMenu}
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-4 font-bold text-[#041019]"
          >
            <HiOutlineCalendar className="text-xl" />
            Agendar cita
          </a>
        </nav>
      </div>
    </header>
  );
}