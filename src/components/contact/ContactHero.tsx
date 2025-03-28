"use client";

import { motion } from 'framer-motion';
import { FaCar, FaCalendarAlt, FaPhoneAlt, FaCheckCircle, FaShieldAlt, FaGraduationCap } from 'react-icons/fa';

const ContactHero = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Forme décorative */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#FF4242] opacity-3 rounded-bl-[100px] transform translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#212121] opacity-3 rounded-tr-[100px] transform -translate-x-1/4" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <motion.span 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-block px-4 py-1 bg-red-50 text-[#FF4242] rounded-full text-sm font-medium mb-4"
              >
                La conduite simplifiée
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4 leading-tight">
                Votre <span className="relative inline-block">
                  <span className="relative z-10">permis</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-red-100 -z-10 transform -rotate-1"></span>
                </span> avec notre <span className="text-[#FF4242]">Fiat 500</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Débutez votre apprentissage de la conduite dans nos véhicules compacts, modernes et sécurisants. Prenez rendez-vous en quelques clics.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                    <FaCheckCircle className="text-green-500 text-sm" />
                  </div>
                  <p className="text-gray-700">Apprentissage personnalisé selon votre rythme</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                    <FaCheckCircle className="text-green-500 text-sm" />
                  </div>
                  <p className="text-gray-700">Moniteurs expérimentés et certifiés</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                    <FaCheckCircle className="text-green-500 text-sm" />
                  </div>
                  <p className="text-gray-700">Véhicules Fiat 500 récents et sécurisants</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="#rdv" 
                  className="flex items-center gap-2 bg-[#FF4242] hover:bg-[#E03232] text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md"
                >
                  <FaCalendarAlt />
                  Réserver maintenant
                </a>
                <a 
                  href="tel:+33123456789" 
                  className="flex items-center gap-2 bg-white border border-gray-200 text-[#212121] hover:border-gray-300 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  <FaPhoneAlt className="text-[#FF4242]" />
                  01 23 45 67 89
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-gray-500 border-t border-gray-100 pt-4">
                <FaGraduationCap className="text-[#FF4242]" /> 
                <span>Taux de réussite supérieur à la moyenne nationale</span>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full max-w-md"
              >
                {/* Image principale de la Fiat 500 */}
                <div className="rounded-2xl overflow-hidden shadow-xl border-8 border-white bg-gradient-to-br from-red-500 to-red-600 aspect-[4/3] relative">
                  <img 
                    src="/images/adam.jpg" 
                    alt="Fiat 500 Rouge" 
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-500/50 to-transparent mix-blend-overlay z-1"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                  </div>
                </div>
                
                {/* Badge en bas à droite */}
                <div className="absolute -bottom-3 -right-3 bg-white text-[#212121] py-2 px-4 rounded-lg shadow-md text-sm font-medium border border-gray-100 flex items-center gap-2">
                  <FaShieldAlt className="text-[#FF4242]" />
                  <span>Sécurité maximale</span>
                </div>
                
                {/* Badge en haut à gauche */}
                <div className="absolute -top-3 -left-3 bg-[#FF4242] text-white py-1 px-3 rounded-lg shadow-md text-xs font-bold">
                  Fiat 500
                </div>
                
                {/* Annotations sur l'image */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-1/4 -right-12 bg-white px-3 py-2 rounded-lg shadow-md text-xs text-[#212121] font-medium z-20 hidden md:block"
                >
                  <div className="arrow-left"></div>
                  Compacte et facile à manoeuvrer
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-1/4 -left-12 bg-white px-3 py-2 rounded-lg shadow-md text-xs text-[#212121] font-medium z-20 hidden md:block"
                >
                  <div className="arrow-right"></div>
                  Double commande sécurisante
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Badges de confiance */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <FaCar className="text-[#FF4242]" />
              </div>
              <span>Véhicules récents</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <FaCalendarAlt className="text-[#FF4242]" />
              </div>
              <span>Disponibilité rapide</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <FaShieldAlt className="text-[#FF4242]" />
              </div>
              <span>Sécurité renforcée</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <FaGraduationCap className="text-[#FF4242]" />
              </div>
              <span>Excellence pédagogique</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Styles spécifiques pour les flèches */}
      <style jsx>{`
        .arrow-left:before {
          content: '';
          position: absolute;
          left: -5px;
          top: 50%;
          transform: translateY(-50%);
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent; 
          border-right: 5px solid white;
        }
        .arrow-right:before {
          content: '';
          position: absolute;
          right: -5px;
          top: 50%;
          transform: translateY(-50%);
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 5px solid white;
        }
      `}</style>
    </section>
  );
};

export default ContactHero;
