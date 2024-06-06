
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
        </div>
        <div className="stacks min-w-[20vw]"><p>TECNOLOGIAS USADAS:</p>
        <p className="tecnologias min-w-[20vw]"> {stack}</p> 
        </div>
        <div className="project-buttons">
          <Button icon={ <WebIcon/> }text="<demo>" />
          <Button icon={<GitIcon/>} text="<código>" />
        </div>
    </div>
  )
}

export default ProjectMockup