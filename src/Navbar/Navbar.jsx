import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
// import DarkMode from "../components/darkMode/DarkMode";
import logo from "../assets/tabfolio.svg";
import "./navbar.scss";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const [projects, setProjects] = useState([]);

  // Fetch projects for dropdown
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const cachedProjects = localStorage.getItem("projects");
        if (cachedProjects) {
          setProjects(JSON.parse(cachedProjects));
        } else {
          const response = await fetch(process.env.REACT_APP_API_URL);
          if (!response.ok) throw new Error("Failed to fetch");
          const data = await response.json();
          setProjects(data.data.slice(0, 4)); // Show only first 4 projects in dropdown
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      className={`w-full fixed top-0 left-0  z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 border-b border-slate-800 backdrop-blur-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Logo Tabfólio"
                className="w-[120px] md:w-[140px] h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Projects Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-gray-300 hover:text-verde transition-colors"
              >
                <span>Projetos</span>
                <FaChevronDown
                  className={`ml-1 text-xs transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 rounded-lg bg-slate-800 border border-slate-700 shadow-xl z-50 overflow-hidden"
                  >
                    <div className="py-1">
                      {projects.length > 0 ? (
                        <>
                          {projects.map((project) => (
                            <Link
                              key={project.id}
                              to={`/projetos/${project.slug}`}
                              className="block px-4 py-2.5 text-sm text-gray-200 hover:bg-slate-700 transition-colors"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {project.title}
                            </Link>
                          ))}
                          <div className="border-t border-slate-700 mt-1 pt-1">
                            <Link
                              to="/projetos"
                              className="block px-4 py-2.5 text-sm text-verde hover:bg-slate-700 transition-colors"
                              onClick={() => setDropdownOpen(false)}
                            >
                              Ver todos os projetos
                            </Link>
                          </div>
                        </>
                      ) : (
                        <div className="px-4 py-2.5 text-sm text-gray-400">
                          Carregando projetos...
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Button */}
            <Link
              to="/contato"
              className="bg-verde hover:bg-verde-shadow text-black text-sm px-5 py-2 rounded-lg transition-all duration-300"
            >
              Contato
            </Link>

            {/* Dark Mode */}
            {/* <DarkMode /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            {/* <DarkMode /> */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-verde transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 rounded-lg bg-slate-800 border border-slate-700 overflow-hidden"
            >
              <div className="py-2">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full text-left px-4 py-3 flex justify-between items-center text-gray-300 hover:bg-slate-700"
                >
                  <span>Projetos</span>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="bg-slate-700/50 pl-4">
                    {projects.length > 0 ? (
                      <>
                        {projects.map((project) => (
                          <Link
                            key={project.id}
                            to={`/projetos/${project.slug}`}
                            className="block px-4 py-2.5 text-sm text-gray-300 hover:text-verde transition-colors"
                            onClick={() => {
                              setDropdownOpen(false);
                              setMobileMenuOpen(false);
                            }}
                          >
                            {project.title}
                          </Link>
                        ))}
                        <Link
                          to="/projetos"
                          className="block px-4 py-2.5 text-sm text-verde hover:text-verde-shadow transition-colors"
                          onClick={() => {
                            setDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                        >
                          Ver todos os projetos
                        </Link>
                      </>
                    ) : (
                      <div className="px-4 py-2.5 text-sm text-gray-400">
                        Carregando projetos...
                      </div>
                    )}
                  </div>
                )}

                <Link
                  to="/contato"
                  className="block px-4 py-3 text-gray-300 hover:bg-slate-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;
