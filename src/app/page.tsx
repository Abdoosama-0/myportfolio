"use client";

import { motion } from "framer-motion";
import data from "../data.json";
import Nav from "./nav";



export default function Home() {
  const { summary, skills, projects, experince, education, languages } = data;



  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 px-6 sm:px-10 md:px-16 py-2" id="home">
      <Nav/>

      <div className="pt-24">
        {/* Summary */}
        <motion.section
          id="summary"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
            👋 Hi, I’m Abdo Osama
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {summary.body}
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">🧠 Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, list]) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800 capitalize">
                  {category.replace(/([A-Z])/g, " $1")}
                </h3>
                <ul className="space-y-1 text-gray-600">
                  {(list as string[]).map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-indigo-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-indigo-600 " id="projects">💻 Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{project.date}</p>
                <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
                  {project.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg transition"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">🧩 Experience</h2>
          {experince.map((exp) => (
            <motion.div
              key={exp.position}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-md p-6 mb-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <p className="text-gray-600 mb-3">
                {exp.company} – {exp.location} ({exp.startDate} – {exp.endDate})
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.section>

        {/* Education */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">🎓 Education</h2>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{education.institution}</h3>
            <p>{education.degree}</p>
            <p className="text-gray-600">
              GPA: {education.gpa} | Grade: {education.grade}
            </p>
            <p>Expected Graduation: {education.expectedGraduation}</p>
            <p className="text-gray-600">{education.location}</p>
          </div>
        </motion.section>

        {/* Languages */}
        <motion.section
          id="languages"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">🌍 Languages</h2>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <ul className="space-y-2 text-gray-700">
              {languages.map((lang) => (
                <li key={lang.language}>
                  <span className="font-semibold">{lang.language}</span> –{" "}
                  {lang.proficiency}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 text-gray-500 text-sm"
        >
          © {new Date().getFullYear()} Abdo Osama — Built with Next.js, Tailwind CSS & Framer Motion
        </motion.footer>
      </div>
    </main>
  );
}
