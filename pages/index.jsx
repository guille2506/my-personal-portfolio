import { useState } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import HomeVideo from "../components/HomeVideo";
import SocialLinks from "../components/SocialLinks";
import LanguageSwitch from "../components/LanguageSwitch";

export default function MainPage() {
  const [activePage, setActivePage] = useState("home");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = (page) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActivePage(page);
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div id="main" className="relative h-screen w-full">
      {/* Efecto Curtain */}
      <div className={`curtain ${isAnimating ? "active" : ""}`}></div>

      {/* Video de fondo */}
      <HomeVideo />

      {/* Redes sociales y cambio de idioma */}
      <SocialLinks />
      <LanguageSwitch />

      {/* Contenido dinámico */}
      <div className="relative z-10">
        {activePage === "home" && <Home />}
        {activePage === "about" && <About />}
        {activePage === "resume" && <Resume />}
        {activePage === "portfolio" && <Portfolio />}
        {activePage === "contact" && <Contact />}
      </div>

      {/* Botones de navegación */}
      <div className="fixed top-4 right-4 flex flex-row space-x-6 z-20">
        <button
          onClick={() => handleNavigation("home")}
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation("about")}
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          About
        </button>
        <button
          onClick={() => handleNavigation("resume")}
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          Resume
        </button>
        <button
          onClick={() => handleNavigation("portfolio")}
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          Portfolio
        </button>
        <button
          onClick={() => handleNavigation("contact")}
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          Contact
        </button>
      </div>
    </div>
  );
}
