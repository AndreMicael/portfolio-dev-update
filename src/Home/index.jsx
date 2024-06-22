import './home.scss';
import avatar from '../assets/avatar.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  

 
  return (
    <>
        
        <div className="home-container min-w-fit container is-fluid">


      {/* Aqui em criei uma div que vai conter as duas colunas onde fica na esquerda uma foto e na direita fica textos */}
      <div className="home-itens flex lg:items-center md:items-center sm:items-center items-center gap-4  
    
      ">

          {/* div para armazenar a foto */}
          
          <img src={avatar} className='
          lg:w-60 md:w-40 sm:w-30 w-36 
           rounded-2xl' alt="Avatar"/>
         

          {/* div para as informações */}
          <div className="home-text  md:w-40">
            <button className='available text-xs flex flex-row   '>
          
          <div className="icon"><FontAwesomeIcon icon={faCircle} style={{ color: '#23ce99', fontSize: '8px',}} /></div> 
          <div className='text self-center'>Disponível</div>
     
             </button>

             <h2 className='lg:text-4xl md:text-4xl sm:text-3xl text-xl text-white font-bold mt-2 whitespace-nowrap'>
           Full-Stack <br/> Developer & Designer
            </h2>

            <p className='mt-2 text-4sm text-white w-71             
            lg:whitespace-nowrap md:whitespace-nowrap sm:whitespace-nowrap whitespace-normal'>I design and develop smart solutions always paying attention to details.</p>
            <button className='mt-4 bg-verde hover:bg-verde-shadow text-black font-bold py-2 px-4 rounded '>Let's chat</button>
          </div>  

      </div> 
     
            
         
        </div>

    </>
  )
}

export default Home