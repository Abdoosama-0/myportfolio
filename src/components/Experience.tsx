import { useLangStore } from "@/store/useLangStore";
import { motion } from "framer-motion";
import React from "react";

interface ExperienceProps1 {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface ExperienceProps2 {
  experiences: ExperienceProps1[];
}

const Experience = ({ experiences }: ExperienceProps2) => {
       const { lang } = useLangStore();
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-indigo-600 flex items-center gap-3">
            {lang === "arabic" ?  <span> 🧩الخبرات </span>  :   <span>  🧩 Experience</span>}
      </h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <motion.div
            key={exp.position}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-100 p-8 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {exp.position}
            </h3>
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
  );
};

export default Experience;
