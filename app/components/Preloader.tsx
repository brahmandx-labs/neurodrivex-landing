"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import Starfield from "./Starfield";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Starfield Background */}
          <Starfield />

          {/* DNA Animation */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="relative w-24 h-24 mb-6"
          >
            <Sparkles className="absolute left-1 top-1 text-accent w-6 h-6 animate-bounce" />
            <Sparkles className="absolute right-1 bottom-1 text-purple-400 w-6 h-6 animate-bounce delay-200" />
          </motion.div>

          {/* BrahmandX Branding */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-bold text-white tracking-wider text-center"
          >
            NeuroDriveX
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-sm mt-2 text-gray-400 tracking-wide"
          >
            Powered by BrahmandX AI
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}