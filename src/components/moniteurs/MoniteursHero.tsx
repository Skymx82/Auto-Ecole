"use client";

import { motion } from 'framer-motion';

const MoniteursHero = () => {
  return (
    <section className="relative py-20 bg-gray-50">
      {/* Fond avec motif subtil */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-gray-50 opacity-80" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre Équipe de Moniteurs
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Des professionnels passionnés et diplômés d'État qui vous accompagnent vers la réussite de votre permis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#team" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              Découvrir l'équipe
            </a>
            <a href="/contact" className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-full transition duration-300">
              Prendre rendez-vous
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoniteursHero;
