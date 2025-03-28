"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaCar, FaCarSide, FaGraduationCap, FaUserFriends } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Permis B sur Fiat 500',
    description: 'Formez-vous sur notre flotte de Fiat 500, véhicules idéaux pour l’apprentissage : compacts, modernes et faciles à maîtriser.',
    image: '/images/fiat500-permis.jpg',
    icon: <FaCar className="text-3xl text-[#FF4242]" />,
    link: '/formations/permis-b'
  },
  {
    id: 2,
    title: 'Permis Accéléré',
    description: 'Obtenez votre permis en un temps record grâce à notre formule intensive. Idéal si vous avez besoin de votre permis rapidement.',
    image: '/images/fiat500-accelere.jpg',
    icon: <FaCarSide className="text-3xl text-[#FF4242]" />,
    link: '/formations/permis-accelere'
  },
  {
    id: 3,
    title: 'Code de la Route',
    description: 'Préparation au code avec accès illimité à notre plateforme d\'entraînement en ligne et sessions avec moniteur.',
    image: '/images/code-route.jpg',
    icon: <FaGraduationCap className="text-3xl text-[#FF4242]" />,
    link: '/formations/code-route'
  },
  {
    id: 4,
    title: 'Conduite Accompagnée',
    description: 'Formule idéale pour les jeunes conducteurs, avec apprentissage en Fiat 500 et suivi personnalisé.',
    image: '/images/fiat500-accompagnee.jpg',
    icon: <FaUserFriends className="text-3xl text-[#FF4242]" />,
    link: '/formations/conduite-accompagnee'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">Nos Formations sur Fiat 500</h2>
          <p className="text-lg text-[#212121] max-w-3xl mx-auto">
            Toutes nos formations sont réalisées sur des Fiat 500, véhicules idéaux pour 
            apprendre à conduire avec facilité et confiance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                {/* Ici nous utilisons une div avec une couleur de fond en attendant les vraies images */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600">
                  {/* Remplacer cette div par une vraie image quand disponible */}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center">
                    <div className="bg-[#FF4242] p-2 rounded-lg mr-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-[#212121] mb-5">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={service.link}
                    className="text-[#FF4242] font-medium hover:text-[#E03232] transition duration-200 flex items-center"
                  >
                    Détails et tarifs
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/formations"
            className="inline-block bg-[#FF4242] hover:bg-[#E03232] text-white font-semibold rounded-lg px-8 py-3 shadow-md hover:shadow-lg transition duration-300"
          >
            Voir toutes nos formations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
