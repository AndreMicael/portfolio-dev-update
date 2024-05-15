import "./Footer.scss"

const Footer = () => {
  return (
    <div className='categories-container green-version'>
     
       <div className="footer-brand">André.dev</div>

       <div className="footer-menu">
       <ul>
        <li>Sobre Mim</li>
        <li>Habilidades</li>
        <li>Projetos</li>
        <li>Experiências</li>
        </ul> 

        <hr/>
        </div>
        <div className="footer-contact">

            <h1>Diga Olá!</h1>
            <p>andremicael@gmail.com</p>

            <div className="footer-social-media">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-square-behance"></i>
            </div>

        </div>

     
       
    </div>


  )
}

export default Footer