import { useState } from "react";

const HamburgerMenu = ({ pages, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Botón del menú hamburguesa */}
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none z-50 md:hidden"
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
            {pages.map((page) => (
              <li key={page.id}>
                <button
                  onClick={() => {
                    onNavigate(page.id); 
                    setIsOpen(false);
                  }}
                  className="block text-left w-full hover:text-gray-300 transition-colors"
                >
                  {page.label}
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
