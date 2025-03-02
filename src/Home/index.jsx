import "./home.scss";
import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { HomeTabsContext } from "../Contexto/HomeTabsContext";

const Home = ({ onAction }) => {
  const { setHomeData } = useContext(HomeTabsContext);

  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAvatar = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL_USUARIO);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAvatar(data.data[0].avatar);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching avatar:", error);
    }
  };

  useEffect(() => {
    fetchAvatar();
  }, []);

  const handleClick = () => {
    const data = true;
    setHomeData(data);
  };

  return (
    <div className="home-container min-h-[60vh] md:min-h-[75vh] w-full px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-row md:flex-row items-center justify-center gap-8">
        {/* Avatar Image */}
        <div className="w-full max-w-[250px] md:w-1/3">
          {!loading && avatar && (
            <img
              src={avatar.formats.medium.url}
              className="w-full contrast-125 grayscale h-auto rounded-2xl shadow-lg"
              alt="Avatar"
            />
          )}
        </div>

        {/* Content */}
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
