import "../styles/globals.css"; 
import "../styles/jquery.mb.YTPlayer.min.css";
import "../i18n/i18n"; 
import LanguageSwitch from "../components/LanguageSwitch"; 

export default function App({ Component, pageProps }) {
  return (
    <>
      <LanguageSwitch /> {/* Selector siempre visible */}
      <Component {...pageProps} />
    </>
  );
}