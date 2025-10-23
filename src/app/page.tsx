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
  const { summary, skills, projects, experince, education, languages } = data;



  return (<>
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 px-6 sm:px-10 md:px-16 py-2" id="home">
      <Nav />

      
       
     <Summary body={summary.body} />

        {/* Skills */}
<Skills skills={skills} />



        {/* Projects */}
        <Projects projects={projects} />

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
 <Education education={education} />

        {/* Languages */}
  <Languages  languages={languages} />
        {/* contact */}
        <ContactForm />
        {/* Footer */}

      
    </main>
    <Footer />
  </>
  );
}
