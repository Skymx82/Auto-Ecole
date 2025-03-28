"use client";

import { motion } from 'framer-motion';
import { 
  FaUserGraduate, 
  FaCarAlt, 
  FaRegClock, 
  FaChalkboardTeacher, 
  FaMoneyBillWave, 
  FaShieldAlt 
} from 'react-icons/fa';

const features = [
  {
    id: 1,
    title: 'Moniteurs expérimentés',
    description: 'Tous nos moniteurs sont diplômés d\'État avec plusieurs années d\'expérience.',
    icon: <FaChalkboardTeacher className="text-3xl text-red-600" />
  },
  {
    id: 2,
    title: 'Véhicules récents',
    description: 'Notre flotte de véhicules est régulièrement renouvelée pour votre confort et sécurité.',
    icon: <FaCarAlt className="text-3xl text-red-600" />
  },
  {
    id: 3,
    title: 'Formation flexible',
    description: 'Des horaires adaptés à votre emploi du temps et des formules personnalisables.',
    icon: <FaRegClock className="text-3xl text-red-600" />
  },
  {
    id: 4,
    title: 'Fort taux de réussite',
    description: 'Plus de 90% de nos élèves obtiennent leur permis dès la première tentative.',
    icon: <FaUserGraduate className="text-3xl text-red-600" />
  },
  {
    id: 5,
    title: 'Prix compétitifs',
    description: 'Des tarifs clairs et compétitifs avec des formules adaptées à tous les budgets.',
    icon: <FaMoneyBillWave className="text-3xl text-red-600" />
  },
  {
    id: 6,
    title: 'Accompagnement complet',
    description: 'Un suivi personnalisé tout au long de votre formation pour maximiser vos chances de réussite.',
    icon: <FaShieldAlt className="text-3xl text-red-600" />
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi Nous Choisir</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez les raisons qui font de notre auto-école l'un des centres de formation à la conduite les plus recommandés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-700 pl-12">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-white text-center max-w-4xl mx-auto shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Prêt à commencer votre formation ?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Prenez rendez-vous dès aujourd'hui pour une évaluation gratuite et découvrez nos formules adaptées à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Prendre rendez-vous
            </a>
            <a 
              href="/tarifs" 
              className="bg-transparent hover:bg-red-800 border-2 border-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Voir nos tarifs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
