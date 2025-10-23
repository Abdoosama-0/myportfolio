"use client";

import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gray-50 border-t border-gray-200 text-gray-600 py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-sm"
    >
      {/* Left Side */}
      <div className="flex items-center gap-2 mb-2 sm:mb-0">
        <img src="/logo.png" alt="Logo" className="w-5 h-5" />
        <p>
          ©{year} <span className="font-bold text-black">abdelrhman osama</span>
          <span className="text-gray-400">. Full-Stack Developer</span>
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <p className="text-gray-500 hidden sm:block">
          Designed & Developed by{" "}
          <span className="font-bold text-black">abdelrhman osama</span>
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/201553980055"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:scale-110 transition-transform"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ahmedadham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:scale-110 transition-transform"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/ahmedadham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:scale-110 transition-transform"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
