import "./projects.scss"
import ProjectMockup from "../assets/ProjectMockup"
import {getProject} from "../assets/texts"
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Projects = () => {

 
  return (
    <div className="projects-cont">

  <h1 className="categories">projetos</h1>

        <div className="mockups">

      <div className="slider"> 

        <Swiper
          slidesPerView={2}
      
          navigation={true}
          loop={true}
          spaceBetween={0}
          modules={[Navigation]}
        >
          {getProject.map((item) => (
            <SwiperSlide key={item.id}>
              <ProjectMockup stack={item.stack} img={item.img} desc={item.projeto} />
             
            </SwiperSlide>
          ))}
        </Swiper>

        </div>
        </div>
        
       
     
    </div>
  )
}

export default Projects