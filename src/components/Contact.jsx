import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a demo contact form. Replace handleSubmit with EmailJS or your backend.");
  };

  return (
    <motion.div
      className="section bg-sky-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="card max-w-xl p-6 bg-white shadow-md rounded-xl">
          

          {/* Contact Info */}
          <div className="mt-6 text-gray-700 space-y-2">
            <p>
              📧 Email:{" "}
              <a href="mailto:jaijoy888@gmail.com" className="text-blue-600 hover:underline">
                jaijoy888@gmail.com
              </a>
            </p>
            <p>📞 Phone: +91 7358992950</p>
            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/jaisonjp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/jaisonjp
              </a>
            </p>
            <p>
              💻 GitHub:{" "}
              <a
                href="https://github.com/jaisonjp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/jaisonjp
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
