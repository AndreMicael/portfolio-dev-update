import "../Projects/projects.scss";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";


const ProjectMockup = ({ project }) => {
  const { titulo, desc, img, stack,link,github } = project;

  return (
    <div className="grid grid-cols-6 mockup ">
      <div className="container relative img-container rounded-2xl overflow-hidden h-[50vh] 
      
      xl:col-span-4 lg:col-span-3 md:col-span-6 sm:col-span-4 col-span-6 
     
      
      ">
        <img className='rounded-lg' src={img} alt={desc} />
      </div>

      <div className="col-span-2 text-justify flex flex-col gap-4
       xl:col-span-4 lg:col-span-3 md:col-span-6 sm:col-span-4 col-span-6
       xl: pl-8 lg:pl-8 sm:pl-0 md:pl-0 pl-0
      ">
        <p className="text-2xl text-verde font-semibold">{titulo}</p>
        <div className="project-desc text-sm2 sm:mt-[-5vw] md:mt-[-3vw]">{desc}</div>
        <div className="flex justify-center gap-5">
         <a href={link} target="blank"><button className="botao-projeto px-5 py-2 rounded-3xl flex gap-1 items-center hover:bg-gray-700">
            <div className="text-lg text-cyan-500"><TbWorld /></div>
            <p className="text-sm text-gray-400">Demo</p>
          </button></a> 
          <a href={github} target="blank"><button className="botao-projeto px-5 py-2 rounded-3xl flex gap-1 items-center hover:bg-gray-700">
            <div className="text-lg text-purple-500"><FaGithub /></div>
            <p className="text-sm text-gray-400">GitHub</p>
          </button></a> 
        </div>
      </div>

      <div className="col-span-6 mt-4 pb-6">
        <div className="text-2xl flex gap-2 justify-start ">
          {stack.map((icon, index) => (
            <div key={index} className="p-2 border-2 border-gray-300 rounded-3xl hover:bg-gray-800">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMockup;
