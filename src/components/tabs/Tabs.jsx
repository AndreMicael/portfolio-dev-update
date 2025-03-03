import { useState, useEffect, useContext, useRef } from "react";
import { Data } from "./TabsData";
import "./Tabs.scss";
import { HomeTabsContext } from "../../Contexto/HomeTabsContext";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Estado para controlar a aba ativa
  const { homeData, setHomeData } = useContext(HomeTabsContext); // Contexto para homeData e setHomeData (Esses dados vêm da página Home e passa para as Tabs por meio de contexto vindo o App.jsx)
  const tabRefs = useRef([]); // Referência para a aba que receberá o scrollIntoView

  const handleClick = (id) => {
    setActiveTab(id); // Define a aba clicada como ativa
  };

  useEffect(() => {
    // Efeito que é executado quando homeData muda
    if (homeData === true) {
      // Verifica se homeData é true
      setActiveTab(2); // Define a aba 3 como ativa (índice 2)
      if (tabRefs.current[2]) {
        tabRefs.current[2].scrollIntoView({ behavior: "smooth" }); // Faz o scroll suave até a aba 3
      }
      setHomeData(false); // Define homeData como false após rolar a página
    }
  }, [homeData, setHomeData]);

  return (
    <>
      {/* Mobile: Mostrar todos os componentes verticalmente */}
      <div className="md:hidden">
        {Data.map((data, i) => (
          <div key={i} className="mobile-section p-5">
            {data.desc}
          </div>
        ))}
      </div>

      {/* Desktop: Manter o sistema de abas */}
      <div className="hidden md:block">
        <div className="tabs-container xl:w-[70vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] w-[85vw]">
          <ul className="list-none whitespace-nowrap flex">
            {Data.map((data, i) => (
              <li
                ref={(el) => (tabRefs.current[i] = el)}
                key={i}
                className={activeTab === i ? "active" : ""}
                onClick={() => handleClick(i)}
              >
                <div className="icon">{data.icon}</div>
                <span
                  className={
                    activeTab === i ? "active title" : "inactive title"
                  }
                >
                  {data.title}
                </span>
              </li>
            ))}
          </ul>

          <div className="content">
            <div className="overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-verde scrollbar-track-slate-950 h-[70vh]">
              {Data.map((data, i) => (
                <div
                  className={`desc xl:p-12 lg:p-12 sm:p-12 md:p-12 xs:p-5 ${
                    activeTab === i ? "active" : ""
                  }`}
                  key={i}
                >
                  {data.desc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabs;
