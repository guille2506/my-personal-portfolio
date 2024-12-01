import Script from "next/script";
import dynamic from "next/dynamic";
import { useEffect } from "react";


// Cargar jQuery dinámicamente (solo en cliente)
const HomeVideo = dynamic(
  () => import("./HomeVideo"), // Componente que incluye la lógica de YTPlayer
  { ssr: false } // Deshabilita SSR para este componente
);

const Home = () => {
  return (
    <div id="home" className="relative h-screen w-full">
      {/* Scripts dinámicos */}
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/lib/jquery.mb.YTPlayer.min.js" strategy="beforeInteractive" />

      {/* Video de fondo */}
      <HomeVideo />

      {/* Contenido encima del video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Bienvenido a mi Portafolio</h1>
        <p className="mt-4 text-lg">Explora mi trabajo y experiencia.</p>
      </div>

      {/* Filtro oscuro (opcional) */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default Home;
