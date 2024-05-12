import './home.scss';
import Button from '../components/button'
import GitIcon from '../assets/GitIcon'
import Resume from '../assets/Resume'


const Home = () => {

  

 
  return (
    <>
        
        <div className="home-container container is-fluid">
            <div className='home-title'>
            <h3>Prazer, me chamo André</h3>
            <h2>Sou desenvolvedor</h2><h2 className='typewritter'>front-end.</h2>
            <div className='botoes'>
            <Button icon={<GitIcon/>} text="GitHub"/>
            <Button icon={<Resume/>} text="Currículo"/>
            </div>
     
            
            </div>
        </div>

    </>
  )
}

export default Home