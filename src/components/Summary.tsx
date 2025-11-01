import { motion } from 'framer-motion'

import { CiLocationOn, CiSaveDown2 } from 'react-icons/ci'
import { useLangStore } from '@/store/useLangStore';
interface SummaryProps {
    summary: any;
    lang: string;
}   
const Summary = ({summary }:SummaryProps) => {
     const { lang } = useLangStore();
   

    return (
        <motion.section
            id="summary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center pt-24"
        >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 p-12">
             <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
  {lang === "arabic" ? "👋مرحباً، أنا عبدو أسامة " : "Hi, I'm Abdo Osama 👋"}

</h1>

                <h2 className="text-3xl font-bold mb-6 text-gray-700">
                    Full Stack Developer | MERN & Next.js
                </h2>
                <div className="flex items-center justify-center gap-2 mb-8">
                    <CiLocationOn className="text-indigo-600" size={24} />
                    {lang === "arabic" ?  <span className="text-lg text-gray-600 font-medium">مصر , القاهرة</span> :  <span className="text-lg text-gray-600 font-medium">Egypt, Cairo</span>}
                   
                </div>
                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-10">
                    {summary.body}
                </p>
                <a
                    href="https://drive.google.com/uc?export=download&id=1XbutQa5JQY7GldvszVgDLQJP7bAKdulq"
                    download
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    <CiSaveDown2 size={20} />
                      {lang === "arabic" ?  <span>تحميل ال cv</span>  :   <span>Download CV</span>}
                  
                </a>
            </div>
        </motion.section>
    )
}

export default Summary