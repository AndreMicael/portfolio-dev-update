import "./about.scss";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact,FaGithub } from "react-icons/fa";
import { RiTailwindCssFill,RiJavaLine } from "react-icons/ri";
import { BiLogoPostgresql,BiLogoSpringBoot } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { SiAdobeillustrator,SiAdobephotoshop,SiBlender  } from "react-icons/si";

import { GiRhinocerosHorn } from "react-icons/gi";
import Portuguese from "../assets/emojis/brasil.png";
import English from "../assets/emojis/usa.png";
import { FaSquareBehance } from "react-icons/fa6";


const About = () => {
  return (
    <div className="about-container container 
    grid grid-flow-row lg:grid-flow-col gap-4
     ">
    
       <div className=" text-about 
        whitespace-normal text-lg
       ">
         <h3 className="mb-5">Quem sou eu</h3>
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
       <div className="skill">
        <h4 >Front-End</h4>
           <div className="item"><div className="icon"><TiHtml5 /></div><p>HMTL5</p></div>
           <div className="item"><div className="icon"><IoLogoCss3 /></div><p>CSS3</p></div>
           <div className="item"><div className="icon"><IoLogoJavascript /></div><p>Javascript</p></div>
           <div className="item"><div className="icon"><FaReact /></div><p>React JS</p></div>
           <div className="item"><div className="icon"><RiTailwindCssFill /></div><p>Tailwind</p></div>
         
       </div>

       <div className="skill">
        <h4>Back-End</h4>
        <div className="item"><div className="icon"><RiJavaLine /></div><p>Java</p></div>
        <div className="item"><div className="icon"><BiLogoSpringBoot /></div><p>Spring Boot</p></div>
        <div className="item"><div className="icon"><BiLogoPostgresql /></div><p>Postgres</p></div>
        </div>

        <div className="skill">
        <h4>Design</h4>
        <div className="item"><div className="icon"><FiFigma /></div><p>Figma</p></div>
        <div className="item"><div className="icon"><SiAdobeillustrator /></div><p>Illustrator</p></div>
        <div className="item"><div className="icon"><SiAdobephotoshop /></div><p>Photoshop</p></div>
        <div className="item"><div className="icon"><SiBlender /></div><p>Blender</p></div>
        <div className="item"><div className="icon"><GiRhinocerosHorn /></div><p>Rhinoceros</p></div>
       
        </div>
        </div>
        <div className="container lang">
         
         <h4>Idiomas</h4>
         <div className="">
         <div className="item flex gap-2 items-baseline "><div className="icon self-start"><img src={English} alt="Inglês" /></div><p>Inglês</p><h6>Speaking, Listening e Writing Avançado</h6></div>
         <div className="item flex gap-2 items-baseline "><div className="icon self-start"><img src={Portuguese} alt="Portugues" /></div><p>Português</p><h6>Nativo</h6></div>
         </div>
         </div>

         <div className="container ports">
            <h4>Repositórios</h4>
         <div className="item  mb-3 flex gap-2 items-baseline"><div className="icon self-start"><FaGithub /></div> <p>GitHub</p> </div>
         <div className="item  gap-2 flex flexitems-baseline"><div className="icon self-start"><FaSquareBehance /></div><p>Behance</p></div>
       </div>
       </div>

     

     

 

       
    </div>
  )
}

export default About