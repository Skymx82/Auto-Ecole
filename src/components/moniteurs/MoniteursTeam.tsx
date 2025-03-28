"use client";

import { motion } from 'framer-motion';
import { FaCar, FaGraduationCap, FaSmile } from 'react-icons/fa';

// Version simplifiée des moniteurs avec moins d'informations
const moniteurs = [
  {
    id: 1,
    name: 'Thomas Dubois',
    role: 'Directeur pédagogique',
    experience: '15 ans',
    specialite: 'Formule classique sur Fiat 500',
    image: '/images/placeholder-male.jpg',
    color: 'bg-[#FF4242]'
  },
  {
    id: 2,
    name: 'Sophie Martin',
    role: 'Monitrice principale',
    experience: '8 ans',
    specialite: 'Formule accélérée sur Fiat 500',
    image: '/images/placeholder-female.jpg',
    color: 'bg-[#212121]'
  },
  {
    id: 3,
    name: 'Julie Moreau',
    role: 'Monitrice',
    experience: '5 ans',
    specialite: 'Conduite accompagnée sur Fiat 500',
    image: '/images/placeholder-female.jpg',
    color: 'bg-[#8ECAE6]'
  }
];

const MoniteursTeam = () => {
  return (
    <section className="py-16 bg-white" id="team">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">
            Notre équipe Fiat 500
          </h2>
          <p className="text-lg text-[#212121]">
            Des moniteurs passionnés, experts de la Fiat 500 pour vous accompagner
            vers la réussite de votre permis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {moniteurs.map((moniteur, index) => (
            <motion.div
              key={moniteur.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-40">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600" />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className={`absolute top-3 right-3 ${moniteur.color} text-white text-xs font-medium px-2 py-1 rounded-lg`}>
                  {moniteur.experience}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                  <h3 className="text-xl font-bold">{moniteur.name}</h3>
                  <p className="text-sm">{moniteur.role}</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <FaCar className="text-[#FF4242] mr-2" />
                  <span className="text-[#212121] text-sm">{moniteur.specialite}</span>
                </div>
                
                <a 
                  href="/contact" 
                  className="mt-2 w-full inline-block text-center py-2 bg-[#F5F5F5] text-[#212121] text-sm font-medium rounded-lg hover:bg-gray-100 transition duration-300"
                >
                  Prendre RDV
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-6 bg-[#F5F5F5] rounded-xl shadow-sm"
        >
          <h3 className="text-2xl font-bold text-[#212121] mb-8 text-center">Pourquoi choisir nos moniteurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <FaGraduationCap className="text-2xl text-[#FF4242]" />
              </div>
              <h4 className="font-medium text-[#212121] mb-2">Diplômés d'État</h4>
              <p className="text-[#212121] text-center text-sm">
                Des moniteurs certifiés pour un apprentissage de qualité
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <FaCar className="text-2xl text-[#212121]" />
              </div>
              <h4 className="font-medium text-[#212121] mb-2">Experts Fiat 500</h4>
              <p className="text-[#212121] text-center text-sm">
                Spécialistes de votre voiture de formation
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <FaSmile className="text-2xl text-[#8ECAE6]" />
              </div>
              <h4 className="font-medium text-[#212121] mb-2">Pédagogie moderne</h4>
              <p className="text-[#212121] text-center text-sm">
                Approche adaptée à votre rythme d'apprentissage
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoniteursTeam;
