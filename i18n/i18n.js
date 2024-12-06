import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../public/languages/eng.json";
import es from "../public/languages/esp.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: "en", 
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false, 
  },
  returnObjects: true, 

});

export default i18n;
