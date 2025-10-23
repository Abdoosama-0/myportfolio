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
    <section className="py-12" id="skills">
      <motion.h2
        className="text-3xl font-bold mb-8 text-indigo-600 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🧠 Skills
      </motion.h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700">
        {skills.map((item, index) => (
          <motion.li
            key={item.skill}
            className="flex items-center gap-2 p-2 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <img
              src={item.pic}
              alt={item.skill}
              className="w-6 h-6 object-contain"
            />
            <span className="font-medium">{item.skill}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Skills;
