"use client";

import { motion } from 'framer-motion';
import { FaUserFriends, FaChalkboardTeacher, FaShieldAlt, FaSmile } from 'react-icons/fa';

const values = [
  {
    id: 1,
    title: 'Pédagogie adaptée',
    description: 'Nous adaptons notre méthode d\'enseignement à chaque élève, en tenant compte de son rythme d\'apprentissage et de ses besoins spécifiques.',
    icon: <FaChalkboardTeacher className="text-4xl text-red-600" />
  },
  {
    id: 2,
    title: 'Bienveillance',
    description: 'Nous créons un environnement d\'apprentissage positif et bienveillant où l\'erreur est considérée comme une étape normale de l\'apprentissage.',
    icon: <FaSmile className="text-4xl text-blue-600" />
  },
  {
    id: 3,
    title: 'Sécurité avant tout',
    description: 'Nous mettons l\'accent sur la sécurité routière et la responsabilité au volant, bien au-delà de la simple réussite à l\'examen.',
    icon: <FaShieldAlt className="text-4xl text-green-600" />
  },
  {
    id: 4,
    title: 'Accompagnement personnalisé',
    description: 'Nous vous accompagnons tout au long de votre formation avec un suivi régulier et des conseils personnalisés pour maximiser vos chances de réussite.',
    icon: <FaUserFriends className="text-4xl text-purple-600" />
  }
];

const MoniteursValues = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Philosophie d'Enseignement
          </h2>
          <p className="text-lg text-gray-700">
            Au-delà de la technique, nous transmettons des valeurs et une approche responsable de la conduite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre engagement qualité</h3>
              <p className="text-gray-700 mb-4">
                Nous nous engageons à maintenir un haut niveau de qualité dans notre enseignement. Tous nos moniteurs suivent régulièrement des formations pour rester à jour des dernières évolutions réglementaires et pédagogiques.
              </p>
              <p className="text-gray-700">
                Notre objectif n'est pas seulement de vous faire obtenir votre permis, mais de faire de vous un conducteur responsable et sûr pour les années à venir.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3 text-center">Nos engagements</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                  <span className="text-gray-700">Ponctualité et respect des horaires</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                  <span className="text-gray-700">Véhicules propres et bien entretenus</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                  <span className="text-gray-700">Suivi pédagogique personnalisé</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                  <span className="text-gray-700">Transparence sur votre progression</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                  <span className="text-gray-700">Respect et bienveillance</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoniteursValues;
