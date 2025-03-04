import "./projects.scss";
// import ProjectMockup from "../../assets/ProjectMockup";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid"); // grid or list view

  const fetchProjects = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProjects(data.data);
      localStorage.setItem("projects", JSON.stringify(data.data));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    const cachedProjects = localStorage.getItem("projects");
    if (cachedProjects) {
      try {
        setProjects(JSON.parse(cachedProjects));
        setLoading(false);
      } catch (error) {
        console.error("Error parsing cached projects:", error);
        fetchProjects();
      }
    } else {
      fetchProjects();
    }

    // Clear cache on page reload
    const handleBeforeUnload = () => {
      localStorage.removeItem("projects");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-verde hover:text-verde-shadow transition-colors"
          >
            <TbArrowBackUp className="text-xl" />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <h1 className="text-lg font-semibold text-white">Projetos</h1>
        </div>
      </div>

      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <div className="flex space-x-2 justify-center items-center">
            <div className="h-4 w-4 bg-verde rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 bg-verde rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-4 w-4 bg-verde rounded-full animate-bounce"></div>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <div className="pt-24 pb-8 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                Meus Projetos
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
                Uma seleção dos meus trabalhos em desenvolvimento front-end,
                back-end e design.
              </p>

              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-white flex items-center gap-2 transition-colors">
                    <FiFilter size={16} className="text-verde" />
                    <span>Filtrar</span>
                  </button>

                  <div className="flex rounded-lg overflow-hidden border border-slate-700">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 flex items-center justify-center ${
                        viewMode === "grid"
                          ? "bg-verde text-slate-900"
                          : "bg-slate-800 text-white hover:bg-slate-700"
                      }`}
                    >
                      <FiGrid size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 flex items-center justify-center ${
                        viewMode === "list"
                          ? "bg-verde text-slate-900"
                          : "bg-slate-800 text-white hover:bg-slate-700"
                      }`}
                    >
                      <FiList size={16} />
                    </button>
                  </div>
                </div>

                <div className="text-sm text-gray-400">
                  {projects.length} projetos encontrados
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="max-w-7xl mx-auto px-4 py-12">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Link
                    to={`/projetos/${project.slug}`}
                    key={project.id}
                    className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-verde transition-all duration-300 shadow-lg hover:shadow-verde/10"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image.url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-verde transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.stacks.slice(0, 3).map((stack, index) => (
                          <div
                            key={index}
                            className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-verde"
                          >
                            {stack}
                          </div>
                        ))}
                        {project.stacks.length > 3 && (
                          <div className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-verde">
                            +{project.stacks.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {projects.map((project) => (
                  <Link
                    to={`/projetos/${project.slug}`}
                    key={project.id}
                    className="group flex flex-col md:flex-row gap-6 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-verde transition-all duration-300 shadow-lg hover:shadow-verde/10 p-5"
                  >
                    <div className="w-full md:w-1/4 h-48 md:h-auto overflow-hidden rounded-xl">
                      <img
                        src={project.image.url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="w-full md:w-3/4 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-verde transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.stacks.map((stack, index) => (
                          <div
                            key={index}
                            className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-verde"
                          >
                            {stack}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
