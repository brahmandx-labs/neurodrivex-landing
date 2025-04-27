"use client";

import { motion } from "framer-motion";
// import { Button } from "@/components/ui/Button"; // Adjust the import path as necessary

export default function Hero() {
  return (
    <section className="w-full h-[90vh] bg-gradient-to-b from-primary to-black flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
      >
        NeuroDriveX
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-2xl mt-6 text-gray-300 max-w-2xl"
      >
        The Future of Cognitive Autonomous Driving. 
        AI that thinks, learns, and adapts like a Neural Mind.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-4 mt-8"
      >
        {/* <Button size="lg" className="bg-accent text-white hover:bg-indigo-600">
          Get Early Access
        </Button>
        <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
          Learn More
        </Button> */}
      </motion.div>
    </section>
  );
}