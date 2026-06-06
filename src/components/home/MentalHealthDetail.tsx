"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import PFA from "./training-details/PFA";
import WorkplaceWellbeing from "./training-details/WorkplaceWellbeing";
import StressManagement from "./training-details/StressManagement";
import BehavioralEngineering from "./training-details/BehavioralEngineering";
import EAP from "./training-details/EAP";
import ResilientMinds from "./training-details/ResilientMinds";

type TrainingItem = {
  id: number;
  title: string;
  image: string;
  shortDesc: string;
  fullDesc: string[];
  component?: React.ReactNode;
};

const TrainingServices = () => {
  // পপআপ কন্ট্রোল করার জন্য স্টেট
  const [selectedItem, setSelectedItem] = useState<TrainingItem | null>(null);

  const trainings: TrainingItem[] = [
    {
      id: 1,
      title: "Psychological First Aid (PFA) training",
      image: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
      shortDesc: "Psychological First Aid (PFA) training equips individuals to support people experiencing distress during crises or traumatic events",
      fullDesc: [
        "It provides practical, hands-on skills to reduce panic, stabilize emotions, and connect affected individuals to appropriate support and resources. This training ensures teams are prepared to respond calmly and effectively when people need help the most."
      ],
      component: <PFA />
    },
    {
      id: 2,
      title: "Mental Health – Workplace Well-being Management",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop",
      shortDesc: "Mental health is key to a productive and engaged workforce",
      fullDesc: [
        "Workplace stress, burnout, and emotional challenges can affect focus, performance, and overall well-being.",
        "This training equips teams and organizations with practical strategies to promote mental well-being, foster resilience, and create a supportive, healthy work environment for everyone."
      ],
      component: <WorkplaceWellbeing />
    },
    {
      id: 3,
      title: "Stress and Anxiety Management at the Workplace",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      shortDesc: "Workplace stress and anxiety are growing challenges that impact focus, performance, and team morale",
      fullDesc: [
        "This training provides practical strategies to identify stress triggers, manage anxiety, and build resilience at work.",
        "Teams learn actionable techniques to stay calm under pressure, maintain productivity, and create a healthier, more supportive work environment."
      ],
      component: <StressManagement />
    },
    {
      id: 4,
      title: "Behavioral Engineering and Choice Architecture",
      image: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
      shortDesc: "Small changes in behavior can lead to big results. This training introduces the principles of behavioral engineering",
      fullDesc: [
        "Small changes in behavior can lead to big results.",
        "This training introduces the principles of behavioral engineering and choice architecture, helping organizations design environments and processes that guide better decisions, improve productivity, and foster positive workplace habits.",
        "Teams learn practical strategies to influence behavior ethically, enhance engagement, and create a workplace that naturally encourages smarter choices."
      ],
      component: <BehavioralEngineering />
    },
    {
      id: 5,
      title: "Employee Assistance Programme (EAP)",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop",
      shortDesc: "Supporting employees means supporting the organization. EAP provides confidential counseling and support services",
      fullDesc: [
        "Supporting employees means supporting the organization.",
        "An Employee Assistance Programme (EAP) provides confidential counseling and support services to help employees manage personal and work-related challenges, from stress and mental health concerns to life events and conflicts.",
        "This service equips teams with timely support, promotes well-being, reduces workplace stress, and enhances overall productivity and engagement."
      ],
      component: <EAP />
    },
    {
      id: 6,
      title: "Building Resilient Minds: Organizational",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      shortDesc: "Resilient employees build resilient organizations. This training focuses on strengthening mental resilience at both individual and team levels",
      fullDesc: [
        "Resilient employees build resilient organizations.",
        "This training focuses on strengthening mental resilience at both individual and team levels, helping employees cope with challenges, adapt to change, and maintain performance under pressure.",
        "Teams learn practical strategies to manage stress, recover from setbacks, and cultivate a positive, resilient workplace culture that drives long-term success."
      ],
      component: <ResilientMinds />

    }
  ];

  return (
    <section id="mental-health" className="py-10 bg-gray-50 relative">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Mental Health & <span className="text-blue-600">Well-being</span>
          </motion.h2>
          <p className="text-gray-600">Empowering your workforce with modern behavioral and psychological strategies.</p>
        </div>

        {/* Training Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainings.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full group"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {item.shortDesc} 
                  <button 
                    onClick={() => setSelectedItem(item)}
                    className="text-blue-600 font-bold ml-1 hover:underline underline-offset-4"
                  >
                    more...
                  </button>
                </p>

                <button 
                  onClick={() => setSelectedItem(item)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gray-50 text-gray-900 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all group/btn shadow-inner"
                >
                  Detail
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            {/* Background Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors z-20"
              >
                <X size={24} />
              </button>

              {/* Modal Content */}
              <div className="max-h-[85vh] overflow-y-auto">
                <div className="h-64 w-full relative">
                  <img src={selectedItem.image} className="w-full h-full object-cover" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                </div>
                
                <div className="p-8 lg:p-12 -mt-12 relative bg-white rounded-t-[2.5rem]">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    {selectedItem.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {selectedItem.fullDesc.map((p: string, idx: number) => (
                      <div key={idx} className="flex gap-4">
                        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                        <p className="text-gray-600 leading-relaxed text-lg italic">
                          {p}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="mt-10 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all"
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

export default TrainingServices;