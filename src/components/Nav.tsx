"use client";

import { useState, useEffect, useRef, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Nav = () => {
  const [storedLang, setStoredLang] = useState<string>("english");  
     useEffect(() => { 
     
        setStoredLang(localStorage.getItem("language") || "english") }
        , []);
  const changeLanguage = (lang: string) =>{
 
    localStorage.setItem("language", lang);
    window.location.reload();
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // ✅ يقفل المينيو لما تدوس برة أو تعمل scroll
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // تعويض ارتفاع الـ navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const sections = [
    { id: "summary", label: "Summary" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "languages", label: "Languages" },
    { id: "contact", label: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-2xl font-extrabold text-indigo-600 cursor-pointer hover:text-indigo-700 transition"
        >
          Abdo<span className="text-gray-700">.Dev</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-5">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-gray-700 font-medium hover:text-indigo-600 hover:scale-105 transition-all duration-200 px-3 py-1 rounded-lg"
            >
              {section.label}
            </button>
          ))}

        </div>
<div className="flex justify-between items-center space-x-4">
  <a href="https://github.com/Abdoosama-0" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-2xl hover:text-purple-900 cursor-pointer" />
  </a>

  <a href="https://www.linkedin.com/in/abdelrhman-osama-mostafa-shawky-15417a344/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-2xl hover:text-purple-900 cursor-pointer" />
  </a>

  <a href="mailto:abdalrhman.osama.mostafa@gmail.com">
    <MdEmail className="text-2xl hover:text-purple-900 cursor-pointer" />
  </a>
</div>
<select
  id="lang"
  name="lang"
  value={storedLang}
  onChange={(e) => changeLanguage(e.target.value)}
  className=" w-fit  px-2 py-1 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 text-sm font-medium transition-all duration-200 cursor-pointer hover:border-indigo-400 hover:shadow-md"
>
  <option value="arabic">Arabic</option>
  <option value="english">English</option>
</select>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-md border-t border-gray-200"
          >
            <div className="flex flex-col space-y-3 p-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-gray-700 text-left font-medium hover:text-indigo-600 transition-all duration-200 px-2 py-1 rounded-lg"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
