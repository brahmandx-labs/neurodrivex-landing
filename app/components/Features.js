"use client";

import { motion } from "framer-motion";
import { Brain, ShieldCheck, Activity, Radar } from "lucide-react";

const features = [
  {
    icon: <Brain size={40} className="text-accent" />,
    title: "Neural Path Prediction",
    description: "AI predicts safest driving paths in real-time with brain-like precision.",
  },
  {
    icon: <Activity size={40} className="text-accent" />,
    title: "Self-Learning AI",
    description: "Continuously evolves through machine learning, adapting to new environments.",
  },
  {
    icon: <ShieldCheck size={40} className="text-accent" />,
    title: "DNA-level Security",
    description: "Quantum-grade encryption ensures the highest protection of data and systems.",
  },
  {
    icon: <Radar size={40} className="text-accent" />,
    title: "Hyper-Perceptive Sensors",
    description: "NeuroDriveX senses and analyzes the environment faster than the human mind.",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-20 bg-gradient-to-b from-black to-primary text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Core Features of NeuroDriveX
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-black/30 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-500"
          >
            <div className="flex flex-col items-center gap-4">
              {feature.icon}
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400 mt-2 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}