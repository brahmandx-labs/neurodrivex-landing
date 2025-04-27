"use client";

import { motion } from "framer-motion";
import { Rocket, Star, SatelliteDish } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-black text-gray-400 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left */}
        <div className="flex items-center gap-4">
          <Rocket className="text-accent" size={30} />
          <span className="text-white text-lg font-semibold">NeuroDriveX by BrahmandX</span>
        </div>

        {/* Center */}
        <div className="text-sm text-center md:text-left">
          <p>© {new Date().getFullYear()} BrahmandX Innovations. All rights reserved.</p>
        </div>

        {/* Right */}
        <div className="flex gap-6">
          <a
            href="#"
            className="hover:text-accent transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-accent transition"
          >
            Terms of Service
          </a>
        </div>
      </motion.div>

      {/* Cosmic Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-0.5 mt-8 bg-gradient-to-r from-accent via-white to-purple-500"
      ></motion.div>

      {/* Stars */}
      <div className="flex justify-center mt-6 gap-2 animate-pulse">
        <Star size={18} className="text-white" />
        <SatelliteDish size={18} className="text-white" />
        <Star size={18} className="text-white" />
      </div>
    </footer>
  );
}