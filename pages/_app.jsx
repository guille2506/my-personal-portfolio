// pages/_app.jsx
import '../styles/globals.css'; // Tus estilos globales
import '../styles/jquery.mb.YTPlayer.min.css'; // Estilos de YTPlayer

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
