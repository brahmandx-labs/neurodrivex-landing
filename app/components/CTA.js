"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="w-full py-24 bg-black text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto flex flex-col gap-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready to Experience the Future?
        </h2>

        <p className="text-lg md:text-2xl text-gray-400">
          Join the NeuroDriveX revolution today. Get early access and be among the pioneers of next-gen autonomous intelligence.
        </p>

        <form className="flex flex-col md:flex-row items-center gap-4 justify-center mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-4 rounded-full bg-gray-800 text-white w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-accent transition"
          />
          <button
            type="submit"
            className="p-4 px-8 rounded-full bg-gradient-to-r from-accent to-purple-500 hover:scale-105 transition shadow-lg text-white font-semibold"
          >
            Get Early Access
          </button>
        </form>
      </motion.div>
    </section>
  );
}