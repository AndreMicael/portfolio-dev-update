import { useState, useEffect, useContext, useRef } from "react";
import { Data } from "./TabsData";
import "./Tabs.scss";
import { HomeTabsContext } from "../../Contexto/HomeTabsContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { homeData, setHomeData } = useContext(HomeTabsContext);
  const tabRefs = useRef([]);
  const containerRef = useRef(null);

  // Refs para o carrossel
  const carouselRef = useRef(null);
  const desktopCarouselRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Calcular largura para os carrosséis
  useEffect(() => {
    const calculateDimensions = () => {
      // Calcular largura para arrastar
      if (carouselRef.current) {
        // Mobile width calculation removed as it wasn't being used
      }
      if (desktopCarouselRef.current) {
        // Desktop width calculation was previously here
        // Removed as the value wasn't being used
      }
    };

    // Aguarda para garantir que os componentes foram renderizados
    setTimeout(calculateDimensions, 100);

    // Recalcular em caso de redimensionamento da janela
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  // Atualiza o slide atual quando desliza
  useEffect(() => {
    setCurrentSlide(activeTab);
  }, [activeTab]);

  const handleClick = (id) => {
    setActiveTab(id);
  };

  // Navegar para próximo slide
  const nextSlide = () => {
    const nextIndex = Math.min(currentSlide + 1, Data.length - 1);
    setActiveTab(nextIndex);
    setCurrentSlide(nextIndex);
  };

  // Navegar para slide anterior
  const prevSlide = () => {
    const prevIndex = Math.max(currentSlide - 1, 0);
    setActiveTab(prevIndex);
    setCurrentSlide(prevIndex);
  };

  // Ir diretamente para um slide específico
  const goToSlide = (index) => {
    setActiveTab(index);
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (homeData === true) {
      setActiveTab(2);
      setCurrentSlide(2);
      if (tabRefs.current[2]) {
        tabRefs.current[2].scrollIntoView({ behavior: "smooth" });
      }
      setHomeData(false);
    }
  }, [homeData, setHomeData]);

  // Função de detecção de deslize
  // Função de detecção de deslize
  const handleDragEnd = (_, info) => {
    // Detecta direção do deslize e muda o slide
    if (Math.abs(info.offset.x) > 100) {
      if (info.offset.x > 0 && currentSlide > 0) {
        prevSlide();
      } else if (info.offset.x < 0 && currentSlide < Data.length - 1) {
        nextSlide();
      }
    }
  };
  return (
    <div ref={containerRef} className="tabs-container w-full max-w-6xl mx-auto">
      {/* Mobile view */}
      <div className="md:hidden">
        <div className="relative">
          {/* Menu de navegação mobile centralizado e elegante */}
          <div className="flex justify-center mb-4">
            <div className="flex overflow-x-auto scrollbar-hide py-1 max-w-full">
              <div className="inline-flex bg-slate-800/60 backdrop-blur-sm rounded-full p-1 mx-auto border border-slate-700 shadow-lg">
                {Data.map((data, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`flex flex-col items-center py-1.5 px-2.5 min-w-[4.5rem] rounded-full transition-all duration-200 ${
                      i === currentSlide
                        ? "bg-verde text-black"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    <span className="text-[11px] mb-0.5">{data.icon}</span>
                    <span className="text-[9px] font-medium whitespace-nowrap">
                      {data.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Carrossel mobile com altura adaptável */}
          <div className="overflow-hidden rounded-lg border border-slate-800 shadow-lg">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="w-full"
              >
                <div className="bg-slate-900 p-4 transition-all duration-300">
                  {Data[currentSlide].desc}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles de navegação mobile simplificados */}
          <div className="flex justify-center items-center mt-4 gap-3">
            <button
              onClick={prevSlide}
              className={`p-2 rounded-full bg-slate-800/80 text-verde ${
                currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentSlide === 0}
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Indicadores como pontos pequenos */}
            <div className="flex items-center gap-1.5 px-2">
              {Data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className="w-2 h-2 rounded-full focus:outline-none transition-all duration-300"
                  style={{
                    backgroundColor: i === currentSlide ? "#7FFF00" : "#4b5563",
                    transform: i === currentSlide ? "scale(1.2)" : "scale(1)",
                  }}
                  aria-label={`Ir para slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className={`p-2 rounded-full bg-slate-800/80 text-verde ${
                currentSlide === Data.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentSlide === Data.length - 1}
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-slate-800/60 backdrop-blur-sm rounded-full p-2 border border-slate-700 shadow-lg">
              {Data.map((data, i) => (
                <button
                  ref={(el) => (tabRefs.current[i] = el)}
                  key={i}
                  onClick={() => handleClick(i)}
                  className={`flex items-center py-2 px-4 md:px-5 lg:px-6 rounded-full transition-all duration-200 ${
                    activeTab === i
                      ? "bg-verde text-black font-medium"
                      : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <span className="text-sm md:text-base lg:text-lg mr-2">
                    {data.icon}
                  </span>
                  <span className="text-xs md:text-sm font-medium whitespace-nowrap">
                    {data.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-lg">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="w-full"
              >
                <div className="bg-slate-900 p-6 transition-all duration-300">
                  {Data[currentSlide].desc}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Controles de navegação desktop simplificados */}
          <div className="flex justify-center items-center mt-4 gap-3">
            <button
              onClick={prevSlide}
              className={`p-2 rounded-full bg-slate-800/80 text-verde hover:bg-slate-700 transition ${
                currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentSlide === 0}
            >
              <FaChevronLeft />
            </button>

            {/* Indicadores como pontos pequenos */}
            <div className="flex items-center gap-2">
              {Data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className="w-2.5 h-2.5 rounded-full focus:outline-none transition-all duration-300"
                  style={{
                    backgroundColor: i === currentSlide ? "#23ce99" : "#4b5563",
                    transform: i === currentSlide ? "scale(1.2)" : "scale(1)",
                  }}
                  aria-label={`Ir para slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className={`p-2 rounded-full bg-slate-800/80 text-verde hover:bg-slate-700 transition ${
                currentSlide === Data.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentSlide === Data.length - 1}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
