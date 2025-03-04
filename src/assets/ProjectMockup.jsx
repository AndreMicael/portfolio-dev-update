import "../Projects/projects.scss";
import { motion } from "framer-motion";

const ProjectMockup = ({ project }) => {
  const {
    title,
    excerpt,
    description,
    backend,
    frontend,
    image,
    link,
    github,
  } = project;

  // Handler para abrir links
  const handleLinkClick = (url, e) => {
    e.preventDefault();
    e.stopPropagation(); // Impede que o evento propague para links pai
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  return (
    <motion.div
      className="border-b border-slate-700 pb-8 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
        {/* Container da imagem com melhor responsividade */}
        <motion.div
          className="relative w-full md:w-2/5 h-[240px] sm:h-[280px] md:h-[220px] lg:h-[240px] xl:h-[280px] rounded-2xl overflow-hidden border border-slate-700 group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            src={image.url}
            alt={title}
            loading="lazy"
          />
          {/* Overlay com gradiente para melhorar legibilidade em mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Badges de tecnologias visíveis apenas em mobile */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 md:hidden">
            {frontend.slice(0, 3).map((stack, index) => (
              <motion.span
                key={index}
                className="px-2 py-1 bg-slate-800/90 backdrop-blur-sm text-verde text-xs rounded-full border border-slate-700"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {stack}
              </motion.span>
            ))}
            {frontend.length > 3 && (
              <motion.span
                className="px-2 py-1 bg-slate-800/90 backdrop-blur-sm text-verde text-xs rounded-full border border-slate-700"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                +{frontend.length - 3}
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Descrição do Projeto - melhor estruturada e responsiva */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <motion.h3
              className="text-xl md:text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-gray-300 text-sm md:text-base mt-2 mb-4 line-clamp-3 md:line-clamp-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {excerpt || description.substring(0, 150) + "..."}
            </motion.p>

            {/* Tecnologias utilizadas - visíveis apenas em desktop */}
            <div className="hidden md:flex flex-wrap gap-2 mb-4">
              {frontend.map((stack, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-slate-800 text-verde text-sm rounded-full border border-slate-700 hover:border-verde transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {stack}
                </motion.span>
              ))}
              {backend.map((stack, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-slate-800 text-verde text-sm rounded-full border border-slate-700 hover:border-verde transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {stack}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Botões - agora melhor posicionados e estilizados */}
          <div className="flex flex-wrap gap-3 mt-4">
            <motion.button
              onClick={(e) => handleLinkClick(link || "#", e)}
              className="px-4 py-2 bg-verde hover:bg-verde/90 transition-colors text-slate-900 font-medium rounded-lg flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver projeto
            </motion.button>
            {github && (
              <motion.button
                onClick={(e) => handleLinkClick(github, e)}
                className="px-4 py-2 bg-transparent hover:bg-slate-800 border border-slate-700 text-white transition-colors rounded-lg flex items-center gap-2 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver código
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectMockup;
