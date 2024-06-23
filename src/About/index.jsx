import "./about.scss";


const About = () => {
  return (
    <div className="about-container container grid ">
    
       <div className=" text-about 
        whitespace-normal text-lg
       ">
        <p>
        Desde criança me destaco pela criatividade, e hoje, busco usar esse talento para trazer 
        soluções e ideias ao mundo, utilizando as mais diversas ferramentas. </p>
      
         <p>Assim que ingressei na <strong>Universidade Federal de Mato Grosso</strong>, no curso de <strong>Sistemas de Informação</strong>, 
         comecei minha busca por aperfeiçoamento das minhas habilidades e aprendendi novas tecnologias para, enfim, realizar meu 
         sonho de materializar ideias no mundo real.</p>        
         <p>No momento criativo, gosto de usar o principio KISS (Keep it Short and Simple), onde viso criar 
         interfaces e ambientes focados na <strong>simplicidade e usabilidade</strong>. O segredo é evitar complexidades desnecessárias,
          mas nunca ter medo delas. </p>        
          <p>Gosto de encarar cada desafio como uma oportunidade de <strong>crescimento e inovação</strong>, sempre buscando a melhor forma de transformar 
          conceitos em realidades funcionais e impactantes.</p>
           
      

       </div> 

       <div className="container  px-10"> 

        <h3 className="mb-5">Minhas Habilidades</h3>
        <div className="grid">
       <div>
        <h4>Front-End</h4>
           <div>HMTL5</div>
           <div>CSS3</div>
           <div>Javascript</div>
           <div>React JS</div>
           <div>Tailwind</div>
         
       </div>

       <div>
        <h4>Back-End</h4>
           <div>Java</div>
           <div>Spring Boot</div>
           <div>Postgres</div>
        </div>

        <div>
        <h4>Design</h4>
           <div>Figma</div>
           <div>Illustrator</div>
           <div>Photoshop</div>
           <div>Blender</div>
           <div>Rhinoceros</div>
           <div>Edição de Vídeo</div>
        </div>
        </div>

       </div>



 

       
    </div>
  )
}

export default About