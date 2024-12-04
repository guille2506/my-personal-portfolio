import "../styles/globals.css"; 
import "../i18n/i18n"; 
import LanguageSwitch from "../components/LanguageSwitch"; 
import HomeVideo from "../components/HomeVideo";

export default function App({ Component, pageProps }) {
  return (
    <div className="relative">
      {/* Video de fondo persistente */}
      <HomeVideo />
      {/* Contenido de la aplicación */}
      <main className="relative z-10">
        <Component {...pageProps} />
      </main>
    </div>
  );
}