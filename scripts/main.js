import { data } from "jquery";

//efecto cortina
export const handlePageNavigation = (setActivePage, setIsAnimating, page) => {
    if (typeof setIsAnimating !== "function" || typeof setActivePage !== "function") {
      console.error("setIsAnimating y setActivePage deben ser funciones.");
      return;
    }
  
    setIsAnimating(true);
    setTimeout(() => {
      setActivePage(page);
      setIsAnimating(false);
    }, 1000);
  };
  

  