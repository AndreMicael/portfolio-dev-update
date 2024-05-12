import React, { useState } from 'react'; // Importando corretamente o hook useState
import './navbar.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
          André<span className="green-style">.dev</span>
          </a>

      {/* Menu hamburger
      Foi colocada uma função handleBurgerClick 
      para fazer o menu hamburguer funcionar. 
      
      Quando ativo, o hamburger vira um X e o menu é exibido.
      */}
          <a
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
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active absoluto' : ''}`}>
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Sobre</a>
            <a className="navbar-item">Habilidades</a>
            <a className="navbar-item">Projetos</a>
            <a className="navbar-item">Contato</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Currículo</strong>
                </a>
                <a className="button is-primary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
