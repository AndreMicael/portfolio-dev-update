import Navbar from './Navbar/Navbar';
import Home from './Home';
import './App.scss';
import "bulma/css/bulma.css";
import ParticlesComponent from './components/particles';


import Grids from './Grids/Grids';

function App() {
  return (
   
    <div className="App">
    <ParticlesComponent  id="particles" />
     
    <Grids/>
  
   
      <Navbar />
      <Home />
 
  
     </div>

    
  
  );
}

export default App;
