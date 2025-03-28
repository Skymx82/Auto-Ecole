"use client";

import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Léa Dupont',
    age: '19 ans',
    moniteur: 'Sophie Martin',
    quote: 'Sophie a été d\'une patience incroyable avec moi. Grâce à sa pédagogie et ses conseils, j\'ai réussi mon permis du premier coup !',
    rating: 5,
  },
  {
    id: 2,
    name: 'Maxime Girard',
    age: '25 ans',
    moniteur: 'Marc Leroy',
    quote: 'Marc est un excellent moniteur moto, très technique et attentif à la sécurité. Il m\'a donné confiance pour affronter toutes les situations.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Benali',
    age: '17 ans',
    moniteur: 'Julie Moreau',
    quote: 'Julie a une façon d\'expliquer le code qui rend tout simple. Ses cours sont clairs et elle est toujours disponible pour répondre aux questions.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Thomas Laurent',
    age: '30 ans',
    moniteur: 'Alexandre Petit',
    quote: 'Alexandre m\'a aidé à reprendre confiance après 10 ans sans conduire. Son approche détendue mais professionnelle était exactement ce dont j\'avais besoin.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Emma Wilson',
    age: '22 ans',
    moniteur: 'Nadia Benali',
    quote: 'En tant qu\'expatriée, j\'étais ravie de pouvoir suivre des cours en anglais avec Nadia. Elle est très pédagogue et s\'adapte parfaitement à chaque élève.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Lucas Moreau',
    age: '18 ans',
    moniteur: 'Thomas Dubois',
    quote: 'Thomas est un moniteur exigeant mais juste. Il m\'a appris bien plus que simplement conduire, mais aussi à anticiper et à être responsable sur la route.',
    rating: 5,
  }
];

const MoniteursTestimonials = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos élèves
          </h2>
          <p className="text-lg text-gray-700">
            Découvrez les témoignages de nos élèves sur leur expérience avec nos moniteurs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-start mb-6">
                <FaQuoteLeft className="text-3xl text-red-500 opacity-50" />
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-gray-600">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.age}, élève de {testimonial.moniteur}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 mr-1" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-gray-300 mr-1" />
                    ))}
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
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <div className="bg-red-600 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Satisfaction garantie</h3>
            <p className="mb-6">
              Nous sommes fiers de maintenir un taux de satisfaction de 98% parmi nos élèves.
              Si vous n'êtes pas satisfait de votre moniteur, nous vous proposons d'en changer sans frais supplémentaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Prendre rendez-vous
              </a>
              <a 
                href="/avis" 
                className="bg-transparent hover:bg-red-700 border-2 border-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Voir tous les avis
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoniteursTestimonials;
