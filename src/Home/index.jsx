import "./home.scss";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { HomeTabsContext } from "../Contexto/HomeTabsContext";
import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa";
import Resume from "../assets/pdf/Andre_Sampaio_Desenvolvedor_Fullstack.pdf";

const Home = ({ home }) => {
  const { setHomeData } = useContext(HomeTabsContext);
  const avatar = home;

  const handleClick = () => {
    const data = true;
    setHomeData(data);
  };

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    link.click();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="home-container mt-16 min-h-[70vh] md:min-h-[80vh] w-full px-4 md:px-8 py-8 md:py-12 flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-2">
            <motion.button
              className="available text-xs md:text-sm flex items-center gap-2 px-3 py-1.5 bg-slate-800/60 rounded-full backdrop-blur-sm border border-slate-700"
              whileHover={{ scale: 1.05 }}
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="text-verde text-[8px] animate-pulse"
              />
              <span>Disponível para projetos</span>
            </motion.button>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 text-white leading-tight">
            Full-Stack <br className="hidden sm:block" />
            <span className="text-verde">Developer</span> & Designer.
          </h1>

          <p className="mt-4 text-sm font-normal md:text-base xl:text-lg text-gray-300 max-w-[600px] leading-relaxed">
            Minha missão é desenvolver sites e sistemas que combinam design
            visual impactante com alta performance, usabilidade e
            escalabilidade.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <motion.button
              onClick={handleClick}
              className="bg-verde hover:bg-verde-shadow text-black font-bold py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contato
            </motion.button>

            {/* <motion.a
              href="/projetos"
              className="bg-transparent border border-slate-700 hover:border-verde text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver projetos
            </motion.a> */}

            <motion.a
              onClick={() => handleDownload(Resume)}
              className="bg-transparent border border-slate-700 hover:border-verde text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Currículo
            </motion.a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-8">
            <motion.a
              href="https://github.com/AndreMicael"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-white hover:text-verde hover:border-verde transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <FaGithub className="text-lg" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/andremsampaio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-white hover:text-verde hover:border-verde transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <FaLinkedinIn className="text-lg" />
            </motion.a>
            <motion.a
              href="https://www.behance.net/andremicael"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-white hover:text-verde hover:border-verde transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <FaBehance className="text-lg" />
            </motion.a>
          </div>
        </motion.div>

        {/* Avatar Section */}
        <motion.div className="w-full md:w-2/5" variants={itemVariants}>
          {avatar && (
            <div className="relative w-[200px] sm:w-[250px] md:w-[280px] lg:w-[320px] xl:w-[350px] mx-auto">
              <motion.div
                className="absolute inset-0 bg-verde/20 blur-3xl rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.img
                src={avatar?.formats?.medium?.url}
                className="relative w-full h-auto rounded-2xl shadow-lg border-2 border-slate-800"
                alt="Avatar"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-verde/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 5, 0],
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -z-10 -top-4 -left-4 w-16 h-16 bg-slate-700/50 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -5, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
