"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaPercent } from 'react-icons/fa';

const TarifsHero = () => {
  return (
    <section className="relative py-16 bg-white">
      {/* Badge de transparence */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
        <div className="bg-[#FF4242] text-white font-bold py-2 px-4 rounded-lg shadow-md flex items-center">
          <FaPercent className="mr-2" />
          <span>Prix transparents</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-[#F5F5F5] inline-block rounded-full py-2 px-5 mb-6">
            <div className="flex items-center text-[#212121]">
              <FaMoneyBillWave className="mr-2" />
              <span className="font-medium">Adaptés à tous les budgets</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Tarifs de nos formations<br/>
            <span className="text-[#FF4242]">sur Fiat 500</span>
          </h1>
          
          <p className="text-xl text-[#212121] mb-8">
            Des formules claires et détaillées pour vous permettre de choisir celle qui correspond le mieux à vos besoins.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#permis-b" className="bg-[#FF4242] hover:bg-[#E03232] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Formules permis B
            </a>
            <a href="#financement" className="bg-[#212121] hover:bg-[#333333] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Options de financement
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TarifsHero;
