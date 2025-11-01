"use client";





import Nav from "../components/Nav";

import Footer from "../components/Footer"
import ContactForm from "../components/Contact";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Projects from "../components/Projects";
import Education from "@/components/Education";
import Languages from "@/components/Languages";

import data from "../data.json";
import dataAR from "../dataAR.json";
import { useEffect, useState } from "react";
import Experience from "@/components/Experience";


import { useLangStore } from "@/store/useLangStore";


export default function Home() {
 const { lang, setLang } = useLangStore();
  const [content, setContent] = useState(data);

  useEffect(() => {
    // قراءة اللغة من localStorage
    const storedLang = localStorage.getItem("language") || "english";
   setLang(storedLang);

    // تغيير اتجاه الصفحة ولغة المحتوى
    if (storedLang === "arabic") {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
      setContent(dataAR);
    } else {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
      setContent(data);
    }
  }, []);

  const { summary, skills, projects, experience, education, languages } = content;

  



  return (<>
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900" id="home">
      <Nav />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 space-y-20">
        {/* Summary */}
        <Summary summary={summary} lang={lang} />

        {/* Skills */}
        <Skills skills={skills} />

        {/* Projects */}
        <Projects projects={projects} />

        {/* Experience */}
        <Experience experiences={experience} />
      

        {/* Education */}
        <Education education={education} />

        {/* Languages */}
        <Languages languages={languages} />

        {/* Contact */}
        <ContactForm />
      </div>
    </main>
    <Footer />
  </>
  );
}
