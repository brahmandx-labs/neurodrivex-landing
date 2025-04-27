"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full py-24 bg-primary text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        About NeuroDriveX
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-300 leading-relaxed"
        >
          Born from the visionaries at <span className="text-accent font-bold">BrahmandX</span>, 
          <span className="text-white font-semibold"> NeuroDriveX </span> 
          is not just a self-driving AI — it is a neural intelligence evolved to sense, think, and adapt like a living brain.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 leading-relaxed"
        >
          Built on cutting-edge machine learning, autonomous cognition, and quantum-grade security protocols, 
          NeuroDriveX is designed to dominate the roads of today and the challenges of tomorrow.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-500 leading-relaxed italic"
        >
          At the core, it carries the DNA of BrahmandX: curiosity, exploration, security, and infinite evolution.
        </motion.p>
      </div>
    </section>
  );
}