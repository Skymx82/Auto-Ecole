"use client";

import { motion } from 'framer-motion';

const ContactHero = () => {
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
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre formation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#form" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              Formulaire de contact
            </a>
            <a href="tel:+33123456789" className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-full transition duration-300">
              01 23 45 67 89
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
