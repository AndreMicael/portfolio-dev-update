import Navbar from './Navbar/Navbar';
import './App.scss';
import "bulma/css/bulma.css";
import P5Sketch from './components/p5-sketch';

import Grids from './Grids/Grids';

function App() {
  return (
   
    <div className="App">
     
    {/* <Grids/> */}
  
      <div className='sketch'>
      <P5Sketch />
      </div>
      <Navbar />
     Olá Mundo3
     
  
     </div>

    
  
  );
}

export default App;
