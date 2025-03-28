"use client";

import { motion } from 'framer-motion';
import { FaClipboardList, FaBook, FaCarSide, FaIdCard } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Évaluation initiale',
    description: 'Nous évaluons votre niveau de départ pour vous proposer la formule la plus adaptée.',
    icon: <FaClipboardList className="text-3xl text-white" />
  },
  {
    id: 2,
    title: 'Formation Code',
    description: 'Accès à notre plateforme en ligne et séances en salle avec moniteur pour maîtriser le code.',
    icon: <FaBook className="text-3xl text-white" />
  },
  {
    id: 3,
    title: 'Leçons de conduite',
    description: 'Apprentissage pratique sur route avec nos véhicules à double commande et moniteurs diplômés.',
    icon: <FaCarSide className="text-3xl text-white" />
  },
  {
    id: 4,
    title: 'Examen et Permis',
    description: 'Préparation aux examens et accompagnement jusqu\'à l\'obtention de votre permis.',
    icon: <FaIdCard className="text-3xl text-white" />
  }
];

const ProcessSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça marche</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Notre processus simple en quatre étapes pour vous accompagner vers l'obtention de votre permis en toute sérénité.
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
          className="max-w-2xl mx-auto text-center mt-16 bg-gray-800 p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Vous avez des questions ?</h3>
          <p className="text-gray-300 mb-6">
            N'hésitez pas à nous contacter ou à consulter notre FAQ pour obtenir plus d'informations sur nos formations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/faq" 
              className="bg-transparent hover:bg-gray-700 border-2 border-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Consulter la FAQ
            </a>
            <a 
              href="/contact" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Nous contacter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
