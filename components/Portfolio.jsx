import React from "react";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      image: "/img/insco.jpg",
      link: "https://github.com/guille2506/forBeron.git",
    },
    {
      id: 2,
      image: "/img/camara.jpg",
      link: "http://profeberon.cuyosoft.com/camara/desarrollo/2024/app-star/",
    },
    {
      id: 3,
      image: "/img/item-3.jpg",
      link: "https://github.com/tuusuario/modern-bag-design",
    },
    {
      id: 4,
      image: "",
      link: "https://github.com/tuusuario/modern-bag-design",
    },
    {
      id: 5,
      image: "/img/item-5.jpg",
      link: "https://github.com/tuusuario/tshirt-design",
    },
    {
      id: 6,
      image: "/img/item-6.jpg",
      link: "https://github.com/tuusuario/packaging-box-mockup",
    },
  ];

  return (
<div className="min-h-screen bg-[#101010] text-white py-12 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Sección de título */}
    <div className="text-center mb-12"> {/* Aumentado el margen inferior aquí */}
      <p className="text-gray-400 mb-4">{t("portfolio.subtitle")}</p>
      <h2 className="text-[46px] font-bold text-white">{t("portfolio.title")}</h2>
      <div className="mt-2 h-1 w-16 bg-[#009E66] mx-auto"></div>
    </div>

    {/* Grid de tarjetas */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group bg-[#181818] rounded-lg overflow-hidden shadow-lg relative"
        >
          <img
            src={project.image}
            alt={t(`portfolio.projects.${index}.title`)}
            className="w-full h-48 object-cover transition-transform transform group-hover:scale-105"
          />
          <div className="p-4">
            <h6 className="text-lg mb-2">{t(`portfolio.projects.${index}.title`)}</h6> {/* Margen inferior */}
            <p className="text-sm text-gray-400">{t(`portfolio.projects.${index}.description`)}</p>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm bg-[#009E66] px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              {t("portfolio.viewGithub")}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Portfolio;
