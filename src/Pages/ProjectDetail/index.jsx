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
        const response = await fetch(
          `https://new-folio-production.up.railway.app/api/projetos?filters[slug][$eq]=${slug}&populate=image`
        );
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

    return () => {};
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 max-w-md">
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
      {/* Header */}
      <div className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/projetos"
            className="flex items-center gap-2 text-verde hover:text-verde-shadow transition-colors"
          >
            <TbArrowBackUp className="text-xl" />
            <span className="text-sm font-medium">Voltar aos projetos</span>
          </Link>
          <h1 className="text-lg font-semibold text-white">{project.title}</h1>
        </div>
      </div>

      {/* Project Hero */}
      <div className="pt-24 pb-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.frontend.map((frontend, index) => (
              <div
                key={index}
                className="px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-sm text-verde"
              >
                {frontend}
              </div>
            ))}
            {project.backend.map((backend, index) => (
              <div
                key={index}
                className="px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-sm text-verde"
              >
                {backend}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl mb-8">
              <img
                src={project.image.url}
                alt={project.title}
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg">
              <h2 className="text-2xl font-bold text-verde mb-4">
                Sobre o projeto
              </h2>
              <div className="text-gray-300 leading-relaxed markdown-content">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                >
                  {project.description}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-verde mb-4">Detalhes</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiCalendar className="text-verde" />
                  <div>
                    <p className="text-sm text-gray-400">Data do projeto</p>
                    <p className="text-white">{project.ano}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FiLayers className="text-verde" />
                  <div>
                    <p className="text-sm text-gray-400">Tipo</p>
                    <p className="text-white">{project.tipo}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-verde hover:bg-verde/90 text-slate-900 font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  <FiExternalLink />
                  Ver Site
                </a>

                {/* <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-transparent hover:bg-slate-700 text-white border border-slate-600 font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  <FiGithub />
                  Ver código fonte
                </a> */}
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg">
              <h3 className="text-xl font-bold text-verde mb-4">Front-end</h3>
              <div className="flex flex-wrap gap-2">
                {project.frontend.map((frontend, index) => (
                  <div
                    key={index}
                    className="p-3 border border-slate-700 rounded-lg hover:border-verde hover:bg-slate-700 transition-colors text-center flex-grow"
                  >
                    {frontend}
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold mt-4 text-verde mb-4">
                Back-end
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.backend.map((backend, index) => (
                  <div
                    key={index}
                    className="p-3 border border-slate-700 rounded-lg hover:border-verde hover:bg-slate-700 transition-colors text-center flex-grow"
                  >
                    {backend}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
