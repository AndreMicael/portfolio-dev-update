import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import "./projectDetail.scss";

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
        console.log("API response data:", data); // Log da resposta da API
        if (data.data.length === 0) {
          throw new Error("Project not found");
        }
        setProject(data.data[0]);
      } catch (error) {
        console.error("Error fetching project:", error); // Log do erro
        setError(error.message);
      }
    };

    fetchProject();
  }, [slug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!project) {
    return <div>Carregando...</div>;
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
          <h1 className="text-lg font-semibold text-white">{project.title}</h1>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
          <div className="relative mt-24 flex flex-row justify-center aspect-video overflow-hidden">
            <img
              quality="100"
              src={project.image.url}
              alt={project.title}
              className="rounded-2xl border-[1.5px] p-3 border-slate-600 object-cover"
              loading="lazy"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-verde mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stacks.map((stack, index) => (
                <div
                  key={index}
                  className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors"
                >
                  {stack}
                </div>
              ))}
            </div>
            <a target="_blank" rel="noreferrer" href={project.link}>
              <button className="bg-verde hover:bg-opacity-0 hover:outline hover:outline-[1.5px] hover:text-white px-3 py-1 rounded-full text-preto">
                Ver Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
