import Navbar from './Navbar/Navbar';
import Home from './Home';
import About from './About';
import ParticlesComponent from './components/particles';
import Skills from './Skills';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.scss';
import "bulma/css/bulma.css";



import Grids from './Grids/Grids';

function App() {
  return (
   
    <div className="App">
    <ParticlesComponent  id="particles" />     
    <Grids/>    
      <Navbar />
      <Home />
      <About />
      <Skills/>

 
  
     </div>

    
  
  );
}

export default App;
