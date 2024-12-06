import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import codeIcon from "@iconify-icons/mdi/code-braces";
import designIcon from "@iconify-icons/mdi/brush";
import yella from "@iconify-icons/mdi/headset";

const About = () => {
  const { t } = useTranslation();

  const services = t("about.services.list", { returnObjects: true });

  return (
    <section
      id="about"
      className="relative bg-[#101010] text-white min-h-screen py-6 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Título */}
        <div className="text-center space-y-4">
          <p className="text-gray-400">{t("about.subtitle")}</p>
          <h1 className="text-4xl sm:text-5xl font-bold">{t("about.title")}</h1>
          <div className="mt-2 h-1 w-16 bg-[#009E66] mx-auto"></div>
        </div>

        {/* Información principal */}
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          {/* Imagen */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src="/img/moto.jpg"
              alt="About Me"
              width={400}
              height={400}
              className="shadow-lg rounded-full w-full max-w-[300px] sm:max-w-[400px] h-auto"
            />
          </div>

          {/* Descripción */}
          <div className="w-full lg:w-2/3 space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#009E66]">
              {t("about.whoAmI")}
            </h2>
            <div className="space-y-4 sm:space-y-5">
              <p className="text-white text-lg sm:text-xl font-bold leading-relaxed">
                {t("about.description.intro")}
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed border-b-2 border-white/10 pb-4">
                {t("about.description.details")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base text-gray-400">
              <div>
                <span className="text-[#dadada]">{t("about.info.name")}:</span>
                <p className="text-[#9f9f9f]">Guillermo</p>
              </div>
              <div>
                <span className="text-[#dadada]">{t("about.info.email")}:</span>
                <p>
                  <a
                    href="mailto:guillermoillanes233@gmail.com"
                    className="text-[#009E66] hover:underline"
                  >
                    guillermoillanes233@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <span className="text-[#dadada]">{t("about.info.age")}:</span>
                <p className="text-[#9f9f9f]">21</p>
              </div>
              <div>
                <span className="text-[#dadada]">{t("about.info.from")}:</span>
                <p className="text-[#9f9f9f]">Argentina</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-start gap-4 ml-4">
              
  <a
    href="/guillermo_Illanes_fullstack.pdf"
    download="guillermo_Illanes_fullstack.pdf"
    className="inline-block bg-[#009E66] text-white text-sm sm:text-base px-4 py-2 rounded shadow hover:bg-[#007c4d] transition-all w-auto"
  >
    Download CV (English)
  </a>

  <a
    href="/guillermo_Illanes_fullstack_es.pdf"
    download="guillermo_Illanes_fullstack_es.pdf"
    className="inline-block bg-[#009E66] text-white text-sm sm:text-base px-4 py-2 rounded shadow hover:bg-[#007c4d] transition-all w-auto"
  >
    Descargar CV (Español)
  </a>
</div>

          </div>
        </div>

        {/* Servicios */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#f0f0f0]">
            {t("about.services.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#161717] p-6 rounded-lg shadow text-center space-y-4 border-b-2 border-transparent hover:border-[#009E66] hover:shadow-md transition-all"
              >
                <div className="flex justify-center items-center">
                  {index === 0 ? (
                    <Icon icon={designIcon} className="text-5xl text-[#009E66]" />
                  ) : index === 1 ? (
                    <Icon icon={codeIcon} className="text-5xl text-[#009E66]" />
                  ) : (
                    <Icon icon={yella} className="text-5xl text-[#009E66]" />
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#f0f0f0]">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
