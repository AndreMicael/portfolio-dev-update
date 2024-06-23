//Componentes


import Navbar from './Navbar/Navbar';
import Home from './Home';




import { Tabs } from './components/tabs/Tabs';





// Estilos
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import "bulma/css/bulma.css";

// Hooks

import { useEffect, useState } from 'react';
import Footer from './Footer';






function App() {

// 2 - Criar um estado para o scroll
// const [activeColor, setActiveColor] = useState(false);

// 1 - Criar um use Effect para o scroll
// useEffect(function(){

//   function onScroll(){
//     if(window.scrollY > 15){
//       setActiveColor(true);
//     }
//     else{
//       setActiveColor(false);
//     }
//   }

//     window.addEventListener('scroll', onScroll);

// },[]);



  return (
   
    <div className="App">
   
    
       {/* <Grids/>      */}
      {/* <Navbar action={activeColor} />  */}
      <Navbar /> 
      {/* Enviando props do scroll para o Navbar */}
      <Home />
      <Tabs/>{/*
      <Skills/>
      <Projects/>
      <Contact/>  */}
      <Footer/>
      
 
  
     </div>

    
  
  );
}

export default App;
