
import "../Projects/projects.scss";
import Button from "../components/button"
import GitIcon from "../assets/GitIcon"
import WebIcon from "../assets/WebIcon"

const ProjectMockup = ({desc,img,stack}) => {
  return (
    <div className="">
        <div className="projetos-container  min-w-[20vw] container">
            <div className="project-img"> <img src={img} alt={desc}/> </div>
            <div className="project-desc"> {desc}  </div>
            <div className="min-w-[20vw] px-6"><p>TECNOLOGIAS USADAS: {stack}</p>
       
        </div>
        <div className="project-buttons">
          <Button icon={ <WebIcon/> }text="<demo>" />
          <Button icon={<GitIcon/>} text="<código>" />
        </div>
        </div>
        
    </div>
  )
}

export default ProjectMockup