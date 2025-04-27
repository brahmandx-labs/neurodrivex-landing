"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image"; // use next/image for optimization

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-primary text-white sticky top-0 z-50 shadow-lg">
      
      {/* Logo and Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 font-bold text-2xl tracking-wider"
      >
        <Image 
          src="/brahmandx_logo-removebg-preview.png" 
          alt="BrahmandX Logo" 
          width={72} 
          height={72} 
          className="rounded-full" 
        />
        BrahmandX | NeuroDriveX
      </motion.div>

      {/* Desktop Links */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex gap-8 text-lg"
      >
        <a href="#features" className="hover:text-accent transition">Features</a>
        <a href="#about" className="hover:text-accent transition">About</a>
        <a href="#security" className="hover:text-accent transition">Security</a>
        <a href="#cta" className="hover:text-accent transition">Join</a>
      </motion.div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu size={28} />
      </div>
    </nav>
  );
}
