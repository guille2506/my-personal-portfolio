import i18n from "i18next";

const LanguageSwitch = () => {
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); 
  };

  return (
    <div className="fixed bottom-4 left-4 flex flex-col items-start space-y-2 z-50">
      {/* Botón para cambiar a Español */}
      <button
        onClick={() => changeLanguage("es")}
        className="text-white text-sm hover:text-gray-300 transition-transform duration-200"
      >
        E<br />S<br />P
      </button>

      {/* Botón para cambiar a Inglés */}
      <button
        onClick={() => changeLanguage("en")}
        className="text-white text-sm hover:text-gray-300 transition-transform duration-200"
      >
        E<br />N<br />G
      </button>
    </div>
  );
};

export default LanguageSwitch;
