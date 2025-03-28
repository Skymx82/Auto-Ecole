"use client";

import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Témoignages simplifiés focalisés sur l'expérience avec la Fiat 500
const testimonials = [
  {
    id: 1,
    name: 'Léa D.',
    age: '19 ans',
    moniteur: 'Sophie Martin',
    quote: 'La Fiat 500 est idéale pour apprendre à conduire! Sophie m\'a aidée à prendre confiance dès les premières heures.',
    rating: 5,
    color: 'bg-[#FF4242]'
  },
  {
    id: 2,
    name: 'Thomas L.',
    age: '25 ans',
    moniteur: 'Thomas Dubois',
    quote: 'La formation accélérée sur Fiat 500 m\'a permis d\'obtenir mon permis rapidement. Une voiture très agréable à conduire!',
    rating: 5,
    color: 'bg-[#212121]'
  },
  {
    id: 3,
    name: 'Sarah B.',
    age: '17 ans',
    moniteur: 'Julie Moreau',
    quote: 'Parfait pour débuter en conduite accompagnée. La Fiat 500 bleue est facile à manœuvrer même pour une débutante.',
    rating: 5,
    color: 'bg-[#8ECAE6]'
  }
];

const MoniteursTestimonials = () => {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">
            Témoignages de nos élèves
          </h2>
          <p className="text-lg text-[#212121]">
            Ce que nos élèves pensent de leur expérience avec nos moniteurs et nos Fiat 500
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center mr-3 text-white font-medium`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-[#212121]">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs">{testimonial.age}</p>
                  </div>
                </div>
                <div className="flex text-xs">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i}
                      className={i < testimonial.rating ? "text-[#FFD700] mr-0.5" : "text-gray-200 mr-0.5"}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex">
                  <FaQuoteLeft className="text-xl text-[#FF4242] opacity-70 mr-2 flex-shrink-0 mt-1" />
                  <p className="text-[#212121] text-sm">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mt-4 pt-3 border-t border-gray-100">
                <span className="text-gray-500 text-xs">Formé(e) par {testimonial.moniteur}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12 text-center"
        >
          <div className="bg-white text-[#212121] p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Qualité d'enseignement sur Fiat 500</h3>
            <p className="mb-6 text-sm">
              Nos moniteurs experts vous accompagnent sur des Fiat 500 modernes et confortables.
              Un taux de satisfaction de 98% et une garantie de qualité sur toutes nos formations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-[#FF4242] text-white hover:bg-[#E03232] font-medium py-2 px-5 rounded-lg transition duration-300 shadow-sm text-sm"
              >
                Réserver un cours d'essai
              </a>
              <a 
                href="/formations" 
                className="bg-[#F5F5F5] hover:bg-gray-200 text-[#212121] font-medium py-2 px-5 rounded-lg transition duration-300 text-sm"
              >
                Voir nos formules
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoniteursTestimonials;
