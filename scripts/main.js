
//efecto cortina
// Efecto cortina con direcciones
export const handlePageNavigation = (setActivePage, setIsAnimating, setAnimationDirection, page, direction) => {
  if (
    typeof setIsAnimating !== "function" ||
    typeof setActivePage !== "function" ||
    typeof setAnimationDirection !== "function"
  ) {
    console.error("setIsAnimating, setActivePage y setAnimationDirection deben ser funciones.");
    return;
  }

  setAnimationDirection(direction); // Dirección: 'up' (de abajo a arriba) o 'down' (de arriba a abajo)
  setIsAnimating(true);

  setTimeout(() => {
    setActivePage(page); // Cambiar el contenido cuando la cortina está completamente activa
  }, 500); // Cambiar contenido a mitad de la animación (0.5s)

  setTimeout(() => {
    setIsAnimating(false); // Finalizar la animación
  }, 1000); // Completar la animación (1s)
};



  //gato

  console.log( `  
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⢻⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢠⣼⣿⣿⣿⡟⡀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢸⣿⣿⣿⣿⢃⢃⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣾⣿⣿⣿⣿⠜⢀⠂⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡋⠀⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣿⣿⣿⣿⠃⡀⠂⠌⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣬⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⠏⠠⠀⠅⠂⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠟⡛⢁⠂⡑⠈⡄⢉⠐⡈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⢿⣿⣿⣿⣿⣦⡙⢻⣿⣿⣿⣿⠿⠟⠋⠀⠁⡐⢀⠂⠀⠁⠐⢀⠂⡐⠈⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠈⠛⠿⣿⣿⣿⠧⠈⠋⠉⠄⡀⢂⠡⢈⠐⡀⢂⠘⠀⣠⣴⣶⣶⣦⣅⠂⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⡉⠁⠀⠆⡈⠐⡈⠄⢀⠂⡐⢂⠐⡀⢂⣾⣿⣿⣿⣿⣿⣿⡁⠒⠚⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⡠⠀⠀⠐⣀⠀⠀⡐⠀⠁⠠⠈⠄⢂⠐⡨⠀⠁⣾⣿⣿⣿⣿⣿⣿⠿⠁⡐⢈⣤⡛⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁⠀⠀⠉⠂⠀⠐⠂⠡⠈⠀⠡⠈⠄⠂⠄⡁⠀⡿⣿⣿⣿⣿⡿⠟⢀⠂⠔⣯⣾⣽⡼⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢃⢤⣦⣶⣶⣀⡠⡀⠀⠑⠀⠀⠡⠈⠄⠡⣀⠡⣛⡦⠉⡀⢀⠀⠄⢂⠘⡈⠙⣉⣼⣟⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠠⢸⣿⣿⣿⣿⣿⣦⠄⠀⠀⠀⠀⠈⠄⠡⠀⠼⣿⣷⢇⠐⠠⠌⡐⢈⠐⣠⡑⢉⠦⣙⣮⣽⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠀⢹⣿⣿⣿⣿⠿⠙⠀⠄⠠⠀⠀⠀⠀⠄⡁⢂⡽⣡⡆⢈⠐⠠⢐⡈⠐⡠⠴⠿⣟⡿⣿⣞⠽⢻⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⡀⠨⠍⠉⠉⠡⠂⠀⠌⠠⠁⠄⠀⡈⠔⣨⢴⣾⣿⣿⠛⠀⠈⢂⠡⢁⡶⠴⠃⣉⣡⣽⠷⣖⢊⠱⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠠⠐⡀⠂⠄⡀⠀⠠⠈⠀⠁⣀⠀⣐⡈⢷⠛⣿⣿⠟⠀⡀⠌⠒⠋⣩⣴⣦⠿⠷⣿⢿⡿⣯⢏⠶⣹⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⡡⢀⠁⢂⠐⠀⠀⠀⠀⠀⠀⠈⠣⢐⠠⢹⡄⠏⡀⢂⡐⢈⠰⣉⣻⣽⣷⣿⣿⣿⣾⣶⣧⠎⡔⢤⣻⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⡄⡄⢡⠐⠀⢣⡜⢳⣿⣾⣿⡝⣾⣿⣽⡎⢱⠊⣧⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⠐⣿⣿⣶⣶⣾⣷⣶⣷⣿⣿⡟⣎⢷⣻⣟⡷⢭⡣⢏⡴⢍⠿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢄⠛⡛⠍⠻⠿⡿⢿⠿⣿⡻⢧⡙⡜⣾⣹⠾⣏⢇⠛⡖⢠⠈⡀
⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⡿⣛⣭⣷⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⢂⠐⠠⠈⠄⡑⠈⠄⡙⠴⣉⢦⠱⣍⠶⣭⢻⠆⣎⠳⠈⠄⠂⠄
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠁⠂⠄⡁⢂⠐⠌⡒⢎⠳⣌⠛⡴⣟⡬⣄⠂⠡⠈⠠⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠠⠐⠠⢈⠐⡈⠄⡁⠦⢙⡘⠡⠈⠄⠈⠄⠐⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠄⢂⠐⠠⠐⡐⠠⢁⠂⡁⠠⠀⠠⠀⠀⠂
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠠⠈⠄⠡⡈⠄⠌⡐⢁⠂⡁⢂⠐⡀⠂⠄⡁⠠⠁⠄
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠐⠠⠀⠄⡀⢀⠀⡐⢈⠐⡈⠄⢂⠡⠌⡐⠘⡀⠂⠔⡈⠐⡀⢂⠐⠠⢁⠂⠄⡁⠐⡀⠀⠀

     ██████╗ ██╗   ██╗███████╗    ██████╗  █████╗ ███████╗ █████╗     
    ██╔═══██╗██║   ██║██╔════╝    ██╔══██╗██╔══██╗██╔════╝██╔══██╗    
    ██║   ██║██║   ██║█████╗      ██████╔╝███████║███████╗███████║    
    ██║▄▄ ██║██║   ██║██╔══╝      ██╔═══╝ ██╔══██║╚════██║██╔══██║    
    ╚██████╔╝╚██████╔╝███████╗    ██║     ██║  ██║███████║██║  ██║    
     ╚══▀▀═╝  ╚═════╝ ╚══════╝    ╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    
                                                                      
             ██████╗██████╗  █████╗  ██████╗██╗  ██╗██████╗           
            ██╔════╝██╔══██╗██╔══██╗██╔════╝██║ ██╔╝╚════██╗          
            ██║     ██████╔╝███████║██║     █████╔╝   ▄███╔╝          
            ██║     ██╔══██╗██╔══██║██║     ██╔═██╗   ▀▀══╝           
            ╚██████╗██║  ██║██║  ██║╚██████╗██║  ██╗  ██╗             
             ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝  ╚═╝             
                                                                                
    `);
  