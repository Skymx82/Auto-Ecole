"use client";

import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

const permisB = [
  {
    id: 'basique',
    name: 'Formule Classique',
    price: '999€',
    description: 'Formation complète sur Fiat 500, idéale pour apprendre à votre rythme.',
    subtitle: 'Fiat 500 Rouge',
    image: '/images/fiatrouge.jpg',
    features: [
      { name: 'Frais d\'inscription', included: true },
      { name: 'Fournitures pédagogiques', included: true },
      { name: 'Accès illimité à la plateforme de code en ligne', included: true },
      { name: 'Cours de code en salle', included: true, details: '20 séances' },
      { name: 'Présentation à l\'examen du code', included: true, details: '1 présentation' },
      { name: 'Heures de conduite sur Fiat 500', included: true, details: '20 heures' },
      { name: 'Présentation à l\'examen pratique', included: true, details: '1 présentation' },
      { name: 'Accompagnement personnalisé', included: true },
      { name: 'Simulateur de conduite', included: false },
      { name: 'Accès à l\'application mobile de suivi', included: true },
    ],
    highlight: false,
    color: 'bg-[#F5F5F5]',
    accentColor: 'bg-[#FF4242]',
    textColor: 'text-[#FF4242]',
    buttonColor: 'bg-[#FF4242] hover:bg-[#E03232]',
  },
  {
    id: 'confort',
    name: 'Formule Accélérée',
    price: '1299€',
    description: 'Formation intensive pour obtenir votre permis rapidement, en seulement un mois.',
    subtitle: 'Fiat 500 Blanche',
    image: '/images/fiatblanche.jpg',
    features: [
      { name: 'Frais d\'inscription', included: true },
      { name: 'Fournitures pédagogiques', included: true },
      { name: 'Accès illimité à la plateforme de code en ligne', included: true },
      { name: 'Cours de code en salle', included: true, details: 'Illimité' },
      { name: 'Présentation à l\'examen du code', included: true, details: '2 présentations' },
      { name: 'Heures de conduite sur Fiat 500', included: true, details: '30 heures' },
      { name: 'Présentation à l\'examen pratique', included: true, details: '1 présentation' },
      { name: 'Accompagnement personnalisé', included: true },
      { name: 'Simulateur de conduite', included: true, details: '2 heures' },
      { name: 'Accès à l\'application mobile de suivi', included: true },
    ],
    highlight: true,
    color: 'bg-[#F5F5F5]',
    accentColor: 'bg-[#212121]',
    textColor: 'text-[#212121]',
    buttonColor: 'bg-[#212121] hover:bg-[#333333]',
  },
  {
    id: 'premium',
    name: 'Formule Accompagnée',
    price: '1150€',
    description: 'Pour les jeunes dès 15 ans, apprentissage progressif avec un taux de réussite élevé.',
    subtitle: 'Fiat 500 Bleue',
    image: '/images/fiatbleue.jpg',
    features: [
      { name: 'Frais d\'inscription', included: true },
      { name: 'Fournitures pédagogiques', included: true },
      { name: 'Accès illimité à la plateforme de code en ligne', included: true },
      { name: 'Cours de code en salle', included: true, details: 'Illimité' },
      { name: 'Présentation à l\'examen du code', included: true, details: '2 présentations' },
      { name: 'Heures de conduite sur Fiat 500', included: true, details: '20 heures' },
      { name: 'Rendez-vous pédagogiques', included: true, details: '2 rendez-vous' },
      { name: 'Accompagnement personnalisé', included: true },
      { name: 'Suivi pendant la phase accompagnée', included: true, details: '1 an minimum' },
      { name: 'Accès à l\'application mobile de suivi', included: true },
    ],
    highlight: false,
    color: 'bg-[#F5F5F5]',
    accentColor: 'bg-[#8ECAE6]',
    textColor: 'text-[#8ECAE6]',
    buttonColor: 'bg-[#8ECAE6] hover:bg-[#7DB8D6]',
  }
];

