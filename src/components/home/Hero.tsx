"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay: সাদা থেকে ট্রান্সপারেন্ট গ্রেডিয়েন্ট */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="max-w-full">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            Empowering Your Mind
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            Your Mental <span className="text-blue-600">Well-being</span> <br /> 
            Is Our Priority
          </motion.h1>

          {/* Short Description */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl"
          >
            Psynergy BD provides professional psychological support to help you navigate life&apos;s challenges. Join us to build resilience and find your inner peace.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-200 active:scale-95">
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg transition-all active:scale-95">
              <PhoneCall size={20} />
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;