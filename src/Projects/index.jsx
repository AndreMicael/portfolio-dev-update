import "./projects.scss"
import ProjectMockup from "../assets/ProjectMockup"
import {getProject} from "../assets/texts"




const Projects = () => {

 
  return (
    <div className="projects-cont ">

        <div className="mockups">
        <div className="slider">      
        
        {getProject.map(project => (
      <ProjectMockup key={project.id} project={project} />
    ))}
       

        </div>
        </div>       
       
     
    </div>
  )
}

export default Projects