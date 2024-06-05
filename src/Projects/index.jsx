import "./projects.scss"
import ProjectMockup from "../assets/ProjectMockup"
// import {  useState } from 'react';

import {getProject} from "../assets/texts"


import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





const Projects = () => {

 

// const [show,setShow] = useState(false);
// const [showText,setShowText] = useState(<i class="fa-solid fa-plus"></i>);
// const [space,setSpace] = useState(false);

// const handleShow = () => {

//   setShow(!show);
//   setShowText(show ? <i class="fa-solid fa-plus"></i>: <i class="fa-solid fa-minus"></i>);
//   setSpace(!space);

// }



  return (
    <div className="">

  <h1 className="categories">projetos</h1>

        <div className="mockups">

      <div className="slider"> 

        <Swiper
          slidesPerView={1.2}
      
          navigation={true}
          loop={true}
          spaceBetween={40}
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