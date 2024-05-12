
import './button.scss';
import React, { useState } from 'react';

const Button = ({icon , text}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div>
         <button
      className={`button button-mockup icon-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}>
       <span className='icon'>{icon}</span>
          <p>{text}</p> 
    </button>
       
              
    
    </div>
  )
}

export default Button