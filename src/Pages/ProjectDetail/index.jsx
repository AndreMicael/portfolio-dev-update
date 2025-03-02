import { useParams, Link } from "react-router-dom";
import { getProject } from "../../assets/texts";
import { TbArrowBackUp } from "react-icons/tb";
import "./projectDetail.scss";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProject.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-preto">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/projetos"
            className="flex items-center gap-2 text-verde hover:text-verde-shadow transition-colors"
          >
            <TbArrowBackUp className="text-xl" />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <h1 className="text-lg font-semibold text-white">{project.titulo}</h1>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.img}
              alt={project.titulo}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-verde mb-2">
              {project.titulo}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((icon, index) => (
                <div
                  key={index}
                  className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors"
                >
                  {icon}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full px-4 py-2 bg-verde hover:bg-verde-shadow text-black font-medium rounded-lg transition-colors">
                  Ver Demo
                </button>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full px-4 py-2 border border-verde text-verde hover:bg-verde hover:text-black font-medium rounded-lg transition-colors">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
