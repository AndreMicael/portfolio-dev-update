import "./projects.scss";
import ProjectMockup from "../../assets/ProjectMockup";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="projects-cont p-4 md:p-8">
      {window.location.pathname === "/projetos" && (
        <div className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center gap-2 text-verde hover:text-verde-shadow transition-colors"
            >
              <TbArrowBackUp className="text-xl" />
              <span className="text-sm font-medium">Voltar</span>
            </Link>
            <h1 className="text-lg font-semibold text-white">
              {projects.title}
            </h1>
          </div>
        </div>
      )}
      {loading ? (
        <div className="w-screen h-screen left-0 top-0 fixed z-50">
          <div className="flex space-x-2 justify-center bg-slate-900 items-center h-screen dark:invert">
            <div className="h-4 w-4 bg-verde rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 bg-verde rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-4 w-4 bg-verde rounded-full animate-bounce"></div>
          </div>
        </div>
      ) : (
        <div className="mockups mt-10">
          <div className="slider flex flex-col gap-8">
            {projects.map((project) => (
              <Link to={`/projetos/${project.slug}`} key={project.id}>
                <ProjectMockup project={project} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
