"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCar, FaGraduationCap, FaMoneyBillWave, FaClipboardList, FaUserFriends, FaCalendarAlt } from 'react-icons/fa';

// Données des catégories
const categories = [
  {
    id: 'formations',
    name: 'Formations',
    icon: <FaGraduationCap className="text-[#FF4242]" />,
    count: 8
  },
  {
    id: 'vehicules',
    name: 'Nos Fiat 500',
    icon: <FaCar className="text-[#FF4242]" />,
    count: 6
  },
  {
    id: 'tarifs',
    name: 'Tarifs et paiements',
    icon: <FaMoneyBillWave className="text-[#FF4242]" />,
    count: 5
  },
  {
    id: 'examens',
    name: 'Examens',
    icon: <FaClipboardList className="text-[#FF4242]" />,
    count: 7
  },
  {
    id: 'moniteurs',
    name: 'Moniteurs',
    icon: <FaUserFriends className="text-[#FF4242]" />,
    count: 4
  },
  {
    id: 'rendez-vous',
    name: 'Rendez-vous',
    icon: <FaCalendarAlt className="text-[#FF4242]" />,
    count: 6
  }
];

const FAQCategories = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
      >
        <h2 className="text-xl font-bold text-[#212121] mb-4">Catégories</h2>
        <nav>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/faq#${category.id}`}
                  className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <span className="text-gray-700">{category.name}</span>
                  </div>
                  <span className="bg-gray-100 text-gray-600 text-xs rounded-full py-1 px-2">
                    {category.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
      >
        <h2 className="text-xl font-bold text-[#212121] mb-4">Besoin d'aide ?</h2>
        <p className="text-gray-600 text-sm mb-4">
          Vous ne trouvez pas la réponse à votre question ? Contactez-nous directement.
        </p>
        <div className="space-y-3">
          <a
            href="tel:+33123456789"
            className="flex items-center gap-2 text-[#212121] hover:text-[#FF4242] transition-colors duration-200"
          >
            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FF4242]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span>01 23 45 67 89</span>
          </a>
          <a
            href="mailto:contact@fiat500-autoecole.fr"
            className="flex items-center gap-2 text-[#212121] hover:text-[#FF4242] transition-colors duration-200"
          >
            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FF4242]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span>contact@fiat500-autoecole.fr</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-[#FF4242] rounded-xl shadow-sm p-6 text-white"
      >
        <h2 className="text-xl font-bold mb-3">Prêt à démarrer ?</h2>
        <p className="text-sm mb-4 text-white/90">
          Réservez votre première leçon de conduite sur Fiat 500 dès aujourd'hui.
        </p>
        <Link
          href="/contact#rdv"
          className="block w-full py-2 px-4 bg-white text-[#FF4242] font-medium rounded-lg text-center hover:bg-gray-100 transition-colors duration-200"
        >
          Prendre rendez-vous
        </Link>
      </motion.div>
    </div>
  );
};

export default FAQCategories;
