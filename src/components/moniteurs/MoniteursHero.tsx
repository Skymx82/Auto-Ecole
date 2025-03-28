"use client";

import { motion } from 'framer-motion';

const MoniteursHero = () => {
  return (
    <section className="relative py-20 bg-[#F5F5F5]">
      {/* Fond avec dégradé subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F5F5F5] opacity-80" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4">
            Nos Moniteurs
          </h1>
          <p className="text-xl text-[#212121] mb-8">
            Passionnés, certifiés et expérimentés pour vous accompagner sur votre Fiat 500.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#team" className="bg-[#FF4242] hover:bg-[#E03232] text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md">
              Découvrir l'équipe
            </a>
            <a href="/contact" className="bg-white border border-[#212121] text-[#212121] hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition duration-300 shadow-sm">
              Prendre rendez-vous
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoniteursHero;
