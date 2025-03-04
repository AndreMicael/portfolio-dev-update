import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./about.scss";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaGears } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaDatabase } from "react-icons/fa6";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBlender,
} from "react-icons/si";
import { GiRhinocerosHorn } from "react-icons/gi";
import Portuguese from "../assets/emojis/brasil.webp";
import English from "../assets/emojis/usa.webp";
import { FaSquareBehance } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";

const About = () => {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL_USUARIO);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAbout(data.data);
      localStorage.setItem("about", JSON.stringify(data.data));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const cachedAbout = localStorage.getItem("about");
    if (cachedAbout) {
      try {
        setAbout(JSON.parse(cachedAbout));
        setLoading(false);
      } catch (error) {
        console.error("Error parsing cached about:", error);
        fetchUser();
      }
    } else {
      fetchUser();
    }

    // Clear cache on page reload
    const handleBeforeUnload = () => {
      localStorage.removeItem("about");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        { name: "HTML5", icon: <TiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <IoLogoCss3 className="text-blue-500" /> },
        {
          name: "Javascript",
          icon: <IoLogoJavascript className="text-yellow-400" />,
        },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <RiNextjsFill className="text-white" /> },
        { name: "GitHub", icon: <FaGithub className="text-violet-700" /> },
        {
          name: "Tailwind",
          icon: <RiTailwindCssFill className="text-cyan-500" />,
        },
      ],
    },
    {
      title: "Back-End",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        {
          name: "Banco de Dados",
          icon: <FaDatabase className="text-blue-400" />,
        },
        { name: "Prisma ORM", icon: <SiPrisma className="text-teal-500" /> },
        { name: "Rest API", icon: <FaGears className="text-gray-400" /> },
      ],
    },
    {
      title: "Design",
      skills: [
        { name: "Figma", icon: <FiFigma className="text-purple-400" /> },
        {
          name: "Illustrator",
          icon: <SiAdobeillustrator className="text-orange-600" />,
        },
        {
          name: "Photoshop",
          icon: <SiAdobephotoshop className="text-blue-600" />,
        },
        { name: "Blender", icon: <SiBlender className="text-orange-500" /> },
        {
          name: "Rhinoceros",
          icon: <GiRhinocerosHorn className="text-gray-500" />,
        },
      ],
    },
  ];

  return (
    <div className="  pb-6 ">
      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700 shadow-md"
      >
        <h2 className="text-2xl font-bold text-verde mb-4">Quem sou eu</h2>

        {loading ? (
          <div className="flex space-x-2 justify-center items-center py-6">
            <div className="h-3 w-3 bg-verde rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-3 w-3 bg-verde rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-3 w-3 bg-verde rounded-full animate-bounce"></div>
          </div>
        ) : (
          <div className="text-gray-300 leading-relaxed">
            {about.map((item) => (
              <div
                key={item.id}
                className="prose   prose-sm prose-invert max-w-none"
              >
                <ReactMarkdown>{item.sobre}</ReactMarkdown>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700 shadow-md"
      >
        {" "}
        <h2 className="text-2xl font-bold text-verde mb-4">Educação</h2>
        <div className="text-sm   mx-auto md:text-base lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
          <div className="border-l-2 px-6 lg:px-8 xl:px-12">
            <div className="flex   justify-between">
              <p className="flex items-center">
                <HiMapPin size={16} className="mr-2" />
                Cuiabá, MT
              </p>
              <p>2022-2026</p>
            </div>
            <p className="mt-2 font-semibold   text-base md:text-lg lg:text-[17px] xl:text-[18px]">
              Bacharelado em Sistemas de Informação
            </p>
            <p className="text-slate-500">
              Universidade Federal de Mato Grosso
            </p>
            <p className=" mt-4">
              Focado em desenvolvimento de sistemas, banco de dados, engenharia
              de software, inteligência artificial, segurança da informação e
              gestão de projetos.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skills Section - More compact grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700 shadow-md"
      >
        <h2 className="text-2xl font-bold text-verde mb-4">Habilidades</h2>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="bg-slate-900/50 rounded-lg p-4 border border-slate-700"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center bg-slate-800 rounded-md p-2 border border-slate-700 hover:border-verde transition-all"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="text-2xl mb-1 text-verde">{skill.icon}</div>
                    <p className="text-xs text-gray-300 text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Information - Side by side in a compact layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-md"
        >
          <h3 className="text-xl font-bold text-verde mb-3">Idiomas</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700">
              <div className="w-8 h-8 overflow-hidden rounded-full flex-shrink-0">
                <img
                  src={English}
                  alt="Inglês"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-white">Inglês</h4>
                <p className="text-xs text-gray-400">
                  Speaking, Listening e Writing Avançado
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700">
              <div className="w-8 h-8 overflow-hidden rounded-full flex-shrink-0">
                <img
                  src={Portuguese}
                  alt="Português"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-white">Português</h4>
                <p className="text-xs text-gray-400">Nativo</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-md"
        >
          <h3 className="text-xl font-bold text-verde mb-3">Repositórios</h3>
          <div className="space-y-3">
            <a
              href="https://github.com/AndreMicael"
              target="blank"
              className="block"
            >
              <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700 hover:border-verde transition-all duration-300">
                <div className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center text-purple-500 text-xl">
                  <FaGithub />
                </div>
                <div className="flex-grow">
                  <h4 className="text-base font-medium text-white">GitHub</h4>
                  <p className="text-xs text-gray-400">
                    Veja meus projetos e contribuições
                  </p>
                </div>
                <FaExternalLinkAlt className="text-verde text-sm" />
              </div>
            </a>

            <a
              href="https://www.behance.net/andremicael"
              target="blank"
              className="block"
            >
              <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700 hover:border-verde transition-all duration-300">
                <div className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center text-blue-500 text-xl">
                  <FaSquareBehance />
                </div>
                <div className="flex-grow">
                  <h4 className="text-base font-medium text-white">Behance</h4>
                  <p className="text-xs text-gray-400">
                    Explore meus trabalhos de design
                  </p>
                </div>
                <FaExternalLinkAlt className="text-verde text-sm" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
