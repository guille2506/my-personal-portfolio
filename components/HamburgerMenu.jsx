import { useState } from "react";

const HamburgerMenu = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Botón del menú hamburguesa */}
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none z-50 md:hidden" // Oculto en dispositivos más grandes
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute top-8 right-0 bg-black text-white shadow-lg rounded-lg w-40 z-40">
          <ul className="flex flex-col space-y-4 p-4">
            {["home", "about", "resume", "portfolio", "contact"].map((page) => (
              <li key={page}>
                <button
                  onClick={() => {
                    onNavigate(page);
                    setIsOpen(false); // Cierra el menú después de la navegación
                  }}
                  className="block text-left w-full hover:text-gray-300 transition-colors"
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
