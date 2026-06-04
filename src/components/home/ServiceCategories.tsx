"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Briefcase, ChevronRight } from "lucide-react";

const ServiceCategories = () => {
  const categories = [
    {
      title: "Mental Health & Well-being",
      description: "Comprehensive psychological support focusing on emotional balance and mental resilience.",
      icon: <Sparkles className="w-10 h-10 text-white" />,
      bgGradient: "from-blue-500 to-indigo-600",
      features: ["Anxiety & Depression", "Stress Management", "Individual Counseling", "Meditation & Mindfulness"]
    },
    {
      title: "Addiction & Risk Behavior",
      description: "Specialized management programs for addictive behaviors and risk-taking tendencies.",
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
      bgGradient: "from-emerald-500 to-teal-600",
      features: ["Substance Abuse Support", "Behavioral Therapy", "Relapse Prevention", "Recovery Coaching"]
    },
    {
      title: "HR & Employee Support Service",
      description: "Tailored mental health solutions for corporate environments and employee productivity.",
      icon: <Briefcase className="w-10 h-10 text-white" />,
      bgGradient: "from-orange-500 to-red-600",
      features: ["Workplace Wellness", "Employee Assistance (EAP)", "Leadership Coaching", "Conflict Resolution"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Specialized <span className="text-blue-600">Service Categories</span>
            </motion.h2>
            <p className="text-gray-600 text-lg">
              We have categorized our services to provide focused and expert support for every aspect of your psychological needs.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all">
              View All Services
            </button>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500"
            >
              {/* Icon Box with Gradient */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cat.bgGradient} flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                {cat.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{cat.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {cat.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-3 mb-10">
                {cat.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                    <ChevronRight size={16} className="text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-white border border-gray-200 rounded-xl font-bold text-gray-900 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all flex items-center justify-center gap-2">
                Explore More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;