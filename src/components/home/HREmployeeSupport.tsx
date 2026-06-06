"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

// ডিটেইল ফাইলগুলো ইম্পোর্ট
import HRCounselling from "./hr-details/HRCounselling";
import MentalHealthCounselling from "./hr-details/MentalHealthCounselling";
import PsychometricsTesting from "./hr-details/PsychometricsTesting";

const HREmployeeSupport = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const supportData = [
    {
      id: 1,
      title: "Human Resource Counselling",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070",
      caption: "Equips HR professionals with skills to address concerns, mediate conflicts, and provide empathetic guidance",
      component: <HRCounselling />
    },
    {
      id: 2,
      title: "Mental Health Counselling",
      image: "https://i.ibb.co.com/VcNWbkW5/expressive-senior-female-posing-indoor.jpg",
      caption: "Confidential, evidence-based support to address stress, anxiety, and maintain work-life balance",
      component: <MentalHealthCounselling />
    },
    {
      id: 3,
      title: "Psychometrics Testing for HR",
      image: "https://i.ibb.co.com/LDPVGQ04/workplace-violence-taking-place-colleagues.jpg",
      caption: "Data-driven insights to assess personality traits and cognitive abilities for smarter recruitment",
      component: <PsychometricsTesting />
    }
  ];

  const currentItem = supportData.find(item => item.id === selectedId);

  return (
    <section id="hr-support" className="py-24 bg-gray-50/50">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            HR & Employee Support Service
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {supportData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full group"
            >
              {/* Card Image */}
              <div className="h-64 overflow-hidden rounded-3xl mb-6 shadow-sm border border-gray-100 bg-white">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow px-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight min-h-[64px]">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {item.caption}{" "}
                  <button 
                    onClick={() => setSelectedId(item.id)} 
                    className="text-blue-600 font-bold hover:underline"
                  >
                    more...
                  </button>
                </p>

                {/* Detail Button */}
                <button 
                  onClick={() => setSelectedId(item.id)}
                  className="w-full py-4 bg-gray-50 text-gray-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all group"
                >
                  Detail 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {selectedId && currentItem && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={() => setSelectedId(null)} 
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} 
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden z-10"
            >
              <button 
                onClick={() => setSelectedId(null)} 
                className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full z-20"
              >
                <X size={24} />
              </button>
              
              <div className="max-h-[85vh] overflow-y-auto">
                <div className="h-64 w-full">
                  <img src={currentItem.image} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="p-8 lg:p-12 bg-white -mt-10 rounded-t-[2.5rem] relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentItem.title}</h3>
                  <div className="prose prose-blue max-w-none">
                    {currentItem.component}
                  </div>
                  <button 
                    onClick={() => setSelectedId(null)} 
                    className="mt-10 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HREmployeeSupport;