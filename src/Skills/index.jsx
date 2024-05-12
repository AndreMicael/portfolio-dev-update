import "./skills.scss";


const Skills = () => {
  return (
    <div className="categories-container">
    
      <h1 className="categories">skills</h1>
    
      <div className="icons-skills">
        
       <div className="icon-sk"><i className="fab fa-html5"> </i> <p>html5</p> </div> 
        <div className="icon-sk"><i className="fab fa-css3-alt"> </i> <p>css3</p></div>
        <div className="icon-sk"><i className="fab fa-js-square">  </i> <p>javascript</p> </div>       
        <div className="icon-sk"><i className="fab fa-react"> </i> <p>react</p>  </div>  
        <div className="icon-sk"><i className="fab fa-github">  </i> <p>github</p>   </div>       
        <div className="icon-sk"><i className="fab fa-sass">  </i><p>sass</p></div> 
        <div className="icon-sk"><i className="fab fa-figma"> </i> <p>figma</p></div> 
       <div className="icon-sk"> <i className="fa-solid fa-palette"> </i> <p>ui/ux</p></div> 
    
        
      </div>
    </div>
  )
}

export default Skills