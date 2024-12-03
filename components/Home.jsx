import Script from "next/script";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const HomeVideo = dynamic(() => import("./HomeVideo"), { ssr: false });

const Home = () => {
  const { t } = useTranslation(); 

  return (
    <div id="home" className="relative h-screen w-full">
      {/* Scripts dinámicos */}

      {/* Video de fondo */}
      <HomeVideo />

      {/* Contenido encima del video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">{t("title") || "Cargando..."}</h1> {/* Título dinámico */}
        <p className="mt-4 text-lg">{t("subtitle") || "Cargando..."}</p> {/* Subtítulo dinámico */}
      </div>

      {/* Filtro oscuro (opcional) */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default Home;
