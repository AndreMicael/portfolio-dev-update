import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { FiExternalLink, FiCalendar, FiLayers } from "react-icons/fi";
import "./projectDetail.scss";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL_IMAGEM);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.data.length === 0) {
          throw new Error("Project not found");
        }
        setProject(data.data[0]);
        localStorage.setItem(`project_${slug}`, JSON.stringify(data.data[0]));
      } catch (error) {
        console.error("Error fetching project:", error);
        setError(error.message);
      }
    };

    const cachedProject = localStorage.getItem(`project_${slug}`);
    if (cachedProject) {
      try {
        setProject(JSON.parse(cachedProject));
      } catch (error) {
        console.error("Error parsing cached project:", error);
        fetchProject();
      }
    } else {
      fetchProject();
    }

    // Clear cache on page reload
    const handleBeforeUnload = () => {
      localStorage.removeItem(`project_${slug}`);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 max-w-md w-full">
          <h2 className="text-xl font-bold text-verde mb-2">Erro</h2>
          <p className="text-gray-300">{error}</p>
          <Link
            to="/projetos"
            className="mt-4 inline-flex items-center gap-2 text-verde hover:text-verde-shadow transition-colors"
          >
            <TbArrowBackUp className="text-xl" />
            <span>Voltar aos projetos</span>
          </Link>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="flex space-x-2">
          <div className="h-4 w-4 bg-verde rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-4 w-4 bg-verde rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-4 w-4 bg-verde rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header - Compacto no mobile */}
      <div className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/projetos"
            className="flex items-center gap-2 text-verde hover:text-verde-shadow transition-colors"
          >
            <TbArrowBackUp className="text-xl" />
            <span className="text-sm font-medium hidden sm:inline">
              Voltar aos projetos
            </span>
          </Link>
          <h1 className="text-lg font-semibold text-white truncate max-w-[200px] sm:max-w-none">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Project Hero - Mais compacto no mobile */}
      <div className="pt-20 sm:pt-24 pb-4 sm:pb-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-8">
            {project.frontend.map((frontend, index) => (
              <div
                key={index}
                className="px-2 py-0.5 sm:px-3 sm:py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs sm:text-sm text-verde"
              >
                {frontend}
              </div>
            ))}
            {project.backend.map((backend, index) => (
              <div
                key={index}
                className="px-2 py-0.5 sm:px-3 sm:py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs sm:text-sm text-verde"
              >
                {backend}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Content - Reorganizado para mobile */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-12">
        {/* Imagem em destaque - Full width em mobile */}
        <div className="bg-slate-800 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700 shadow-xl mb-6 sm:mb-8">
          <img
            src={project.image.url}
            alt={project.title}
            className="w-full aspect-video object-cover"
            loading="lazy"
          />
        </div>

        {/* Nova estrutura: colocamos todo o conteúdo numa coluna em mobile e apenas no desktop temos o layout lateral */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Sobre o projeto - Full width em mobile para melhor leitura */}
          <div className="w-full lg:col-span-2 order-1">
            <div className="bg-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-700 shadow-lg mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-verde mb-3 sm:mb-4">
                Sobre o projeto
              </h2>
              {/* Aumentamos tamanho de fonte e espaçamento para melhor leitura em mobile */}
              <div className="text-gray-300 leading-relaxed prose prose-sm sm:prose lg:prose-lg max-w-none prose-headings:text-verde prose-a:text-verde prose-p:text-gray-300 prose-strong:text-white markdown-content">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                >
                  {project.description}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          {/* Sidebar com informações - Também em full width em mobile */}
          <div className="w-full lg:col-span-1 order-2">
            {/* Links e detalhes - Design mais respirado em mobile */}
            <div className="bg-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-700 shadow-lg mb-6">
              {/* Botão de ver site em destaque */}
              <div className="mb-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-verde hover:bg-verde/90 text-slate-900 font-semibold py-3 sm:py-4 px-4 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <FiExternalLink className="text-lg" />
                  Ver Site
                </a>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-verde mb-4 sm:mb-5">
                Detalhes
              </h3>

              {/* Layout em cards mais fáceis de tocar em mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
                <div className="flex items-center gap-3 bg-slate-700/30 p-3 rounded-lg">
                  <FiCalendar className="text-verde flex-shrink-0 text-xl" />
                  <div>
                    <p className="text-xs text-gray-400">Data do projeto</p>
                    <p className="text-sm sm:text-base text-white font-medium">
                      {project.ano}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-700/30 p-3 rounded-lg">
                  <FiLayers className="text-verde flex-shrink-0 text-xl" />
                  <div>
                    <p className="text-xs text-gray-400">Tipo</p>
                    <p className="text-sm sm:text-base text-white font-medium">
                      {project.tipo}
                    </p>
                  </div>
                </div>
              </div>

              {/* GitHub link, if enabled */}
              {/* {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-transparent hover:bg-slate-700 text-white border border-slate-600 font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  <FiGithub />
                  Ver código fonte
                </a>
              )} */}
            </div>

            {/* Tecnologias - Visual melhorado para mobile */}
            <div className="bg-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-700 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-verde mb-4 sm:mb-5">
                Tecnologias
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-white mb-3 inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-verde"></span>
                    Front-end
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.frontend.map((frontend, index) => (
                      <div
                        key={index}
                        className="py-2 px-3 border border-slate-700 rounded-lg hover:border-verde hover:bg-slate-700 transition-colors text-center text-sm"
                      >
                        {frontend}
                      </div>
                    ))}
                  </div>
                </div>

                {project.backend && project.backend.length > 0 && (
                  <div>
                    <h4 className="text-base font-medium text-white mb-3 inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-verde"></span>
                      Back-end
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.backend.map((backend, index) => (
                        <div
                          key={index}
                          className="py-2 px-3 border border-slate-700 rounded-lg hover:border-verde hover:bg-slate-700 transition-colors text-center text-sm"
                        >
                          {backend}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
