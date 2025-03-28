"use client";

import { motion } from 'framer-motion';
import { FaQuestionCircle, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const FAQHero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez implémenter la logique de recherche
    console.log('Recherche pour:', searchQuery);
  };

  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
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
            <FaQuestionCircle className="text-2xl text-[#FF4242]" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">
            Questions Fréquemment Posées
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Trouvez rapidement des réponses à vos questions sur nos formations, nos Fiat 500 et le déroulement des cours de conduite
          </p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-4 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4242] focus:border-transparent"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#FF4242] text-white px-3 py-1 rounded-md text-sm hover:bg-[#E03232] transition duration-200"
              >
                Rechercher
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQHero;
