"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

// ডিটেইল ফাইলগুলো ইম্পোর্ট
import MobileDetail from "./addiction-details/MobileDetail";
import DigitalDetail from "./addiction-details/DigitalDetail";
import SubstanceDetail from "./addiction-details/SubstanceDetail";

const AddictionRiskManagement = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const data = [
    {
      id: 1,
      title: "Mobile Addiction",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070",
      caption: "Smartphones are deeply embedded in daily work life—bringing both convenience and the risk of mobile addiction",
      component: <MobileDetail />
    },
    {
      id: 2,
      title: "Digital Addiction",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2070",
      caption: "Excessive internet use and social media overuse are increasingly affecting employee focus and productivity",
      component: <DigitalDetail />
    },
    {
      id: 3,
      title: "Substance Abuse",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2070",
      caption: "Substance abuse is a concern affecting approximately 8.3 million people in Bangladesh, impacting workplace safety",
      component: <SubstanceDetail />
    }
  ];

  const currentItem = data.find(item => item.id === selectedId);

  return (
    <section id="addiction-management" className="py-24 bg-white">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Addiction & Risk Behavior Management
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full group"
            >
              {/* Card Image */}
              <div className="h-64 overflow-hidden rounded-3xl mb-6 shadow-sm">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
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

export default AddictionRiskManagement;