const permisMoto = [
  {
    id: 'a1',
    name: 'Permis A1 (125cm³)',
    price: '790€',
    description: 'Pour les motos légères jusqu\'à 125cm³.',
    features: [
      { name: 'Frais d\'inscription', included: true },
      { name: 'Fournitures pédagogiques', included: true },
      { name: 'Formation théorique', included: true },
      { name: 'Présentation à l\'examen théorique', included: true, details: '1 présentation' },
      { name: 'Heures de plateau', included: true, details: '8 heures' },
      { name: 'Heures de circulation', included: true, details: '12 heures' },
      { name: 'Présentation à l\'examen pratique', included: true, details: '1 présentation' },
      { name: 'Équipements de sécurité', included: true },
    ],
    highlight: false,
    color: 'bg-gray-100',
    buttonColor: 'bg-gray-700 hover:bg-gray-800',
  },
  {
    id: 'a2',
    name: 'Permis A2',
    price: '890€',
    description: 'Pour les motos de puissance intermédiaire (jusqu\'à 35kW).',
    features: [
      { name: 'Frais d\'inscription', included: true },
      { name: 'Fournitures pédagogiques', included: true },
      { name: 'Formation théorique', included: true },
      { name: 'Présentation à l\'examen théorique', included: true, details: '1 présentation' },
      { name: 'Heures de plateau', included: true, details: '10 heures' },
      { name: 'Heures de circulation', included: true, details: '15 heures' },
      { name: 'Présentation à l\'examen pratique', included: true, details: '1 présentation' },
      { name: 'Équipements de sécurité', included: true },
    ],
    highlight: true,
    color: 'bg-red-50',
    buttonColor: 'bg-red-600 hover:bg-red-700',
  },
  {
    id: 'a',
    name: 'Formation A vers A2',
    price: '390€',
    description: 'Pour passer du permis A2 au permis A (toutes cylindrées).',
    features: [
      { name: 'Frais d\'inscription', included: true },
      { name: 'Fournitures pédagogiques', included: true },
      { name: 'Formation théorique', included: true },
      { name: 'Heures de plateau', included: true, details: '3 heures' },
      { name: 'Heures de circulation', included: true, details: '4 heures' },
      { name: 'Attestation de suivi de formation', included: true },
      { name: 'Équipements de sécurité', included: true },
    ],
    highlight: false,
    color: 'bg-blue-50',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
  }
];

const TarifsTable = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" id="permis-b">
            Tarifs Permis B
          </h2>
          <p className="text-lg text-gray-700">
            Choisissez la formule qui correspond le mieux à vos besoins et à votre budget.
            Tous nos tarifs incluent les frais d'inscription et les fournitures pédagogiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {permisB.map((formule, index) => (
            <motion.div
              key={formule.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl overflow-hidden shadow-md ${formule.highlight ? 'ring-2 ring-red-500 shadow-lg' : ''}`}
            >
              <div className={`p-6 ${formule.color}`}>
                {formule.highlight && (
                  <div className="text-center mb-2">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                      Le plus populaire
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 text-center">{formule.name}</h3>
                <div className="text-center my-4">
                  <span className="text-3xl font-bold text-gray-900">{formule.price}</span>
                </div>
                <p className="text-gray-700 text-center mb-4">{formule.description}</p>
              </div>
              
              <div className="p-6 bg-white">
                <ul className="space-y-3 mb-6">
                  {formule.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      {feature.included ? (
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      ) : (
                        <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      )}
                      <div>
                        <span className="text-gray-800">{feature.name}</span>
                        {feature.details && (
                          <span className="text-gray-500 text-sm block">{feature.details}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/contact" 
                  className={`block w-full ${formule.buttonColor} text-white text-center font-semibold py-3 px-6 rounded-lg transition duration-300`}
                >
                  Choisir cette formule
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" id="permis-moto">
            Tarifs Permis Moto
          </h2>
          <p className="text-lg text-gray-700">
            Nos formations moto pour tous les types de permis deux-roues.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {permisMoto.map((formule, index) => (
            <motion.div
              key={formule.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl overflow-hidden shadow-md ${formule.highlight ? 'ring-2 ring-red-500 shadow-lg' : ''}`}
            >
              <div className={`p-6 ${formule.color}`}>
                {formule.highlight && (
                  <div className="text-center mb-2">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                      Le plus demandé
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 text-center">{formule.name}</h3>
                <div className="text-center my-4">
                  <span className="text-3xl font-bold text-gray-900">{formule.price}</span>
                </div>
                <p className="text-gray-700 text-center mb-4">{formule.description}</p>
              </div>
              
              <div className="p-6 bg-white">
                <ul className="space-y-3 mb-6">
                  {formule.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      {feature.included ? (
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      ) : (
                        <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      )}
                      <div>
                        <span className="text-gray-800">{feature.name}</span>
                        {feature.details && (
                          <span className="text-gray-500 text-sm block">{feature.details}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/contact" 
                  className={`block w-full ${formule.buttonColor} text-white text-center font-semibold py-3 px-6 rounded-lg transition duration-300`}
                >
                  Choisir cette formule
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-16"
        >
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Prestations à l'unité</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-gray-900">Prestation</th>
                    <th className="py-3 px-4 text-gray-900 text-right">Tarif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Heure de conduite supplémentaire</td>
                    <td className="py-3 px-4 text-gray-900 font-semibold text-right">45€</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Présentation à l'examen du code</td>
                    <td className="py-3 px-4 text-gray-900 font-semibold text-right">30€</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Présentation à l'examen pratique</td>
                    <td className="py-3 px-4 text-gray-900 font-semibold text-right">99€</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Évaluation de départ</td>
                    <td className="py-3 px-4 text-gray-900 font-semibold text-right">45€ <span className="text-sm text-gray-500">(offerte pour toute inscription)</span></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Heure de simulateur</td>
                    <td className="py-3 px-4 text-gray-900 font-semibold text-right">35€</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Accompagnement à l'examen</td>
                    <td className="py-3 px-4 text-gray-900 font-semibold text-right">45€</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TarifsTable;
