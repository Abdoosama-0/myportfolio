import { motion } from 'framer-motion'

type Skill = {
  skill: string;
  pic: string;
};

type SkillsProps = {
  skills: Skill[];
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="max-w-6xl mx-auto" id="skills">
      <motion.h2
        className="text-4xl font-bold mb-12 text-indigo-600 flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🧠 Skills
      </motion.h2>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((item, index) => (
            <motion.div
              key={item.skill}
              className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-md hover:shadow-lg border border-indigo-100 hover:border-indigo-200 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={item.pic}
                alt={item.skill}
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-semibold text-gray-700 text-sm text-center group-hover:text-indigo-600 transition-colors">
                {item.skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
