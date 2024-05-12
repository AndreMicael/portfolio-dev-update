import './home.scss';
import Button from '../components/button'
import github from '../assets/github.svg'
import resume from '../assets/resume.svg'

const Home = () => {
  return (
    <>
        
        <div className="container is-fluid">
            <div className='home-title'>
            <h3>Prazer, me chamo André</h3>
            <h2>Sou desenvolvedor</h2><h2 className='typewritter'>front-end.</h2>
            <div className='botoes'>
            <Button icon={github} alt="Veja no GitHub" text="GitHub"/>
            <Button icon={resume} alt="Download currículo" text="Currículo"/>
            </div>
     
            
            </div>
        </div>

    </>
  )
}

export default Home