import './home.scss';
import avatar from '../assets/webp/IMG_7153.webp'
import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { HomeTabsContext } from '../Contexto/HomeTabsContext';

const Home = ({onAction}) => {

  const { setHomeData } = useContext(HomeTabsContext);

  const handleClick = () => {
    const data = true;
    setHomeData(data);
  };

 
  return (
    <>
        
        <div className="  home-container  container is-fluid 
       p-0 
       lg:h-[75vh] md:h-[65vh] sm:h-[60vh] xs:h-[60vh]
       
        ">


      {/* Aqui em criei uma div que vai conter as duas colunas onde fica na esquerda uma foto e na direita fica textos */}
      <div className=" home-itens 
      xl:w-[45vw] w-[65vw]
      flex 
      xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col      
      lg:items-center md:items-center sm:items-center items-center gap-4  
   
      ">

          {/* div para armazenar a foto */}
          
          <img src={avatar} className='
          xl:w-50 lg:w-60 md:w-40 sm:w-30 w-[30vw] 

           rounded-2xl' alt="Avatar"/>
         

          {/* div para as informações */}
          <div className="home-text  md:w-40 flex
          xl:flex-col lg:flex-col md:flex-col sm:flex-col xs:flex-col 
          ">
            <button className='available text-xs flex flex-row 
            whitespace-no-wrap  xl:self-start lg:self-start md:self-start sm:self-start xs:self-center
            xl:w-[7vw] lg:w-[10vw] md:w-[15vw] sm:w-[20vw] xs:w-[30vw]
            
               '>
          
          <div className="icon"><FontAwesomeIcon icon={faCircle} style={{ color: '#23ce99', fontSize: '8px',}} /></div> 
          <div className='text  self-center'>Disponível</div>
     
             </button>

             <h2 className='xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-xl 
              
             xl:text-left lg:text-left md:text-left sm:text-left xs:text-center
             text-white font-bold mt-2 whitespace-nowrap'>
           Full-Stack <br/> Developer & Designer.
            </h2>

            <p className=' mt-2 text-4sm text-white             
            whitespace-normal 
            xl:w-[30vw] lg:w-[40vw] md:w-[50vw] sm:w-[53vw] xs:w-[80vw] 
             xl:text-left lg:text-left md:text-left sm:text-left xs:text-center
            '>Minha missão é criar sites e sistemas que unam visual impactante com alta funcionalidade.</p>
            <button onClick={handleClick} className='mt-4 bg-verde hover:bg-verde-shadow text-black font-bold py-2 px-2 rounded 
           xl:w-[20vw] lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[40vw] whitespace-normal
           xl:self-start lg:self-start md:self-start sm:self-start xs:self-center
        
           '>Vamos conversar</button>
          </div>  

      </div> 
     
            
         
        </div>

    </>
  )
}

export default Home