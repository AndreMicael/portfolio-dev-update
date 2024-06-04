import "./about.scss";
import Avatar from "../assets/avatar.png";

const About = () => {
  return (
    <div className="categories-container  min-w-fit">
       <h1 className="categories">quem sou eu?</h1>
       <div className="about-text-container
      
       container">
        <p className="text-about-me">
        Desde criança me destaco pela criatividade, e hoje, busco usar esse talento para trazer 
        soluções e ideias ao mundo, utilizando as mais diversas ferramentas. 
       <br/> <br/>
         <p className="text-about-me">Assim que ingressei na <strong>Universidade Federal de Mato Grosso</strong>, no curso de <strong>Sistemas de Informação</strong>, 
         comecei minha busca por aperfeiçoamento das minhas habilidades e aprendendi novas tecnologias para, enfim, realizar meu 
         sonho de materializar ideias no mundo real.</p>
         <br/>
         <p className="text-about-me">No momento criativo, gosto de usar o principio KISS (Keep it Short and Simple), onde viso criar 
         interfaces e ambientes focados na <strong>simplicidade e usabilidade</strong>. O segredo é evitar complexidades desnecessárias,
          mas nunca ter medo delas. </p>
          <br/>
          <p className="text-about-me">Gosto de encarar cada desafio como uma oportunidade de <strong>crescimento e inovação</strong>, sempre buscando a melhor forma de transformar 
          conceitos em realidades funcionais e impactantes.</p></p>
           
        <img className="profile" src={Avatar} alt="Foto de Perfil" /> 

       </div>
    </div>
  )
}

export default About