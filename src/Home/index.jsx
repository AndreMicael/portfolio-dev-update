import './home.scss';
import avatar from '../assets/avatar.png'


const Home = () => {

  

 
  return (
    <>
        
        <div className="home-container min-w-fit container is-fluid">


      {/* Aqui em criei uma div que vai conter as duas colunas onde fica na esquerda uma foto e na direita fica textos */}
      <div className="home-itens grid">

          {/* div para armazenar a foto */}
          <div className="home-img w-60">
          <img src={avatar} className='rounded-2xl' alt="Avatar"/>
          </div>

          {/* div para as informações */}
          <div className="home-text dashed">
            <button>Disponível</button>
            <h2 className='text-4xl text-white '>FullStack <br/> Developer & Designer</h2>
            <p>I design and develop smart solutions always paying attention to details.</p>
            <button className='bg-verde hover:bg-verde-shadow text-black font-bold py-2 px-4 rounded'>Let's chat</button>
          </div>  

      </div> 
     
            
         
        </div>

    </>
  )
}

export default Home