//Componentes

import Navbar from './Navbar/Navbar';
import Home from './Home';
import { HomeTabsProvider } from './Contexto/HomeTabsContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



import { Tabs } from './components/tabs/Tabs';





// Estilos
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import "bulma/css/bulma.css";

// Hooks


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
   
   <HomeTabsProvider>
   <ToastContainer />
       {/* <Grids/>      */}
      {/* <Navbar action={activeColor} />  */}
      <Navbar /> 
      {/* Enviando props do scroll para o Navbar */}
      <Home/>
      <Tabs/>{/*
      <Skills/>
      <Projects/>
      <Contact/>  */}
      <Footer/>
      
      </HomeTabsProvider>
  
     </div>

    
  
  );
}

export default App;
