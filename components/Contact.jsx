import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xjkvdkre"); // Reemplaza con tu Formspree ID.
  const [showCurtain, setShowCurtain] = useState(false);

  if (state.succeeded) {
    // Activar animación de cortina
    setTimeout(() => setShowCurtain(true), 300);

    return (
      <div
        className={`${
          showCurtain ? "curtain-active" : "curtain"
        } bg-[#101010] text-white min-h-screen py-12 px-6 flex items-center justify-center`}
      >
        <div className="text-center space-y-6">
          <h2 className="text-[46px] font-bold">{t("contact.form.statusSuccess")}</h2>
          <p className="text-lg text-gray-400">{t("contact.form.thankYouMessage")}</p>
          <button
            onClick={() => window.location.reload()} // Refresca la página para reiniciar el formulario.
            className="mt-6 bg-[#009E66] hover:bg-green-700 text-white py-2 px-6 rounded-md transition-colors duration-200"
          >
            {t("contact.form.goBackButton")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#101010] text-white min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Encabezado */}
        <div className="text-center space-y-4">
          <p className="text-gray-400">{t("contact.subtitle")}</p>
          <h2 className="text-[46px] font-bold">{t("contact.title")}</h2>
          <div className="mt-2 h-1 w-16 bg-[#009E66] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">{t("contact.form.title")}</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.form.name")}
                  required
                  className="w-full px-4 py-2 bg-[#161616] text-white border-none border-b border-gray-800 focus:border-[#00D187] focus:outline-none focus:ring-[#00D187]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  required
                  className="w-full px-4 py-2 bg-[#161616] text-white border-none border-b border-gray-800 focus:border-[#00D187] focus:outline-none focus:ring-[#00D187]"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder={t("contact.form.subject")}
                required
                className="w-full px-4 py-2 bg-[#161616] text-white border-none border-b border-gray-800 focus:border-[#00D187] focus:outline-none focus:ring-[#00D187]"
              />
              <textarea
                name="message"
                placeholder={t("contact.form.message")}
                rows="5"
                required
                className="w-full px-4 py-2 bg-[#161616] text-white border-none border-b border-gray-800 focus:border-[#00D187] focus:outline-none focus:ring-[#00D187]"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#009E66] hover:bg-green-700 text-white py-2 rounded-md transition-colors duration-200"
              >
                {state.submitting
                  ? t("contact.form.statusSending")
                  : t("contact.form.sendButton")}
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="bg-[#111110] text-white p-6 rounded-lg shadow-lg space-y-6">
            <h4 className="text-2xl font-semibold">{t("contact.info.heading")}</h4>
            <p className="text-gray-400">{t("contact.info.description")}</p>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <Icon icon="ion:person" className="text-[#009E66] text-3xl flex-shrink-0" />
                <div>
                  <h6 className="font-semibold">{t("contact.info.name.label")}</h6>
                  <p className="text-gray-400">{t("contact.info.name.value")}</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Icon icon="ion:location" className="text-[#009E66] text-3xl flex-shrink-0" />
                <div>
                  <h6 className="font-semibold">{t("contact.info.location.label")}</h6>
                  <p className="text-gray-400">{t("contact.info.location.value")}</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Icon icon="ion:call" className="text-[#009E66] text-3xl flex-shrink-0" />
                <div>
                  <h6 className="font-semibold">{t("contact.info.phone.label")}</h6>
                  <p className="text-gray-400">
                    <a href="tel:+441632967704" className="hover:underline">
                      {t("contact.info.phone.value")}
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Icon icon="ion:send" className="text-[#009E66] text-3xl flex-shrink-0" />
                <div>
                  <h6 className="font-semibold">{t("contact.info.email.label")}</h6>
                  <p className="text-gray-400">
                    <a href="mailto:emma@example.com" className="hover:underline">
                      {t("contact.info.email.value")}
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
