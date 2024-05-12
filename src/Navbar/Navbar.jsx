import React from 'react'

const Navbar = () => {
  return (
    <div>
        {/* Esta navbar terá Home, Quem Sou Eu, Habilidades, Projetos, Contato.
        Farei um menu hamburger para ajudar na responsividade. 
        No lugar do list style colocarei um simbolo de < > para cada item do menu.
        */}
        <nav className='navbar--container'>
            <ul>
            <li>Home</li>
            <li>Sobre mim</li>
            <li>Habilidades</li>
            <li>Projetos</li>
            <li>Contato</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar