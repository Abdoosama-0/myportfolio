import { motion } from "framer-motion"

type EducationData = {
  institution: string;
  degree: string;
  gpa: string;
  grade: string;
  expectedGraduation: string;
  location: string;
};

type EducationProps = {
  education: EducationData;
};

const Education = ({ education }: EducationProps) => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-indigo-600 flex items-center gap-3">
        🎓 Education
      </h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 p-8 hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{education.institution}</h3>
        <p className="text-xl text-indigo-600 font-semibold mb-4">{education.degree}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <p className="text-gray-700">
            <span className="font-semibold">GPA:</span> {education.gpa}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Grade:</span> {education.grade}
          </p>
        </div>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Expected Graduation:</span> {education.expectedGraduation}
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          📍 {education.location}
        </p>
      </div>
    </motion.section>
  )
}

export default Education
