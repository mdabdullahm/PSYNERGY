"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const FloatingContact = () => {
  // আপনার ফোন নম্বর এখানে দিন
  const phoneNumber = "+880123456789"; 
  const whatsappNumber = "880123456789"; // কান্ট্রি কোডসহ শুধু নম্বর

  return (
    <div className="fixed bottom-6 w-full px-6 flex justify-between items-center pointer-events-none z-[999]">
      
      {/* Left Side: WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-200 hover:bg-green-600 transition-colors group relative"
      >
        <MessageCircle size={28} fill="currentColor" />
        {/* Tooltip */}
        <span className="absolute left-16 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Right Side: Direct Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors group relative"
      >
        <Phone size={28} fill="currentColor" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Now
        </span>
      </motion.a>

    </div>
  );
};

export default FloatingContact;