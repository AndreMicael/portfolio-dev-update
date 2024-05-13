
import "../Projects/projects.scss";
import Button from "../components/button"
import GitIcon from "../assets/GitIcon"
import WebIcon from "../assets/WebIcon"

const ProjectMockup = ({desc,img,stack}) => {
  return (
    <div>
        <div className="projetos-container">
            <div className="project-img"> <img src={img} /> </div>
            <div className="project-desc"> {desc}  </div>
        </div>
        <div className="stacks"><p>TECNOLOGIAS USADAS:</p>
        <p className="tecnologias"> {stack}</p> </div>
        <div className="project-buttons">
          <Button icon={ <WebIcon/> }text="<demo>" />
          <Button icon={<GitIcon/>} text="<código>" />
        </div>
    </div>
  )
}

export default ProjectMockup