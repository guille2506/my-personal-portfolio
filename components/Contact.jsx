import React, { useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t("contact.form.statusSending"));
    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      if (response.status === 200) {
        setStatus(t("contact.form.statusSuccess"));
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error.response?.data || error.message);
      setStatus(t("contact.form.statusError"));
    }
  };

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
          {status && <p className="mb-4 text-center">{status}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.form.name")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#161616] text-white border-none border-b border-gray-800 focus:border-[#00D187] focus:outline-none focus:ring-[#00D187]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#161616] text-white border-none border-b border-gray-800 focus:border-[#00D187] focus:outline-none focus:ring-[#00D187]"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder={t("contact.form.subject")}
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#161616] text-white border-none border-b border-gray-800 focus:border-[#00D187] focus:outline-none focus:ring-[#00D187]"
              />
              <textarea
                name="message"
                placeholder={t("contact.form.message")}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#161616] text-white border-none border-b border-gray-800 focus:border-[#00D187] focus:outline-none focus:ring-[#00D187]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#009E66] hover:bg-green-700 text-white py-2 rounded-md transition-colors duration-200"
              >
                {t("contact.form.sendButton")}
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
