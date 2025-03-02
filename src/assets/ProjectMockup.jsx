import "../Projects/projects.scss";

//Importação dos ícones utilizados
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";

const ProjectMockup = ({ project }) => {
  const { titulo, desc, img, stack, link, github } = project;

  return (
    <div className="border-b-2 pb-8 border-slate-600">
      <div className="flex flex-col md:flex-row gap-4 mockup overflow-hidden md:p-0  p-4">
        {/* Container da imagem com proporção 16:9 */}
        <div
          className="relative border-[2px] border-slate-600  
          xs:h-[50vw] lg:h-[18vw] w-full
     
     md:w-2/4 rounded-3xl overflow-hidden"
        >
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={img}
            alt={desc}
          />
        </div>

        {/* Descrição do Projeto */}
        <div className="flex flex-col justify-between md:w-2/4   xs:px-0 xl:px-4">
          <div className="flex flex-col">
            <p className="text-xl  md:text-2xl text-verde font-semibold">
              {titulo}
            </p>
            <div className="project-desc p-0 text-sm md:text-base mt-2">
              {desc}
            </div>
          </div>
        </div>
      </div>

      {/* Tecnologias utilizadas - Mover para baixo da imagem */}
      <div className="mt-4 w-full">
        <div className="flex flex-wrap gap-2 justify-start pl-4">
          {stack.map((icon, index) => (
            <div
              key={index}
              className="p-2 border-2 border-gray-300 rounded-3xl hover:bg-gray-800"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Botões */}
      <div className="flex justify-center gap-4 mt-4">
        <a href={link} target="blank" rel="noopener noreferrer">
          <button className="botao-projeto px-4 py-2 rounded-3xl flex gap-2 items-center hover:bg-gray-700">
            <TbWorld className="text-lg text-cyan-500" />
            <span className="text-sm text-gray-400">Demo</span>
          </button>
        </a>
        <a href={github} target="blank" rel="noopener noreferrer">
          <button className="botao-projeto px-4 py-2 rounded-3xl flex gap-2 items-center hover:bg-gray-700">
            <FaGithub className="text-lg text-purple-500" />
            <span className="text-sm text-gray-400">GitHub</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectMockup;
