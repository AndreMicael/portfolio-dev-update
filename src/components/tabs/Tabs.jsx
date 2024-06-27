import { useState, useEffect, useContext, useRef } from "react";
import { Data } from "./TabsData";
import "./Tabs.scss";
import { HomeTabsContext } from '../../Contexto/HomeTabsContext';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Estado para controlar a aba ativa
  const { homeData, setHomeData } = useContext(HomeTabsContext); // Contexto para homeData e setHomeData (Esses dados vêm da página Home e passa para as Tabs por meio de contexto vindo o App.jsx)
  const tabRefs = useRef([]); // Referência para a aba que receberá o scrollIntoView

  const handleClick = (id) => {
    setActiveTab(id); // Define a aba clicada como ativa
  }

  useEffect(() => {
     // Efeito que é executado quando homeData muda
    if (homeData === true) {  // Verifica se homeData é true
      setActiveTab(2); // Define a aba 3 como ativa (índice 2)
      if (tabRefs.current[2]) {
        tabRefs.current[2].scrollIntoView({ behavior: 'smooth' }); // Faz o scroll suave até a aba 3
      }
      setHomeData(false); // Define homeData como false após rolar a página
    }
  }, [homeData, setHomeData]);

  return (
    
    <div className='tabs-container xl:w-[70vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] w-[70vw] 
   
    '>
  
      <ul className="list-none whitespace-nowrap flex">
        {Data.map((data, i) => (
          <li 
           ref={el => tabRefs.current[i] = el} // Referência para o scrollIntoView
            key={i} 
            className={activeTab === i ? "active" : ""} 
            onClick={() => handleClick(i)}
          >
            <div className="icon">{data.icon}</div>
            <span className={activeTab === i ? "active title" : "inactive title"}>
              {data.title}
            </span>
          </li>
        ))}
      </ul>

      <div className="content">
      <div className=" overflow-y-auto 
      scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-preto scrollbar-track-verde
    h-[70vh]">
        {Data.map((data, i) => (
          <div
           
            className={`desc ${activeTab === i ? 'active' : ''}`}
            key={i}
          >
            {data.desc}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
