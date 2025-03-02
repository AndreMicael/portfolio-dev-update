import "./projects.scss";
import ProjectMockup from "../assets/ProjectMockup";
import { getProject } from "../assets/texts";

const Projects = () => {
  return (
    <div className="projects-cont p-4 md:p-8">
      <div className="mockups">
        <div className="slider  flex flex-col gap-8">
          {getProject.map((project) => (
            <ProjectMockup key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
