"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, HeartPulse, Users, ShieldAlert } from "lucide-react";

const CoreServices = () => {
  const services = [
    {
      title: "Mental Health Support",
      description: "Professional counseling for anxiety, depression, and stress management to help you regain control.",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      title: "Addiction Management",
      description: "Evidence-based support for overcoming addictive behaviors and building a healthier lifestyle.",
      icon: <ShieldAlert className="w-8 h-8 text-red-600" />,
      color: "bg-red-50",
    },
    {
      title: "Family & Relationship",
      description: "Strengthening bonds and resolving conflicts through expert-led family therapy sessions.",
      icon: <Users className="w-8 h-8 text-green-600" />,
      color: "bg-green-50",
    },
    {
      title: "Employee Well-being",
      description: "Customized mental health programs for organizations to improve workplace productivity and morale.",
      icon: <HeartPulse className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50",
    },
  ];

  return (
    <section id="core-services" className="py-10 bg-slate-50">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-widest mb-3"
          >
            What We Offer
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Core Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            We provide a wide range of psychological services tailored to your unique needs. Our goal is to support your journey towards mental wellness.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Read More <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;