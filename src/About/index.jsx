import { useState, useEffect } from "react";

import "./about.scss";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaGears } from "react-icons/fa6";

import { FaNodeJs } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
// import { BiLogoPostgresql,BiLogoSpringBoot } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { FaDatabase } from "react-icons/fa6";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBlender,
} from "react-icons/si";

import { GiRhinocerosHorn } from "react-icons/gi";
import Portuguese from "../assets/emojis/brasil.webp";
import English from "../assets/emojis/usa.webp";
import { FaSquareBehance } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";

const About = () => {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const response = await fetch(process.env.REACT_APP_API_URL_USUARIO);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    setAbout(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div
      className="about-container container 
      2xl:grid xl:grid 
      lg:flex lg:flex-col sm:flex-col md:flex-col
      
       "
    >
      <div
        className=" text-about 
          whitespace-normal  mb-5 
          xl:px-10 lg:px-10 sm:px-10 md:px-10 px-0
          xl:text-lglg:text-lg sm:text-lg md:text-lg text-sm
         "
      >
        <h3 className="mb-5">Quem sou eu</h3>
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <div>
            {about.map((item) => (
              <div key={item.id}>
                <ReactMarkdown>{item.sobre}</ReactMarkdown>
              </div>
            ))}{" "}
          </div>
        )}
      </div>

      <div className="container  xl:px-10 lg:px-10 sm:px-10 md:px-10 px-0">
        <h3 className="mb-5">Minhas Habilidades</h3>
        <div className="grid">
          <div className="skill">
            <h4>Front-End</h4>
            <div className="item">
              <div className="icon">
                <TiHtml5 />
              </div>
              <p>HTML5</p>
            </div>
            <div className="item">
              <div className="icon">
                <IoLogoCss3 />
              </div>
              <p>CSS3</p>
            </div>
            <div className="item">
              <div className="icon">
                <IoLogoJavascript />
              </div>
              <p>Javascript</p>
            </div>
            <div className="item">
              <div className="icon">
                <FaReact />
              </div>
              <p>React.js</p>
            </div>
            <div className="item">
              <div className="icon">
                <RiNextjsFill />
              </div>
              <p>Next.js</p>
            </div>
            <div className="item">
              <div className="icon">
                <FaGithub />
              </div>
              <p>GitHub</p>
            </div>
            <div className="item">
              <div className="icon">
                <RiTailwindCssFill />
              </div>
              <p>Tailwind</p>
            </div>
          </div>

          <div className="skill">
            <h4>Back-End</h4>
            <div className="item">
              <div className="icon">
                <FaNodeJs />
              </div>
              <p>Node.js</p>
            </div>
            <div className="item">
              <div className="icon">
                <FaDatabase />
              </div>
              <p>Banco de Dados</p>
            </div>
            <div className="item">
              <div className="icon">
                <SiPrisma />
              </div>
              <p>Prisma ORM</p>
            </div>
            <div className="item">
              <div className="icon">
                <FaGears />
              </div>
              <p>Rest API</p>
            </div>
          </div>

          <div className="skill">
            <h4>Design</h4>
            <div className="item">
              <div className="icon">
                <FiFigma />
              </div>
              <p>Figma</p>
            </div>
            <div className="item">
              <div className="icon">
                <SiAdobeillustrator />
              </div>
              <p>Illustrator</p>
            </div>
            <div className="item">
              <div className="icon">
                <SiAdobephotoshop />
              </div>
              <p>Photoshop</p>
            </div>
            <div className="item">
              <div className="icon">
                <SiBlender />
              </div>
              <p>Blender</p>
            </div>
            <div className="item">
              <div className="icon">
                <GiRhinocerosHorn />
              </div>
              <p>Rhinoceros</p>
            </div>
          </div>
        </div>
        <div
          className="flex 
          xl:flex-row lg:flex-row sm:flex-row md:flex-row flex-col gap-5
          "
        >
          <div className="container lang">
            <h4>Idiomas</h4>
            <div className="">
              <div className="item flex gap-2 items-baseline ">
                <div className="icon self-start">
                  <img src={English} alt="Inglês" />
                </div>
                <p>Inglês</p>
                <h6 className="">Speaking, Listening e Writing Avançado</h6>
              </div>
              <div className="item flex gap-2 items-baseline ">
                <div className="icon self-start">
                  <img src={Portuguese} alt="Portugues" />
                </div>
                <p>Português</p>
                <h6>Nativo</h6>
              </div>
            </div>
          </div>

          <div className="container ports">
            <h4>Repositórios</h4>
            <a href="https://github.com/AndreMicael" target="blank">
              <div className="item  mb-3 flex gap-2 items-baseline">
                <div className="icon text-purple-500 self-start">
                  <FaGithub />
                </div>{" "}
                <p className="text-cinza">GitHub</p>{" "}
                <p className="text-cinza hover:text-blue-500">
                  <FaExternalLinkAlt />{" "}
                </p>{" "}
              </div>
            </a>
            <a href="https://www.behance.net/andremicael" target="blank">
              {" "}
              <div className="item  mb-3 flex gap-2 items-baseline">
                <div className="icon text-blue-500 self-start">
                  <FaSquareBehance />
                </div>
                <p className="text-cinza">Behance</p>{" "}
                <p className="text-cinza hover:text-blue-500">
                  <FaExternalLinkAlt />{" "}
                </p>{" "}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
