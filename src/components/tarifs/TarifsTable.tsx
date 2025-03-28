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
    <section className="py-16 bg-[#F5F5F5]" id="permis-b">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-3">Nos formules sur Fiat 500</h2>
            <p className="text-lg text-[#212121]">
              Choisissez la formule qui correspond à vos objectifs et votre budget
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {permisB.map((formule, index) => (
              <motion.div
                key={formule.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col ${formule.highlight ? 'ring-2 ring-[#FF4242]' : ''}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0">
                    {/* Remplacer par une vraie image quand disponible */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600" />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-30" />
                  <div className="absolute top-0 left-0 right-0 p-4">
                    <div className={`${formule.accentColor} text-white py-1 px-3 rounded-lg inline-block text-sm font-medium`}>
                      {formule.subtitle}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white">{formule.name}</h3>
                    <div className="flex items-center mt-1">
                      <div className="text-3xl font-bold text-white">{formule.price}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <p className="text-[#212121] mb-6">{formule.description}</p>
                  
                  <div className="space-y-3">
                    {formule.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-start">
                        {feature.included ? (
                          <FaCheck className={`${formule.textColor} mt-1 mr-2 flex-shrink-0`} />
                        ) : (
                          <FaTimes className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                        )}
                        <span className="text-[#212121] text-sm">
                          {feature.name}
                          {feature.details && (
                            <span className="text-gray-500 text-xs ml-1">({feature.details})</span>
                          )}
                        </span>
                      </div>
                    ))}
                    
                    {formule.features.length > 6 && (
                      <details className="mt-2">
                        <summary className={`${formule.textColor} text-sm font-medium cursor-pointer`}>Voir plus de détails</summary>
                        <div className="mt-3 space-y-3 pl-1">
                          {formule.features.slice(6).map((feature, index) => (
                            <div key={index} className="flex items-start">
                              {feature.included ? (
                                <FaCheck className={`${formule.textColor} mt-1 mr-2 flex-shrink-0`} />
                              ) : (
                                <FaTimes className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                              )}
                              <span className="text-[#212121] text-sm">
                                {feature.name}
                                {feature.details && (
                                  <span className="text-gray-500 text-xs ml-1">({feature.details})</span>
                                )}
                              </span>
                            </div>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-100">
                  <a 
                    href={`/contact?formule=${formule.id}`} 
                    className={`w-full ${formule.buttonColor} text-white text-center font-medium py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg inline-block`}
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
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-white rounded-xl shadow-md max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-[#212121] mb-6 flex items-center">
            <span className="bg-[#FF4242] text-white p-2 rounded-lg mr-3">
              <FaCheck />
            </span>
            Prestations additionnelles pour votre Fiat 500
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex justify-between items-center p-4 bg-[#F9F9F9] rounded-lg">
              <span className="text-[#212121] font-medium">Heure de conduite supplémentaire</span>
              <span className="font-semibold text-[#FF4242]">49€</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#F9F9F9] rounded-lg">
              <span className="text-[#212121] font-medium">Accompagnement à l'examen pratique</span>
              <span className="font-semibold text-[#FF4242]">69€</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#F9F9F9] rounded-lg">
              <span className="text-[#212121] font-medium">Présentation à l'examen du code</span>
              <span className="font-semibold text-[#FF4242]">30€</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#F9F9F9] rounded-lg">
              <span className="text-[#212121] font-medium">Évaluation de départ</span>
              <span className="font-semibold text-[#FF4242]">45€ <span className="text-xs text-gray-500">(offerte à l'inscription)</span></span>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#F9F9F9] rounded-lg">
              <span className="text-[#212121] font-medium">Frais de transfert de dossier</span>
              <span className="font-semibold text-[#FF4242]">150€</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#F9F9F9] rounded-lg">
              <span className="text-[#212121] font-medium">Heure de simulateur</span>
              <span className="font-semibold text-[#FF4242]">35€</span>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default TarifsTable;
