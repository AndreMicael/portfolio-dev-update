import React, { useState } from 'react'; // Importando corretamente o hook useState
import './navbar.scss';

import DarkMode from "../components/darkMode/DarkMode"
import logo from "../assets/tabfolio.svg"



const Navbar = () => {





  return (
    <div>
        
    <nav className='xl:w-[55vw] lg:w-[55vw] md:w-[80vw] sm:w-[80vw] w-[80vw] 
    md:h-[12vh] sm:h-[14vh] h-[10vh]
     mt-6  
     px-5
    
    '>
      
      <div className="brand whitespace-nowrap">
        <img className='
        min-w-32
   
        ' src={logo} alt="Logo Tabfólio" />
      </div>

      <div className='botao'>
        <DarkMode/>
      </div>

    </nav>

    </div>
  );
};

export default Navbar;
