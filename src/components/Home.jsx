import React from "react";
import { motion } from "framer-motion";

export default function Home(){
  return (
    <motion.div className="section flex items-center justify-center bg-gradient-to-b from-sky-50 to-white"
      initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}}>
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">Jaison J P</h1>
        <p className="mt-4 text-lg text-slate-600">M.Sc Decision and Computing Sciences</p>
        <p className="mt-2 text-md text-slate-600">Full Stack Development • Database Management • Logical Coding</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#projects" className="px-5 py-2 rounded-lg bg-sky-600 text-white">View Projects</a>
          <a href="#contact" className="px-5 py-2 rounded-lg border border-slate-200">Contact</a>
        </div>
      </div>
    </motion.div>
  );
}
