import './home.scss';
import avatar from '../assets/avatar.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  

 
  return (
    <>
        
        <div className="home-container  container is-fluid 
       p-0 lg:h-[75vh] md:h-[65vh] sm:h-[60vh] h-[60vh]
        ">


      {/* Aqui em criei uma div que vai conter as duas colunas onde fica na esquerda uma foto e na direita fica textos */}
      <div className=" home-itens 
      w-[65vw]
      flex 
      xl:flex-row lg:flex-row md:flex-row sm:flex-row 
      
      lg:items-center md:items-center sm:items-center items-center gap-4  
    
      ">

          {/* div para armazenar a foto */}
          
          <img src={avatar} className='
          xl:w-60 lg:w-60 md:w-40 sm:w-30 w-[30vw] 

           rounded-2xl' alt="Avatar"/>
         

          {/* div para as informações */}
          <div className="home-text  md:w-40 ">
            <button className='available text-xs flex flex-row 
            whitespace-no-wrap
               '>
          
          <div className="icon"><FontAwesomeIcon icon={faCircle} style={{ color: '#23ce99', fontSize: '8px',}} /></div> 
          <div className='text self-center'>Disponível</div>
     
             </button>

             <h2 className='xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-xl 
             
             text-white font-bold mt-2 whitespace-nowrap'>
           Full-Stack <br/> Developer & Designer.
            </h2>

            <p className=' mt-2 text-4sm text-white             
            whitespace-normal
            xl:w-[30vw] lg:w-[40vw] md:w-[50vw] sm:w-[53vw] w-[45vw] 
            '>I design and develop smart solutions always paying attention to details.</p>
            <button className='mt-4 bg-verde hover:bg-verde-shadow text-black font-bold py-2 px-4 rounded '>Let's chat</button>
          </div>  

      </div> 
     
            
         
        </div>

    </>
  )
}

export default Home