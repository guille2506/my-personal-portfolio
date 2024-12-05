import { useState } from "react";
import { useTranslation } from "react-i18next"; 
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

  const { t } = useTranslation(); 

  // Páginas con traducción
  const pages = [
    { id: "home", label: t("home.home") },
    { id: "about", label: t("home.about") },
    { id: "resume", label: t("home.resume") },
    { id: "portfolio", label: t("home.portfolio") },
    { id: "contact", label: t("home.contact") },
  ];

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
    pages={pages} 
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
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() =>
              handlePageNavigation(
                setActivePage,
                setIsAnimating,
                setAnimationDirection,
                page.id,
                page.id === "home" ? "down" : "up"
              )
            }
            className={`text-white ${
              activePage === page.id
                ? "text-green-400 underline"
                : "hover:text-gray-300"
            } transition duration-200`}
          >
            {page.label}
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
