"use client";

import { motion } from 'framer-motion';
import { FaUserCheck, FaBook, FaCarSide, FaIdCard } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Évaluation initiale',
    description: 'Un moniteur évalue votre niveau de départ pour déterminer le nombre d\'heures de formation nécessaires.',
    icon: <FaUserCheck className="text-3xl text-white" />
  },
  {
    id: 2,
    title: 'Formation théorique',
    description: 'Préparez l\'examen du code de la route avec notre plateforme en ligne et nos cours en salle.',
    icon: <FaBook className="text-3xl text-white" />
  },
  {
    id: 3,
    title: 'Formation pratique',
    description: 'Apprenez à conduire avec nos moniteurs diplômés sur des véhicules récents à double commande.',
    icon: <FaCarSide className="text-3xl text-white" />
  },
  {
    id: 4,
    title: 'Passage des examens',
    description: 'Nous vous accompagnons pour les examens théorique et pratique jusqu\'à l\'obtention de votre permis.',
    icon: <FaIdCard className="text-3xl text-white" />
  }
];

const FormationsProcess = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Le Parcours vers votre Permis</h2>
          <p className="text-lg text-gray-300">
            Notre méthode en 4 étapes pour vous accompagner efficacement vers l'obtention de votre permis de conduire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Ligne de connexion entre les étapes */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-1 bg-red-600 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {step.icon}
                <span className="absolute -right-2 -top-2 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-red-600">
                  {step.id}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-16 bg-gray-800 p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Prêt à commencer votre formation ?</h3>
          <p className="text-gray-300 mb-6">
            Prenez rendez-vous pour une évaluation gratuite et sans engagement. Nous vous proposerons une formule adaptée à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Prendre rendez-vous
            </a>
            <a 
              href="/tarifs" 
              className="bg-transparent hover:bg-gray-700 border-2 border-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Voir nos tarifs détaillés
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormationsProcess;
