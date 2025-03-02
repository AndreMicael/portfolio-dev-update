import { getProject } from "../../assets/texts";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="min-h-screen bg-preto">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-verde hover:text-verde-shadow transition-colors"
          >
            <TbArrowBackUp className="text-xl" />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <h1 className="text-lg font-semibold text-white">Meus Projetos</h1>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {getProject.map((project) => (
            <Link to={`/projetos/${project.id}`} key={project.id}>
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-transform hover:scale-[1.02]">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.titulo}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
