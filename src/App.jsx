//Componentes

import Navbar from './Navbar/Navbar';
import Home from './Home';
import About from './About';
import ParticlesComponent from './components/particles';
import Skills from './Skills';
// import Grids from './Grids/Grids';
import Projects from './Projects';

// Estilos
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import "bulma/css/bulma.css";

// Hooks

import { useEffect, useState } from 'react';






function App() {

// 2 - Criar um estado para o scroll
const [activeColor, setActiveColor] = useState(false);

// 1 - Criar um use Effect para o scroll
useEffect(function(){

  function onScroll(){
    if(window.scrollY > 10){
      setActiveColor(true);
    }
    else{
      setActiveColor(false);
    }
  }

    window.addEventListener('scroll', onScroll);

},[]);



  return (
   
    <div className="App">
      <ParticlesComponent  id="particles" />     
      {/* <Grids/>     */}
      <Navbar action={activeColor} /> 
      {/* Enviando props do scroll para o Navbar */}
      <Home />
      <About />
      <Skills/>
      <Projects/>

 
  
     </div>

    
  
  );
}

export default App;