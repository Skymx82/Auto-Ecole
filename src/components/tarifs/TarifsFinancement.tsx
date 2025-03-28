"use client";

import { motion } from 'framer-motion';
import { FaCreditCard, FaHandHoldingUsd, FaUniversity, FaGraduationCap } from 'react-icons/fa';

const financements = [
  {
    id: 'permis1euro',
    title: 'Permis à 1€ par jour',
    description: 'Un prêt à taux zéro pour financer votre formation au permis de conduire. Remboursement de 30€ par mois maximum.',
    eligibilite: 'Jeunes de 15 à 25 ans',
    icon: <FaCreditCard className="text-4xl text-red-600" />,
    link: '/financement/permis-1-euro'
  },
  {
    id: 'cpf',
    title: 'Compte Personnel de Formation (CPF)',
    description: 'Utilisez vos droits à la formation pour financer votre permis de conduire.',
    eligibilite: 'Salariés et demandeurs d\'emploi',
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
    link: '/financement/cpf'
  },
  {
    id: 'poleemploi',
    title: 'Aide Pôle Emploi',
    description: 'Financement partiel ou total de votre permis si celui-ci constitue un frein à votre retour à l\'emploi.',
    eligibilite: 'Demandeurs d\'emploi',
    icon: <FaHandHoldingUsd className="text-4xl text-green-600" />,
    link: '/financement/pole-emploi'
  },
  {
    id: 'facilites',
    title: 'Facilités de paiement',
    description: 'Paiement en plusieurs fois sans frais, adapté à votre budget.',
    eligibilite: 'Tous nos élèves',
    icon: <FaUniversity className="text-4xl text-purple-600" />,
    link: '/financement/facilites'
  }
];

const TarifsFinancement = () => {
  return (
    <section className="py-16 bg-white" id="financement">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Options de Financement
          </h2>
          <p className="text-lg text-gray-700">
            Plusieurs solutions existent pour vous aider à financer votre permis de conduire.
            Nous vous accompagnons dans vos démarches administratives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {financements.map((financement, index) => (
            <motion.div
              key={financement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {financement.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {financement.title}
              </h3>
              <p className="text-gray-700 mb-4 text-center">
                {financement.description}
              </p>
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-semibold">Éligibilité :</span> {financement.eligibilite}
                </p>
              </div>
              <div className="text-center">
                <a
                  href={financement.link}
                  className="inline-block text-red-600 font-medium hover:text-red-700 hover:underline transition duration-200"
                >
                  En savoir plus
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 bg-gray-50 rounded-xl p-8 shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Besoin de conseils pour le financement ?</h3>
              <p className="text-gray-700">
                Nos conseillers sont à votre disposition pour vous aider à trouver la solution de financement la plus adaptée à votre situation.
              </p>
            </div>
            <a 
              href="/contact" 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 whitespace-nowrap"
            >
              Prendre rendez-vous
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TarifsFinancement;
