import "./contact.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdAlternateEmail, MdEmail, MdSend } from "react-icons/md";
import { FaUserCircle, FaLinkedin, FaCopy, FaWhatsapp } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    // Form will be submitted normally by the browser
    // Reset submitting state after a delay to simulate completion
    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("contato@andremicael.com");
      toast.success("E-mail copiado com sucesso!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      toast.error("Falha ao copiar", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="bg-slate-900 py-6 px-4 rounded-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="max-w-3xl mx-auto mb-6" variants={itemVariants}>
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-verde mb-3"
          variants={itemVariants}
        >
          Vamos conversar!
        </motion.h2>

        <motion.p
          className="mx-auto text-sm md:text-base text-gray-300 max-w-xl text-center"
          variants={itemVariants}
        >
          Preencha o formulário abaixo ou entre em contato através de outros
          canais disponíveis.
        </motion.p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-white mb-4">
            Envie uma mensagem
          </h3>

          <form
            action="https://formsubmit.co/28c62ad0dad617f90462e93da84f5d8f"
            method="POST"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaUserCircle className="text-verde text-sm" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-700 border border-slate-600 text-white text-sm rounded-lg block w-full pl-9 p-2.5 focus:ring-verde focus:border-verde"
                  placeholder="Nome completo"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MdAlternateEmail className="text-verde text-sm" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-700 border border-slate-600 text-white text-sm rounded-lg block w-full pl-9 p-2.5 focus:ring-verde focus:border-verde"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-700 border border-slate-600 text-white text-sm rounded-lg block w-full p-2.5 focus:ring-verde focus:border-verde"
                placeholder="Escreva sua mensagem aqui..."
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-verde hover:bg-verde-shadow text-black font-medium rounded-lg text-sm px-4 py-2.5 flex items-center justify-center gap-2 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Enviando...</>
              ) : (
                <>
                  <MdSend className="text-base" /> Enviar mensagem
                </>
              )}
            </motion.button>

            <input
              type="hidden"
              name="_subject"
              value="Nova mensagem do portfólio!"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </motion.div>

        {/* Contact Channels */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={containerVariants}
        >
          <motion.a
            href="https://www.linkedin.com/in/andremsampaio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-verde transition-all group"
            whileHover={{ scale: 1.02 }}
            variants={itemVariants}
          >
            <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <FaLinkedin className="text-blue-500" />
            </div>
            <div className="flex-grow">
              <h4 className="text-white text-sm font-medium">LinkedIn</h4>
              <p className="text-xs text-gray-400">Conecte-se</p>
            </div>
          </motion.a>

          <motion.div
            className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700 group cursor-pointer"
            onClick={copyToClipboard}
            whileHover={{ scale: 1.02 }}
            variants={itemVariants}
          >
            <div className="w-8 h-8 rounded-full bg-pink-900/30 flex items-center justify-center flex-shrink-0">
              <MdEmail className="text-pink-500" />
            </div>
            <div className="flex-grow">
              <h4 className="text-white text-sm font-medium">E-mail</h4>
              <p className="text-xs text-gray-400">contato@andremicael.com</p>
            </div>
            <FaCopy className="text-gray-400 group-hover:text-verde text-xs" />
          </motion.div>

          <motion.a
            href="https://wa.me/5511900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-verde transition-all group"
            whileHover={{ scale: 1.02 }}
            variants={itemVariants}
          >
            <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
              <FaWhatsapp className="text-green-500" />
            </div>
            <div className="flex-grow">
              <h4 className="text-white text-sm font-medium">WhatsApp</h4>
              <p className="text-xs text-gray-400">Resposta rápida</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Response Time Info */}
        <motion.div
          className="bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-md"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <div className="bg-slate-700/50 p-2 rounded-full">
              <RiMailSendLine className="text-verde text-xl" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">
                Tempo de resposta
              </h3>
              <p className="text-xs text-gray-400">
                Geralmente respondo em até 24 horas em dias úteis
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
