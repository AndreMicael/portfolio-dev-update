import React, { useState } from 'react'; // Importando corretamente o hook useState
import './navbar.scss';

const Navbar = ({action}) => {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };



  return (
    <div>
      <nav className={`${action ?'navbar-active':'navbar'} is-transparent`} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://localhost:3000/">
          <p>André<span className="green-style">.dev</span></p></a>

      {/* Menu hamburger
      Foi colocada uma função handleBurgerClick 
      para fazer o menu hamburguer funcionar. 
      
      Quando ativo, o hamburger vira um X e o menu é exibido.
      */}
          <span 
            role="button"
            onClick={handleBurgerClick}
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
         
            

            
          </span>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active absoluto' : ''}`}>
          <div className="navbar-start">
            <a href="http://" className="navbar-item">Home</a>
            <a href="http://" className="navbar-item">Sobre</a>
            <a href="http://" className="navbar-item">Habilidades</a>
            <a href="http://" className="navbar-item">Projetos</a>
            <a href="http://" className="navbar-item">Contato</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
