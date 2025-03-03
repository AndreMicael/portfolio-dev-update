import "./home.scss";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { HomeTabsContext } from "../Contexto/HomeTabsContext";

const Home = ({ onAction, home, load }) => {
  const { setHomeData } = useContext(HomeTabsContext);
  const avatar = home;
  const loading = load;

  const handleClick = () => {
    const data = true;
    setHomeData(data);
  };

  return (
    <div className="home-container min-h-[60vh] md:min-h-[75vh] w-full px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-row md:flex-row items-center justify-center gap-8">
        <div className="w-full max-w-[250px] md:w-1/3">
          {loading ? (
            <div className=" text-white">Carregando...</div>
          ) : (
            avatar && (
              <img
                src={avatar.formats.medium.url}
                className="w-full  h-auto rounded-2xl shadow-lg"
                alt="Avatar"
              />
            )
          )}
        </div>

        <div className="w-full md:w-2/3 max-w-[600px] flex flex-col items-center md:items-start text-center md:text-left">
          <button className="available text-xs md:text-sm flex items-center gap-2 px-3 py-1.5">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-verde text-[8px]"
            />
            <span>Disponível</span>
          </button>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-4 text-white leading-tight">
            Full-Stack <br /> Developer & Designer.
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-300 max-w-[500px]">
            Minha missão é criar sites e sistemas que unam visual impactante com
            alta funcionalidade.
          </p>

          <button
            onClick={handleClick}
            className="mt-6  md:w-auto bg-verde hover:bg-verde-shadow text-black font-bold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Vamos conversar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
