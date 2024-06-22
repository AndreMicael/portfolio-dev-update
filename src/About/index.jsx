import "./about.scss";

import { Tabs  } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";



import { FaProjectDiagram, FaTools  } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

import Skills from "../Skills"
import Projects from "../Projects"
import Contact from "../Contact"



const About = () => {
  return (
    <div className="container">
       {/* <h1 className="categories">quem sou eu?</h1>
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

       </div> */}



<Tabs aria-label="Tabs with icons" variant="underline">
      <Tabs.Item active title="Sobre mim" icon={HiUserCircle}>
      
      <div className="tab-content"> 

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

      </div>
      

      </Tabs.Item>
      <Tabs.Item title="Habilidades" icon={FaTools}>
        
        <Skills/>

      </Tabs.Item>
      <Tabs.Item title="Projetos" icon={FaProjectDiagram}>
       
       <Projects/>

      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={MdMarkEmailUnread}>
       
       <Contact/>
       

      </Tabs.Item>
      {/* <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item> */}
    </Tabs>

   





       
    </div>
  )
}

export default About