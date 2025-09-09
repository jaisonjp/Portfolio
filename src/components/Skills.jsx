import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Languages": ["C", "Python", "Java", "JavaScript", "SQL", "HTML/CSS"],
  "Databases": ["MySQL", "Oracle"],
  "Tools & Libraries": ["React", "TailwindCSS", "Pandas", "Scikit-learn"],
  "Soft Skills": ["Team Collaboration", "Problem Solving", "Communication"]
};

export default function Skills(){
  return (
    <motion.div className="section" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}>
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([cat, list], idx) => (
            <div key={idx} className="card">
              <h3 className="font-semibold">{cat}</h3>
              <ul className="mt-2 text-sm text-slate-700 space-y-1">
                {list.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
