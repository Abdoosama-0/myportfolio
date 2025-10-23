import { motion } from 'framer-motion'
import React from 'react'
import { CiLocationOn, CiSaveDown2 } from 'react-icons/ci'

const Summary = (summary:any) => {
    return (
        <section className="py-12" id="summary">
            <motion.section
                id="summary"
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto mb-20 text-center mt-24"
            >
                <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
                    👋 Hi, I’m Abdo Osama
                </h1>
                <h1 className="text-3xl font-extrabold mb-4 text-gray-600">full stack devolper | mern & next</h1>
                <p className="flex items-center justify-center gap-2 mx-auto"><CiLocationOn color="brown" /> <span>Egypt Cairo</span></p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    {summary.body}
                </p>
                <a
                    href="https://drive.google.com/uc?export=download&id=1XbutQa5JQY7GldvszVgDLQJP7bAKdulq"
                    download
                    className="flex items-center mx-auto mt-2  gap-2 justify-center w-fit px-2 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                    <CiSaveDown2 /><span>Download CV</span>
                </a>

            </motion.section>
        </section>
    )
}

export default Summary