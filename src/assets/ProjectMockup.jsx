import "../Projects/projects.scss";

const ProjectMockup = ({ project }) => {
  const { title, excerpt, description, stacks, image } = project;

  return (
    <div className="border-b-2 pb-8 border-slate-600">
      <div className="flex flex-col md:flex-row gap-4 mockup overflow-hidden md:p-0 p-4">
        {/* Container da imagem com proporção 16:9 */}
        <div className="relative border-[1.5px] border-slate-500 xs:h-[50vw] lg:h-[18vw] w-full md:w-2/4 rounded-3xl overflow-hidden">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={image.url}
            alt={description}
          />
        </div>

        {/* Descrição do Projeto */}
        <div className="flex flex-col justify-between md:w-2/4 xs:px-0 xl:px-4">
          <div className="flex flex-col">
            <p className="text-xl md:text-2xl text-verde font-semibold">
              {title}
            </p>
            <div className="project-desc p-0 text-sm md:text-base mt-2">
              {excerpt}
            </div>
          </div>
        </div>
      </div>

      {/* Tecnologias utilizadas */}
      <div className="mt-4 w-full">
        <div className="flex flex-wrap gap-2 justify-start pl-4">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="p-2 bg-slate-800  rounded-3xl hover:bg-gray-800"
            >
              {stack}
            </div>
          ))}
        </div>
      </div>

      {/* Botões */}
      <div className="flex justify-center gap-4 mt-4">
        <a href={project.github} target="blank" rel="noopener noreferrer">
          <button className="botao-projeto px-4 py-2 rounded-3xl flex gap-2 items-center hover:bg-gray-700">
            <span className="text-sm text-gray-400">+ Detalhes</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectMockup;
