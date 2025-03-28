"use client";

import { motion } from 'framer-motion';
import { FaBalanceScale, FaFileAlt } from 'react-icons/fa';

const MentionsLegalesHero = () => {
  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      {/* Forme décorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF4242] opacity-3 rounded-bl-[100px] transform translate-x-1/4" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-6">
            <FaBalanceScale className="text-2xl text-[#FF4242]" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">
            Mentions Légales
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Informations juridiques, politique de confidentialité et conditions d'utilisation de notre auto-école
          </p>
          
          <div className="flex items-center justify-center text-sm text-gray-500">
            <FaFileAlt className="mr-2 text-[#FF4242]" />
            <span>Dernière mise à jour : 28 mars 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentionsLegalesHero;
