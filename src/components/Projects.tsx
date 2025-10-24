"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  technologies: string[];
  date?: string;
  description: string[];
  github: string;
  liveDemo?: string;
  pic: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="max-w-6xl mx-auto" id="projects">
      <motion.h2
        className="text-4xl font-bold mb-12 text-indigo-600 flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        💻 Projects
      </motion.h2>

      <div className="grid grid-cols-1  gap-8">
        {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.pic}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                {project.date && (
                  <p className="text-base text-indigo-600 font-medium mb-5 flex items-center gap-2">
                    📅 {project.date}
                  </p>
                )}

                <ul className="list-disc list-inside text-gray-700 text-base mb-6 space-y-2 leading-relaxed flex-grow">
                  {project.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold border border-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      🔗 GitHub
                    </a>

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        🚀 Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
