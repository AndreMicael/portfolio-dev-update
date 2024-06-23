import { HiUserCircle } from "react-icons/hi";
import { FaProjectDiagram, FaTools  } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";


import Projects from "../../Projects";
import Contact from "../../Contact";
import Skills from "../../Skills";
import About from "../../About";

export const Data = [


    {   icon: <FaProjectDiagram/>,
        title: "Projetos",
        desc: <Projects/>,
    },
    {   icon: <HiUserCircle/>,
        title: "Sobre Mim",
        desc: <About/>,
    },
   
    
    {   icon: <MdMarkEmailUnread/>,
        title: "Contato",
        desc: <Contact/>,
    },
   


]