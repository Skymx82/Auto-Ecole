"use client";

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

const FormationsCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-red-600 to-red-700 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Prêt à prendre le volant ?</h2>
              <p className="text-white/90 mb-6">
                Commencez votre formation dès maintenant et bénéficiez d'un accompagnement personnalisé jusqu'à l'obtention de votre permis.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="bg-white/20 p-2 rounded-full mr-3">✓</span>
                  <span>Évaluation initiale gratuite</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-white/20 p-2 rounded-full mr-3">✓</span>
                  <span>Formules adaptées à tous les budgets</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-white/20 p-2 rounded-full mr-3">✓</span>
                  <span>Moniteurs expérimentés et pédagogues</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-white/20 p-2 rounded-full mr-3">✓</span>
                  <span>Paiement en plusieurs fois sans frais</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="flex items-center justify-center bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  <FaCalendarAlt className="mr-2" />
                  Prendre rendez-vous
                </a>
                <a 
                  href="tel:+33123456789" 
                  className="flex items-center justify-center bg-transparent hover:bg-red-800 border-2 border-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  <FaPhoneAlt className="mr-2" />
                  01 23 45 67 89
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
              {/* Image de fond */}
              <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                <span className="text-white text-xl">Image d'une personne heureuse avec son permis</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos partenaires</h3>
          <p className="text-gray-700 mb-8">
            Nous travaillons avec des organismes reconnus pour vous offrir les meilleures conditions de formation.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-100 p-4 rounded-lg w-40 h-20 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Sécurité Routière</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg w-40 h-20 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Permis à 1€</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg w-40 h-20 flex items-center justify-center">
              <span className="text-gray-500 font-medium">CPF Formation</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg w-40 h-20 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Pôle Emploi</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormationsCTA;
