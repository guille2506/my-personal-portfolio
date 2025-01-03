import i18n from "i18next";

const LanguageSwitch = ({ activePage }) => {
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className={`fixed bottom-8 left-8 flex flex-col items-start space-y-5 z-50 ${
        activePage !== "home" ? "hidden" : ""
      }`}
    >
      {/* Botón para cambiar a Español */}
      <button
        onClick={() => changeLanguage("es")}
        className="text-white text-sm hover:text-gray-300 transition-transform duration-200 ml-1"
        style={{
          writingMode: "vertical-rl",
          letterSpacing: "2px",
        }}
      >
        ESP
      </button>

      {/* Botón para cambiar a Inglés */}
      <button
        onClick={() => changeLanguage("en")}
        className="text-white text-sm hover:text-gray-300 transition-transform duration-200 ml-1"
        style={{
          writingMode: "vertical-rl",
          letterSpacing: "2px",
        }}
      >
        ENG
      </button>
    </div>
  );
};

export default LanguageSwitch;
