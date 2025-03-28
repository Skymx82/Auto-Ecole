"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCar } from 'react-icons/fa';

const FormationsHero = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Image de fond */}
      <div className="absolute right-0 top-0 w-2/5 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white z-10" />
        <div className="relative h-full w-full">
          <Image
            src="/images/fiat500-side.jpg" 
            alt="Fiat 500 d'auto-école"
            fill
            className="object-cover object-left"
            priority
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center bg-[#FF4242] text-white px-4 py-2 rounded-lg">
            <FaCar className="mr-2" />
            <span className="font-medium">Formation sur Fiat 500</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Apprenez à conduire sur <span className="text-[#FF4242]">Fiat 500</span>
          </h1>
          
          <p className="text-xl text-[#212121] mb-8">
            Des formations adaptées à votre rythme, sur des véhicules compacts et faciles à maîtriser.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#permis-b" className="bg-[#FF4242] hover:bg-[#E03232] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Permis B classique
            </a>
            <a href="#permis-accelere" className="bg-[#212121] hover:bg-[#333333] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Permis accéléré
            </a>
            <a href="#conduite-accompagnee" className="bg-white border-2 border-[#FF4242] text-[#FF4242] hover:bg-[#FFF5F5] font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Conduite accompagnée
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormationsHero;
