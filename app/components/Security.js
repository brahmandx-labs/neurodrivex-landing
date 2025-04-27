"use client";

import { motion } from "framer-motion";
import { ShieldCheck, LockKeyhole, ShieldAlert, Fingerprint } from "lucide-react";

const securityFeatures = [
  {
    icon: <LockKeyhole size={40} className="text-accent" />,
    title: "Quantum Encryption",
    description: "Every bit secured by quantum-grade cryptography, decades ahead of current standards.",
  },
  {
    icon: <ShieldCheck size={40} className="text-accent" />,
    title: "Multi-Layer Defense",
    description: "Multiple AI-powered firewalls ensure zero-point vulnerabilities.",
  },
  {
    icon: <Fingerprint size={40} className="text-accent" />,
    title: "DNA Authentication",
    description: "Next-gen biometric systems verify identity down to genetic markers.",
  },
  {
    icon: <ShieldAlert size={40} className="text-accent" />,
    title: "Self-Healing Security",
    description: "AI constantly monitors and autonomously neutralizes threats in real time.",
  },
];

export default function Security() {
  return (
    <section id="security" className="w-full py-24 bg-gradient-to-t from-black to-primary text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        DNA-Level Security
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {securityFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-black/30 p-8 rounded-2xl shadow-lg hover:rotate-1 hover:scale-105 transform transition duration-500"
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