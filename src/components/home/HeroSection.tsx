"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCar, FaGraduationCap, FaThumbsUp, FaCheck } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-8 pb-16">
      {/* Fond avec motif de route */}
      <div className="absolute inset-0 bg-[#F5F5F5] opacity-50 z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FF4242] to-transparent opacity-10" />
      
      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:pr-12 order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#212121] leading-tight">
              <span className="block">Conduisez avec</span>
              <span className="text-[#FF4242]">style & confiance</span>
            </h1>

            <p className="text-lg text-[#212121] md:pr-12">
              Commencez votre apprentissage sur notre flotte de Fiat 500 : compactes, 
              modernes et faciles à maîtriser - le véhicule idéal pour les nouveaux conducteurs.  
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/formations"
                className="bg-[#FF4242] hover:bg-[#E03232] text-white font-semibold rounded-lg px-8 py-4 text-center transition duration-300 shadow-md hover:shadow-lg"
              >
                Découvrir nos formations
              </Link>
              <Link 
                href="/contact"
                className="bg-white border-2 border-[#FF4242] text-[#FF4242] hover:bg-[#FF4242] hover:text-white font-semibold rounded-lg px-8 py-4 text-center transition duration-300 shadow-sm hover:shadow-md"
              >
                Prendre rendez-vous
              </Link>
            </div>

            {/* Points forts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <FaCar className="text-[#FF4242] text-2xl mr-3" />
                <span className="text-[#212121] font-medium">Apprentissage sur Fiat 500</span>
              </div>
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <FaGraduationCap className="text-[#FF4242] text-2xl mr-3" />
                <span className="text-[#212121] font-medium">90% de réussite</span>
              </div>
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <FaThumbsUp className="text-[#FF4242] text-2xl mr-3" />
                <span className="text-[#212121] font-medium">Satisfaction garantie</span>
              </div>
            </div>
          </motion.div>

          {/* Image Fiat 500 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero.jpg"
                alt="Fiat 500 rouge pour l'apprentissage de la conduite"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/4 opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-bold text-xl">Fiat 500</p>
                <p className="text-sm">Apprenez sur le véhicule idéal pour les débutants</p>
              </div>
            </div>
            
            {/* Badge de taux de réussite */}
            <div className="absolute -bottom-4 -right-4 bg-white py-3 px-5 rounded-lg shadow-lg z-10">
              <div className="flex items-center space-x-2">
                <FaCheck className="text-[#FF4242] text-xl" />
                <div>
                  <div className="text-[#FF4242] font-bold text-xl">94%</div>
                  <div className="text-[#212121] text-xs">de réussite</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
