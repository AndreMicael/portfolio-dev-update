import "./projects.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid"); // grid or list view
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    frontend: [],
    backend: [],
  });

  // Calculando projetos filtrados baseados nos filtros selecionados
  const filteredProjects = projects.filter((project) => {
    // Se não há filtros, mostre todos os projetos
    if (filters.frontend.length === 0 && filters.backend.length === 0) {
      return true;
    }

    // Verificar se o projeto contém pelo menos uma tecnologia de frontend selecionada
    const matchesFrontend =
      filters.frontend.length === 0 ||
      filters.frontend.some((tech) => project.frontend.includes(tech));

    // Verificar se o projeto contém pelo menos uma tecnologia de backend selecionada
    const matchesBackend =
      filters.backend.length === 0 ||
      filters.backend.some(
        (tech) => project.backend && project.backend.includes(tech)
      );

    // Projeto deve corresponder a ambos os filtros (se definidos)
    return matchesFrontend && matchesBackend;
  });

  // Função para alternar filtros
  const toggleFilter = (type, tech) => {
    setFilters((prevFilters) => {
      const currentFilters = [...prevFilters[type]];

      if (currentFilters.includes(tech)) {
        // Remover filtro
        return {
          ...prevFilters,
          [type]: currentFilters.filter((item) => item !== tech),
        };
      } else {
        // Adicionar filtro
        return {
          ...prevFilters,
          [type]: [...currentFilters, tech],
        };
      }
    });
  };

  // Função para limpar todos os filtros
  const clearFilters = () => {
    setFilters({
      frontend: [],
      backend: [],
    });
  };

  // Função para fechar o dropdown de filtros ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showFilters && !event.target.closest(".filter-dropdown")) {
        setShowFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilters]);

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
                  {/* Filter dropdown */}
                  <div className="relative filter-dropdown">
                    <button
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-white flex items-center gap-2 transition-colors"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <FiFilter
                        size={16}
                        className={
                          filters.frontend.length > 0 ||
                          filters.backend.length > 0
                            ? "text-verde"
                            : "text-gray-400"
                        }
                      />
                      <span>
                        {filters.frontend.length > 0 ||
                        filters.backend.length > 0
                          ? `Filtros (${
                              filters.frontend.length + filters.backend.length
                            })`
                          : "Filtrar"}
                      </span>
                    </button>

                    {showFilters && (
                      <div className="absolute mt-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-10 p-4">
                        <div className="mb-4">
                          <h3 className="text-white font-medium mb-2">
                            Frontend
                          </h3>
                          <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto">
                            {[
                              ...new Set(projects.flatMap((p) => p.frontend)),
                            ].map((tech) => (
                              <button
                                key={tech}
                                onClick={() => toggleFilter("frontend", tech)}
                                className={`px-2 py-1 rounded-full text-xs 
                                ${
                                  filters.frontend.includes(tech)
                                    ? "bg-verde text-slate-900 font-medium"
                                    : "bg-slate-700/50 text-white hover:bg-slate-700"
                                }`}
                              >
                                {tech}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-white font-medium mb-2">
                            Backend
                          </h3>
                          <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto">
                            {[
                              ...new Set(
                                projects.flatMap((p) => p.backend || [])
                              ),
                            ].map((tech) => (
                              <button
                                key={tech}
                                onClick={() => toggleFilter("backend", tech)}
                                className={`px-2 py-1 rounded-full text-xs 
                                ${
                                  filters.backend.includes(tech)
                                    ? "bg-verde text-slate-900 font-medium"
                                    : "bg-slate-700/50 text-white hover:bg-slate-700"
                                }`}
                              >
                                {tech}
                              </button>
                            ))}
                          </div>
                        </div>

                        {(filters.frontend.length > 0 ||
                          filters.backend.length > 0) && (
                          <button
                            onClick={clearFilters}
                            className="mt-4 text-verde text-sm hover:underline w-full text-center py-1 border border-verde rounded-lg"
                          >
                            Limpar filtros
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex rounded-lg overflow-hidden border border-slate-700">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 flex items-center justify-center ${
                        viewMode === "grid"
                          ? "bg-verde text-slate-900"
                          : "bg-slate-800 text-white hover:bg-slate-700"
                      }`}
                      title="Visualização em grade"
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
                      title="Visualização em lista"
                    >
                      <FiList size={16} />
                    </button>
                  </div>
                </div>

                <div className="text-sm text-gray-400">
                  {filteredProjects.length} projetos encontrados
                </div>
              </div>
            </div>
          </div>

          {/* Projects Display */}
          <div className="max-w-7xl mx-auto px-4 py-12">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-verde text-5xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M9 16h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl text-white font-semibold mb-2">
                  Nenhum projeto encontrado
                </h3>
                <p className="text-gray-400 mb-6">
                  Tente ajustar os filtros para ver mais resultados.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-verde text-slate-900 font-medium rounded-lg hover:bg-verde/90 transition-colors"
                >
                  Limpar filtros
                </button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
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
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-verde transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        <ReactMarkdown
                          rehypePlugins={[rehypeRaw]}
                          remarkPlugins={[remarkGfm]}
                        >
                          {project.excerpt}
                        </ReactMarkdown>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.frontend.slice(0, 3).map((stack, index) => (
                          <div
                            key={index}
                            className={`px-2 py-1 rounded-full text-xs ${
                              filters.frontend.includes(stack)
                                ? "bg-verde text-slate-900"
                                : "bg-slate-700/50 text-verde"
                            }`}
                          >
                            {stack}
                          </div>
                        ))}
                        {project.frontend.length > 3 && (
                          <div className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-verde">
                            +{project.frontend.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProjects.map((project) => (
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
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full md:w-3/4 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-verde transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 flex-grow">
                        <ReactMarkdown
                          rehypePlugins={[rehypeRaw]}
                          remarkPlugins={[remarkGfm]}
                        >
                          {project.excerpt}
                        </ReactMarkdown>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.frontend.map((stack, index) => (
                          <div
                            key={`front-${index}`}
                            className={`px-2 py-1 rounded-full text-xs ${
                              filters.frontend.includes(stack)
                                ? "bg-verde text-slate-900"
                                : "bg-slate-700/50 text-verde"
                            }`}
                          >
                            {stack}
                          </div>
                        ))}
                        {project.backend &&
                          project.backend.map((stack, index) => (
                            <div
                              key={`back-${index}`}
                              className={`px-2 py-1 rounded-full text-xs ${
                                filters.backend.includes(stack)
                                  ? "bg-verde text-slate-900"
                                  : "bg-slate-700/50 text-green-300"
                              }`}
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
