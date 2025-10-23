import { motion } from 'framer-motion'

type Language = {
  language: string;
  proficiency: string;
};

type LanguagesProps = {
  languages: Language[];
};

const Languages = ({ languages }: LanguagesProps) => {
  return (
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
  )
}

export default Languages