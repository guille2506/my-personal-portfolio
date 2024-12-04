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
import HamburgerMenu from "../components/HamburgerMenu.jsx";

export default function MainPage() {
  const [activePage, setActivePage] = useState("home");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("up");

  return (
    <div id="main" className="relative h-screen w-full">
      {/* Efecto Curtain */}
      {isAnimating && (
        <div className={`curtain ${animationDirection}`}>
          <div className="curtain-panel"></div>
        </div>
      )}

      {/* Video de fondo */}
      <HomeVideo />

      {/* Redes sociales y cambio de idioma */}
      {activePage === "home" && (
        <>
          <SocialLinks />
          <LanguageSwitch activePage={activePage} />
        </>
      )}

      {/* Menú Hamburguesa */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <HamburgerMenu
          onNavigate={(page) =>
            handlePageNavigation(
              setActivePage,
              setIsAnimating,
              setAnimationDirection,
              page,
              page === "home" ? "down" : "up"
            )
          }
        />
      </div>

      {/* Botones de navegación para pantallas grandes */}
      <div className="fixed top-10 right-12 hidden md:flex flex-row space-x-8 z-20">
        {["home", "about", "resume", "portfolio", "contact"].map((page) => (
          <button
            key={page}
            onClick={() =>
              handlePageNavigation(
                setActivePage,
                setIsAnimating,
                setAnimationDirection,
                page,
                page === "home" ? "down" : "up"
              )
            }
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      <div className="relative z-10">
        <div className={activePage === "home" ? "" : "hidden"}>
          <Home />
        </div>
        {activePage === "about" && <About />}
        {activePage === "resume" && <Resume />}
        {activePage === "portfolio" && <Portfolio />}
        {activePage === "contact" && <Contact />}
      </div>
    </div>
  );
}



   {/* Botones de navegación */}
      {/* <div className="fixed top-4 right-4 flex flex-row space-x-6 z-20">
        {["home", "about", "resume", "portfolio", "contact"].map((page) => (
          <button
            key={page}
            onClick={() => handlePageNavigation(setActivePage, setIsAnimating, page)}
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </div> */}