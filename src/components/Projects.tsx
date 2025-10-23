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
    <section className="py-12" id="projects">
      <motion.h2
        className="text-3xl font-bold mb-8 text-indigo-600 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        💻 Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.pic}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {project.title}
              </h3>

              {project.date && (
                <p className="text-sm text-gray-500 mb-2">📅 {project.date}</p>
              )}

              <ul className="list-disc list-inside text-gray-700 text-sm mb-4 space-y-1">
                {project.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    🔗 GitHub
                  </a>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-600 hover:underline"
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
