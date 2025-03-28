"use client";

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaUsers, FaHandshake } from 'react-icons/fa';

const avantages = [
  {
    id: 1,
    title: 'Environnement stimulant',
    description: 'Rejoignez une équipe dynamique et passionnée par l\'enseignement de la conduite.',
    icon: <FaUsers className="text-3xl text-white" />
  },
  {
    id: 2,
    title: 'Formation continue',
    description: 'Bénéficiez de formations régulières pour développer vos compétences pédagogiques.',
    icon: <FaGraduationCap className="text-3xl text-white" />
  },
  {
    id: 3,
    title: 'Évolution de carrière',
    description: 'Des opportunités d\'évolution vers des postes de responsabilité au sein de notre structure.',
    icon: <FaBriefcase className="text-3xl text-white" />
  },
  {
    id: 4,
    title: 'Conditions attractives',
    description: 'Rémunération compétitive, véhicules récents et planning adapté à vos contraintes.',
    icon: <FaHandshake className="text-3xl text-white" />
  }
];

const MoniteursJoin = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez notre équipe
          </h2>
          <p className="text-lg text-gray-300">
            Vous êtes moniteur d'auto-école et vous partagez nos valeurs ? 
            Nous sommes toujours à la recherche de talents pour renforcer notre équipe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {avantages.map((avantage, index) => (
            <motion.div
              key={avantage.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {avantage.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{avantage.title}</h3>
              <p className="text-gray-400 text-center">
                {avantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16 bg-gray-800 p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Nous recherchons actuellement</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-700 rounded-lg p-6">
              <h4 className="font-bold text-xl mb-3">Moniteur auto (H/F)</h4>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Titulaire du BEPECASER ou TP ECSR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Expérience minimum de 2 ans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Temps plein ou temps partiel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>CDI après période d'essai</span>
                </li>
              </ul>
              <a 
                href="/contact?subject=Candidature%20Moniteur%20Auto" 
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Postuler
              </a>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-6">
              <h4 className="font-bold text-xl mb-3">Moniteur moto (H/F)</h4>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Titulaire du BEPECASER mention deux-roues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Expérience minimum de 3 ans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Passionné de moto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>CDI après période d'essai</span>
                </li>
              </ul>
              <a 
                href="/contact?subject=Candidature%20Moniteur%20Moto" 
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Postuler
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-6">
              Vous ne trouvez pas le poste qui vous correspond ? Envoyez-nous une candidature spontanée !
            </p>
            <a 
              href="/contact?subject=Candidature%20Spontanée" 
              className="inline-block bg-transparent hover:bg-gray-700 border-2 border-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Candidature spontanée
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoniteursJoin;
