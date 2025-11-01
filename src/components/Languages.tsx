import { useLangStore } from '@/store/useLangStore';
import { motion } from 'framer-motion'

type Language = {
  language: string;
  proficiency: string;
};

type LanguagesProps = {
  languages: Language[];
};

const Languages = ({ languages }: LanguagesProps) => {
   const { lang } = useLangStore();
  return (
    <motion.section
      id="languages"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-indigo-600 flex items-center gap-3">
        {lang === "arabic" ?  <span> 🌍اللغات</span>  :   <span>  🌍 Languages  </span>}
      </h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 p-8 hover:shadow-2xl transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.language}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100 hover:border-indigo-200 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{lang.language}</h3>
              <p className="text-indigo-600 font-medium">{lang.proficiency}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Languages