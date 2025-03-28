"use client";

import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

const formules = [
  {
    id: 'traditionnel',
    name: 'Permis B Traditionnel',
    price: 'À partir de 999€',
    duree: '3 à 6 mois',
    age: 'Dès 17 ans',
    tauxReussite: '55%',
    avantages: [
      'Formation classique',
      'Horaires flexibles',
      'Passage de l\'examen dès 18 ans'
    ],
    inconvenients: [
      'Moins d\'expérience de conduite',
      'Assurance plus chère après obtention',
      'Période probatoire de 3 ans'
    ]
  },
  {
    id: 'accompagnee',
    name: 'Conduite Accompagnée (AAC)',
    price: 'À partir de 1150€',
    duree: 'Minimum 1 an',
    age: 'Dès 15 ans',
    tauxReussite: '74%',
    avantages: [
      'Taux de réussite plus élevé',
      'Plus d\'expérience (3000 km minimum)',
      'Réduction sur l\'assurance',
      'Période probatoire réduite à 2 ans'
    ],
    inconvenients: [
      'Durée plus longue',
      'Nécessite un accompagnateur',
      'Rendez-vous pédagogiques obligatoires'
    ]
  },
  {
    id: 'supervisee',
    name: 'Conduite Supervisée',
    price: 'À partir de 1050€',
    duree: 'Variable',
    age: 'Dès 18 ans',
    tauxReussite: '65%',
    avantages: [
      'Plus d\'expérience avant l\'examen',
      'Pas de durée minimale',
      'Flexible pour les adultes'
    ],
    inconvenients: [
      'Pas de réduction sur l\'assurance',
      'Période probatoire de 3 ans',
      'Nécessite un accompagnateur'
    ]
  },
  {
    id: 'accelere',
    name: 'Stage Accéléré',
    price: 'À partir de 1399€',
    duree: '2 à 4 semaines',
    age: 'Dès 17 ans',
    tauxReussite: '50%',
    avantages: [
      'Formation rapide et intensive',
      'Idéal pour les personnes pressées',
      'Immersion totale'
    ],
    inconvenients: [
      'Rythme soutenu',
      'Moins de temps pour assimiler',
      'Disponibilité requise à temps plein'
    ]
  }
];

const TarifsComparison = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comparatif des Formules
          </h2>
          <p className="text-lg text-gray-700">
            Chaque formule présente des avantages spécifiques. Comparez-les pour choisir celle qui vous convient le mieux.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-w-max"
          >
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-4 px-6 text-left">Formule</th>
                  <th className="py-4 px-6 text-center">Tarif</th>
                  <th className="py-4 px-6 text-center">Durée moyenne</th>
                  <th className="py-4 px-6 text-center">Âge minimum</th>
                  <th className="py-4 px-6 text-center">Taux de réussite</th>
                </tr>
              </thead>
              <tbody>
                {formules.map((formule, index) => (
                  <tr 
                    key={formule.id} 
                    className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900">{formule.name}</td>
                    <td className="py-4 px-6 text-center text-gray-800">{formule.price}</td>
                    <td className="py-4 px-6 text-center text-gray-800">{formule.duree}</td>
                    <td className="py-4 px-6 text-center text-gray-800">{formule.age}</td>
                    <td className="py-4 px-6 text-center text-gray-800">{formule.tauxReussite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {formules.map((formule, index) => (
            <motion.div
              key={formule.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{formule.name}</h3>
                <p className="text-red-600 font-semibold">{formule.price}</p>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Avantages</h4>
                  <ul className="space-y-2">
                    {formule.avantages.map((avantage, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{avantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Inconvénients</h4>
                  <ul className="space-y-2">
                    {formule.inconvenients.map((inconvenient, i) => (
                      <li key={i} className="flex items-start">
                        <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{inconvenient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TarifsComparison;
