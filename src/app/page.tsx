"use client";

import { motion } from "framer-motion";
import data from "../data.json";
import Nav from "../components/Nav";

import Footer from "../components/Footer"
import ContactForm from "../components/Contact";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Projects from "../components/Projects";
import Education from "@/components/Education";
import Languages from "@/components/Languages";



export default function Home() {
  const { summary, skills, projects, experince, education, languages} = data;



  return (<>
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900" id="home">
      <Nav />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 space-y-20">
        {/* Summary */}
        <Summary body={summary.body} />

        {/* Skills */}
        <Skills skills={skills} />

        {/* Projects */}
        <Projects projects={projects} />

        {/* Experience */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-indigo-600 flex items-center gap-3">
            🧩 Experience
          </h2>
          <div className="space-y-6">
            {experince.map((exp) => (
              <motion.div
                key={exp.position}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-100 p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{exp.position}</h3>
                <p className="text-indigo-600 font-medium mb-4">
                  {exp.company} – {exp.location} ({exp.startDate} – {exp.endDate})
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg leading-relaxed">
                  {exp.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <Education education={education} />

        {/* Languages */}
        <Languages languages={languages} />

        {/* Contact */}
        <ContactForm />
      </div>
    </main>
    <Footer />
  </>
  );
}
