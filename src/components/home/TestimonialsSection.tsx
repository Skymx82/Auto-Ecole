"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaCar, FaSmile, FaThumbsUp } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Martin',
    age: 22,
    role: 'Permis B obtenu en 2 mois',
    quote: 'J\'ai adoré apprendre à conduire sur la Fiat 500 ! Facile à maîtriser et tellement fun. Les moniteurs sont patients et pédagogues. Permis réussi du premier coup !',
    rating: 5,
    vehicle: 'Fiat 500 Rouge',
    image: '/images/fiatrouge.jpg'
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    age: 17,
    role: 'Conduite accompagnée',
    quote: 'La Fiat 500 est parfaite pour débuter ! Facile à conduire et très maniable en ville. L\'auto-école offre un suivi personnalisé et des véhicules modernes.',
    rating: 5,
    vehicle: 'Fiat 500 Blanche',
    image: '/images/fiatblanche.jpg'
  },
  {
    id: 3,
    name: 'Emma Leclerc',
    age: 25,
    role: 'Permis accéléré en 1 mois',
    quote: 'J\'avais besoin de mon permis rapidement et grâce à la formule accélérée, j\'ai réussi en un temps record. La Fiat 500 est idéale pour l\'apprentissage !',
    rating: 5,
    vehicle: 'Fiat 500 Bleue',
    image: '/images/fiatbleue.jpg'
  }
];

const TestimonialsSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">Ils ont appris sur Fiat 500</h2>
          <p className="text-lg text-[#212121] max-w-3xl mx-auto">
            Découvrez les témoignages de nos élèves qui ont obtenu leur permis avec succès grâce à notre méthode d'apprentissage sur Fiat 500.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.vehicle} 
                    fill 
                    className="object-cover" 
                    priority={index === 0}
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-20" /> {/* Superposition sombre pour meilleure lisibilité */}
                <div className="absolute top-4 left-4 bg-[#FF4242] text-white font-bold py-2 px-4 rounded-lg shadow-md flex items-center">
                  <FaCar className="mr-2" />
                  <span>{testimonial.vehicle}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-start mb-4">
                  <FaQuoteLeft className="text-2xl text-[#FF4242] opacity-60" />
                </div>
                
                <p className="text-[#212121] mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-[#FF4242] rounded-full flex items-center justify-center mr-4 text-white">
                    <span className="text-xl font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212121]">{testimonial.name}, {testimonial.age} ans</h4>
                    <p className="text-[#212121] text-sm opacity-75">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-[#FF4242] mr-1" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[#F5F5F5] rounded-xl p-8 shadow-lg mt-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start">
              <div className="bg-[#FF4242] p-3 rounded-lg mr-4 text-white">
                <FaSmile className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#212121] mb-2">Satisfait ou remboursé</h3>
                <p className="text-[#212121]">
                  Nous sommes tellement confiants dans notre apprentissage sur Fiat 500 que nous vous proposons une garantie de satisfaction.
                </p>
              </div>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="bg-[#FF4242] text-white font-bold text-3xl py-5 px-5 rounded-full inline-flex items-center justify-center w-24 h-24 mb-2">
                94%
              </div>
              <span className="text-[#212121] font-medium">de réussite</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
