import React from "react";
import { motion } from "framer-motion";

export default function About(){
  return (
    <motion.div className="section" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}>
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="card">
            <h3 className="font-semibold">Education</h3>
            <p className="text-sm text-slate-600 mt-2">M.Sc Decision and Computing Sciences — Coimbatore Institute of Technology</p>
            <h3 className="font-semibold mt-4">Interests</h3>
            <p className="text-sm text-slate-600 mt-2">Full-stack development, data analysis, algorithm design, and collaborative projects.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Summary</h3>
            <p className="text-sm text-slate-600 mt-2">I build practical, well-tested applications — focusing on clean code, good UX, and reliable backend/data handling. Experience with academic projects involving databases, Python data analysis, and Java-based systems.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
