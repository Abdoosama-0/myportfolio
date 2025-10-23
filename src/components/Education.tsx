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
  )
}

export default Education
