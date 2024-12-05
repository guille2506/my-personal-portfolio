import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const HomeVideo = dynamic(() => import("./HomeVideo"), { ssr: false }); 

const Home = () => {
  const { t } = useTranslation();

  const [currentText, setCurrentText] = useState(""); 
  const [currentWordIndex, setCurrentWordIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [typingSpeed, setTypingSpeed] = useState(100); 
  
  const words = t("home.rotatingWords", { returnObjects: true }) || []; 

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[currentWordIndex];
    let typingTimeout;

    const handleTyping = () => {
      if (isDeleting) {

        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(50); 
      } else {

        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
        setTypingSpeed(100); 
      }

      if (!isDeleting && currentText === currentWord) {

        typingTimeout = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        typingTimeout = setTimeout(handleTyping, typingSpeed);
      }
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout); 
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <div id="home" className="relative h-screen w-full">
      {/* Video de fondo */}
      <HomeVideo />

      {/* Contenido encima del video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1
          className="font-bold"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 70px)", 
          }}
        >
          {t("home.title")}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
  <span style={{ color: "white", fontSize:"32px" }}>I’m a </span>
  <span style={{ color: "#009E66", fontSize:"32px" }}>{currentText}</span>
  <span className="animate-blink">|</span> {/* Cursor animado */}
</p>

      </div>

      {/* Filtro oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default Home;
