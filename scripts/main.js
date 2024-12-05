
//efecto cortina
export const handlePageNavigation = (setActivePage, setIsAnimating, setAnimationDirection, page, direction) => {
  if (
    typeof setIsAnimating !== "function" ||
    typeof setActivePage !== "function" ||
    typeof setAnimationDirection !== "function"
  ) {
    console.error("setIsAnimating, setActivePage y setAnimationDirection deben ser funciones.");
    return;
  }

  setAnimationDirection(direction); 
  setIsAnimating(true);

  setTimeout(() => {
    setActivePage(page); 
  }, 500); 

  setTimeout(() => {
    setIsAnimating(false); 
  }, 1000); 
};


//letras





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
  