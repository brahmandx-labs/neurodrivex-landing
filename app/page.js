import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Security from "./components/Security";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
// import Preloader from "./components/Preloader";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-primary text-white overflow-x-hidden">
      {/* <Preloader /> */}
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Security />
      <CTA />
      <Footer />
    </main>
  );
}