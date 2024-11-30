import { useState } from "react";
import Home from "../components/Home";
import About from "../components/About";
import HomeVideo from "../components/HomeVideo";

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
      {/* Video de fondo */}
      <HomeVideo />

      {/* Efecto de cortina */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-transform duration-1000 ${
          isAnimating ? "translate-y-0" : "-translate-y-full"
        }`}
      ></div>

      {/* Contenido dinámico */}
      <div className="relative z-10">
        {activePage === "home" && <Home />}
        {activePage === "about" && <About />}
      </div>

      {/* Botones de navegación */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 space-x-4 z-20">
        <button
          onClick={() => handleNavigation("home")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation("about")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          About
        </button>
      </div>
    </div>
  );
}
