import React from "react";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();

  const skills = [
    { name: "HTML/CSS", percentage: 85 },
    { name: "JavaScript", percentage: 90 },
    { name: "React JS", percentage: 86 },
    { name: "Next.js", percentage: 95 },
    { name: "PHP", percentage: 80 },
    { name: "Laravel", percentage: 80 },
    { name: "MySql", percentage: 80 },
  ];

  return (
    <section id="resume" className="bg-[#101010] text-white py-12 px-6 min-h-screen w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center space-y-4 mb-12">
          <p className="text-gray-400">{t("resume.subtitle")}</p>
          <h2 className="text-5xl font-bold text-[#f0f0f0]">{t("resume.title")}</h2>
          <div className="mt-2 h-1 w-16 bg-[#009E66] mx-auto"></div>
        </div>

        {/* Educación y Experiencia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Educación */}
          <div>
            <h3 className="text-2xl font-semibold text-[#009E66] mb-6">{t("resume.education")}</h3>
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#009E66]"></div>
              {t("resume.educationList", { returnObjects: true }).map((item, index) => (
                <div key={index} className="relative mb-8 pl-12 pb-4 border-b border-white/10">
                  <div className="absolute -left-2 top-2 h-5 w-5 bg-[#009E66] rotate-45"></div>
                  <h5 className="text-xl font-semibold">{item.title}</h5>
                  <span className="block text-gray-400 text-sm">{item.details}</span>
                  <p className="text-gray-400 text-sm mt-4">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experiencia */}
          <div>
            <h3 className="text-2xl font-semibold text-[#009E66] mb-6">{t("resume.experience")}</h3>
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#009E66]"></div>
              {t("resume.experienceList", { returnObjects: true }).map((item, index) => (
                <div key={index} className="relative mb-8 pl-12 pb-4 border-b border-white/10">
                  <div className="absolute -left-2 top-2 h-5 w-5 bg-[#009E66] rotate-45"></div>
                  <h5 className="text-xl font-semibold">{item.title}</h5>
                  <span className="block text-gray-400 text-sm">{item.details}</span>
                  <p className="text-gray-400 text-sm mt-4">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Habilidades */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#009E66] text-center mb-6">{t("resume.skills")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <span className="text-sm">{skill.name}</span>
                  <span className="text-sm text-[#009E66]">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full mt-2">
                  <div
                    className="h-2 bg-[#009E66] rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
