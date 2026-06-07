"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const Introduction = () => {
  const features = [
    "Professional Counseling",
    "Evidence-based Therapy",
    "Confidential & Safe Environment",
    "Holistic Mental Wellness"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co.com/XZpqp20b/senior-woman-psychotherapist-counselor-writing-something-down-notebook-therapy-session-with-frustrat.jpg" 
                alt="Psychology Session" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative box behind the image */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-blue-100 rounded-2xl -z-0 hidden sm:block"></div>
            
            {/* Experience Badge */}
            <div className="absolute -top-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl z-20 hidden sm:block">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm">Years of <br /> Experience</p>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-4">About Psynergy BD</h4>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Empowering Minds, <br /> Transforming Lives
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Psynergy BD is a dedicated mental health service provider committed to bridging the gap between mental health needs and professional support. We offer a safe, compassionate space where individuals can explore their emotions, overcome challenges, and build lasting psychological resilience.
            </p>

            {/* Feature List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-blue-600" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold shadow-lg">
              Learn More About Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;