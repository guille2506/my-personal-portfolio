import { useState } from "react";
import { handlePageNavigation } from "../scripts/main";
import Home from "../components/Home";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import HomeVideo from "../components/HomeVideo";
import SocialLinks from "../components/SocialLinks";
import LanguageSwitch from "../components/LanguageSwitch";
import HamburgerMenu from "../components/HamburgerMenu.jsx"; // Asegúrate de ajustar la ruta según tu estructura


export default function MainPage() {
  const [activePage, setActivePage] = useState("home");
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div id="main" className="relative h-screen w-full">
      {/* Efecto Curtain */}
      <div className={`curtain ${isAnimating ? "active" : ""}`}></div>

      {/* Video de fondo */}
      <HomeVideo />

      {/* Redes sociales y cambio de idioma */}
      {activePage === "home" && (
        <>
          <SocialLinks />
          <LanguageSwitch />
        </>
      )} {/* DUADAS.... */}

{activePage === "home" && (
  <>
    <SocialLinks />
    <LanguageSwitch activePage={activePage} />
  </>
)}    {/* DUADAS.... */}


   {/* Menú Hamburguesa */}
   <div className="fixed top-4 right-4 z-50 md:hidden">
        <HamburgerMenu
          onNavigate={(page) => {
            handlePageNavigation(setActivePage, setIsAnimating, page);
          }}
        />
      </div>

      {/* Botones de navegación para pantallas grandes */}
      <div className="fixed top-4 right-4 hidden md:flex flex-row space-x-6 z-20">
        {["home", "about", "resume", "portfolio", "contact"].map((page) => (
          <button
            key={page}
            onClick={() => handlePageNavigation(setActivePage, setIsAnimating, page)}
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </div>

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
        {["home", "about", "resume", "portfolio", "contact"].map((page) => (
          <button
            key={page}
            onClick={() => handlePageNavigation(setActivePage, setIsAnimating, page)}
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
