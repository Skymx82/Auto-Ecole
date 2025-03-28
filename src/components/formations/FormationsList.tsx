"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCar, FaCarSide, FaUserFriends, FaGraduationCap, FaCheck, FaTachometerAlt, FaMoneyBillWave } from 'react-icons/fa';

const formations = [
  {
    id: 'permis-b',
    title: 'Permis B Classique',
    subtitle: 'Formation complète sur Fiat 500',
    description: 'Apprenez à conduire à votre rythme avec notre formation complète sur Fiat 500, véhicule idéal pour les débutants.',
    features: [
      'Code de la route en accès illimité',
      '20 heures de conduite sur Fiat 500',
      'Moniteurs expérimentés et pédagogues',
      'Accompagnement à l\'examen'
    ],
    price: 'À partir de 999€',
    icon: <FaCar className="text-xl" />,
    image: '/images/fiatrouge.jpg',
    color: 'bg-[#FF4242]',
    textColor: 'text-[#FF4242]'
  },
  {
    id: 'permis-accelere',
    title: 'Permis Accéléré',
    subtitle: 'Obtenez votre permis en 1 mois',
    description: 'Besoin de votre permis rapidement ? Notre formule intensive vous permet d\'obtenir votre permis en un temps record.',
    features: [
      'Formation intensive sur Fiat 500',
      '30 heures de conduite en 1 mois',
      'Cours de code intensifs',
      'Présentation rapide à l\'examen'
    ],
    price: 'À partir de 1290€',
    icon: <FaCarSide className="text-xl" />,
    image: '/images/fiatblanche.jpg',
    color: 'bg-[#212121]',
    textColor: 'text-[#212121]'
  },
  {
    id: 'conduite-accompagnee',
    title: 'Conduite Accompagnée',
    subtitle: 'Pour les jeunes dès 15 ans',
    description: 'Formule idéale pour les jeunes avec un excellent taux de réussite. Apprenez progressivement sur Fiat 500 avec un accompagnateur de confiance.',
    features: [
      'Formation initiale sur Fiat 500',
      'Suivi personnalisé pendant 1 an minimum',
      'Rendez-vous pédagogiques réguliers',
      'Réduction sur l\'assurance auto'
    ],
    price: 'À partir de 1150€',
    icon: <FaUserFriends className="text-xl" />,
    image: '/images/fiatbleue.jpg',
    color: 'bg-[#8ECAE6]',
    textColor: 'text-[#8ECAE6]'
  }
];

const FormationsList = () => {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">Nos Formules sur Fiat 500</h2>
          <p className="text-lg text-[#212121] max-w-2xl mx-auto">
            Choisissez la formule qui correspond à votre situation et à vos objectifs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <motion.div 
              key={formation.id}
              id={formation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0">
                  <Image 
                    src={formation.image} 
                    alt={formation.title} 
                    fill 
                    className="object-cover" 
                    priority={index === 0}
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-20" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center">
                    <div className={`${formation.color} p-2 rounded-lg mr-3 text-white`}>
                      {formation.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{formation.title}</h3>
                      <p className="text-sm text-white opacity-90">{formation.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-[#212121] mb-6">{formation.description}</p>
                
                <div className="mb-6 flex-grow">
                  {formation.features.map((feature, i) => (
                    <div key={i} className="flex items-start mb-3">
                      <FaCheck className={`${formation.textColor} mt-1 mr-3 flex-shrink-0`} />
                      <span className="text-[#212121] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className={`${formation.textColor} font-bold text-lg`}>
                    {formation.price}
                  </div>
                  <a 
                    href={`/formations/${formation.id}`} 
                    className={`${formation.color} text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg transition duration-300`}
                  >
                    Détails
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-6 shadow-md">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="bg-[#FF4242] text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <FaTachometerAlt className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-[#212121] mb-2">+94% de réussite</h3>
              <p className="text-[#212121] text-sm">Sur plus de 500 élèves formés chaque année</p>
            </div>
            
            <div className="p-4">
              <div className="bg-[#212121] text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <FaMoneyBillWave className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-[#212121] mb-2">Paiement en 3x sans frais</h3>
              <p className="text-[#212121] text-sm">Éligible au permis à 1€ par jour pour les 18-25 ans</p>
            </div>
            
            <div className="p-4">
              <div className="bg-[#8ECAE6] text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-[#212121] mb-2">Moniteurs diplômés d'État</h3>
              <p className="text-[#212121] text-sm">Plus de 10 ans d'expérience en moyenne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationsList;
