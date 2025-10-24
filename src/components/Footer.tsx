"use client";

import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import data from "../data.json";
export default function Footer() {
  const year = new Date().getFullYear();
 const contacts = data.contacts;
  return (
   
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-2">Abdo Osama</h3>
            <p className="text-indigo-100 text-lg">
              Full-Stack Developer | MERN & Next.js
            </p>
            <p className="text-indigo-200 text-sm mt-2">
              ©{year} All rights reserved
            </p>
          </div>

          {/* Right Side */}
          <div className="text-center lg:text-right">
            <p className="text-indigo-100 mb-4 text-lg">
              Let's connect and build something amazing together!
            </p>
            <div className="flex items-center justify-center lg:justify-end gap-6">
              <a
                href={`https://wa.me/2${contacts.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                title="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href={contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                title="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                title="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-indigo-400 mt-8 pt-6 text-center">
          <p className="text-indigo-200 text-sm">
            Designed & Developed with ❤️ by <span className="font-semibold">Abdo Osama</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
