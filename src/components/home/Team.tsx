"use client";
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Mansur",
    role: "Clinical Psychologist",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Ariful Islam",
    role: "Senior Counselor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Tanvir Ahmed",
    role: "Addiction Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Nusrat Jahan",
    role: "Mental Health Advocate",
    image: "https://i.ibb.co.com/7JwVn1Tm/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-widest mb-3"
          >
            Experts Behind Psynergy
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Professional Team
          </motion.h2>
          <p className="text-gray-600 text-lg">
            Meet our certified professionals who are dedicated to supporting your mental health journey with care and expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Member Image Card */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 shadow-lg shadow-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />

                {/* Social Media Overlay on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-blue-600/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4"
                >
                  {member.socials.facebook && (
                    <motion.a 
                      whileHover={{ y: -5 }} 
                      href={member.socials.facebook} 
                      className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Facebook size={20} />
                    </motion.a>
                  )}
                  {member.socials.linkedin && (
                    <motion.a 
                      whileHover={{ y: -5 }} 
                      href={member.socials.linkedin} 
                      className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                  )}
                  {member.socials.instagram && (
                    <motion.a 
                      whileHover={{ y: -5 }} 
                      href={member.socials.instagram} 
                      className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Instagram size={20} />
                    </motion.a>
                  )}
                  {member.socials.twitter && (
                    <motion.a 
                      whileHover={{ y: -5 }} 
                      href={member.socials.twitter} 
                      className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Twitter size={20} />
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Member Details */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;