import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Examination & Attendance Management System",
    tech: "Java Swing • MySQL",
    desc: "A desktop application for managing exams, attendance, student/tutor logins, and reports."
  },
  {
    title: "Hospital Management System",
    tech: "Python • SQLite • Pandas",
    desc: "A modular system with patient records, triage, appointment scheduling and analytics."
  },
  {
    title: "House Price Analysis & Forecasting",
    tech: "Python • Scikit-learn • ARIMA",
    desc: "Time-series analysis and forecasting of housing prices using statistical and ML techniques."
  }
];

export default function Projects(){
  return (
    <motion.div className="section bg-slate-50" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}>
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3">
          {items.map((p, i) => (
            <div key={i} className="card">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{p.tech}</p>
              <p className="mt-3 text-slate-700 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
