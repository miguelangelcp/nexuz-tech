import { useEffect, useState } from "react";
import "./Preloader.css";

import logo from "../../assets/images/logo.png";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = setTimeout(() => {
      setLeaving(true);
    }, 1600);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={`preloader ${leaving ? "preloader-leaving" : ""}`}>
      <div className="preloader-glow" />

      <div className="preloader-content">
        <div className="preloader-logo-wrapper">
          <span className="preloader-ring preloader-ring-one" />
          <span className="preloader-ring preloader-ring-two" />

          <img
            src={logo}
            alt="Nexuz Tech"
            className="preloader-logo"
          />
        </div>

        <div className="preloader-loading">
          <span />
          <span />
          <span />
        </div>

        <p>Preparando soluciones tecnológicas...</p>
      </div>
    </div>
  );
}