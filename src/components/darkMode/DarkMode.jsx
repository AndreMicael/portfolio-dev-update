import "./dark.scss";
import { LuSunMedium } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";
import { useState } from "react";
import { TbBackground } from "react-icons/tb";
import { Popover } from "flowbite-react";
import ParticlesComponent from '../particles';
import Circles from '../circles';
import NewMoon from "../../assets/emojis/new-moon.png";
import Sun from "../../assets/emojis/sun.png";
import Particles from "../../assets/emojis/particles.png";

const DarkMode = () => {
  const [isSun, setIsSun] = useState(true);
  const [isPart, setIsPart] = useState(false);
  const [isCircle, setIsCircle] = useState(false);

  const handleClick = () => {
    setIsSun(!isSun);
  };

  const handlePartChange = (e) => {
    const value = e.target.value;
    if (value === 'particles') {
      setIsPart(true);
      setIsCircle(false);
    } else if (value === 'confetti') {
      setIsPart(false);
      setIsCircle(true);
    } else if (value === 'nenhum') {
      setIsPart(false);
      setIsCircle(false);
    }
  };

  return (
    <div className="flex gap-2">
      <Popover
        trigger="hover"
        aria-labelledby="popover-night-mode"
        content={
          <div className="w-64 text-sm text-gray-900 dark:text-gray-400">
            <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
              <h3 id="popover-night-mode" className="font-semibold text-gray-900 dark:text-white">Modo Noturno</h3>
            </div>
            <div className="px-3 py-2">
              <p>Alterne entre o modo claro <img className="inline" width='25' src={Sun} alt="Emoji Sol" /> e o modo noturno <img className="inline" width='25' src={NewMoon} alt="Emoji Lua" />.</p>
            </div>
          </div>
        }
      >
        <div onClick={handleClick} className={`botao-dark p-0 ${isSun ? 'inactive' : 'active'}`}>
          {isSun ? <IoMdMoon /> : <LuSunMedium />}
        </div>
      </Popover>

      <Popover
        trigger="hover"
        aria-labelledby="popover-background-options"
        content={
          <div className="text-sm text-gray-900 dark:text-gray-400">
            <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
              <h3 id="popover-background-options" className="font-semibold text-gray-900 dark:text-white">Alterar Fundo</h3>
            </div>
            <div className="px-3 py-2">
              <p>Clique para alterar o plano de fundo. <img className="inline" width='25' src={Particles} alt="Emoji Partículas" /></p>
              <div className="lista-fundo flex mt-2 gap-2">
                <div className="flex items-center">
                  <input
                    onChange={handlePartChange}
                    id="radio-particles"
                    type="radio"
                    value="particles"
                    name="background-options"
                    className="w-4 h-4 text-blue-600 bg-gray-300 border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="radio-particles" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Partículas</label>
                </div>
                <div className="flex items-center">
                  <input
                    onChange={handlePartChange}
                    id="radio-confetti"
                    type="radio"
                    value="confetti"
                    name="background-options"
                    className="w-4 h-4 text-blue-600 bg-gray-300 border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="radio-confetti" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confetes</label>
                </div>
                <div className="flex items-center">
                  <input
                    onChange={handlePartChange}
                    id="radio-none"
                    type="radio"
                    value="nenhum"
                    name="background-options"
                    className="w-4 h-4 text-blue-600 bg-gray-300 border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="radio-none" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nenhum</label>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <div className={`botao-dark p-0 ${isPart ? 'inactive' : 'active'}`}>
          <TbBackground />
          {isPart ? <ParticlesComponent id="particles" /> : ''}
          {isCircle ? <Circles id="particles" /> : ''}
        </div>
      </Popover>
    </div>
  );
};

export default DarkMode;
