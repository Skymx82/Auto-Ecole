"use client";

import { motion } from 'framer-motion';
import { FaCar, FaMotorcycle, FaGraduationCap, FaMedal } from 'react-icons/fa';

const moniteurs = [
  {
    id: 1,
    name: 'Thomas Dubois',
    role: 'Directeur pédagogique',
    experience: '15 ans d\'expérience',
    specialites: ['Permis B', 'Permis Moto', 'Formation moniteurs'],
    bio: 'Thomas a fondé l\'auto-école après 10 ans d\'expérience comme moniteur. Passionné de pédagogie, il forme également les futurs moniteurs d\'auto-école.',
    certifications: ['BEPECASER', 'CQP ECSR', 'Brevet de Sécurité Routière'],
    image: '/images/placeholder-male.jpg',
    color: 'bg-red-600'
  },
  {
    id: 2,
    name: 'Sophie Martin',
    role: 'Monitrice principale',
    experience: '8 ans d\'expérience',
    specialites: ['Permis B', 'Conduite accompagnée', 'Perfectionnement'],
    bio: 'Spécialiste de la conduite accompagnée, Sophie est reconnue pour sa patience et sa pédagogie adaptée aux jeunes conducteurs.',
    certifications: ['BEPECASER', 'Mention "Groupe Lourd"'],
    image: '/images/placeholder-female.jpg',
    color: 'bg-blue-600'
  },
  {
    id: 3,
    name: 'Marc Leroy',
    role: 'Moniteur moto',
    experience: '12 ans d\'expérience',
    specialites: ['Permis A1', 'Permis A2', 'Permis A'],
    bio: 'Passionné de moto depuis toujours, Marc est spécialisé dans l\'enseignement de la conduite deux-roues. Il est également pilote amateur.',
    certifications: ['BEPECASER', 'Mention "Deux-roues"'],
    image: '/images/placeholder-male.jpg',
    color: 'bg-gray-800'
  },
  {
    id: 4,
    name: 'Julie Moreau',
    role: 'Monitrice',
    experience: '5 ans d\'expérience',
    specialites: ['Permis B', 'Code de la route', 'Conduite supervisée'],
    bio: 'Ancienne enseignante, Julie a une approche pédagogique particulièrement efficace pour l\'apprentissage du code de la route.',
    certifications: ['Titre Professionnel ECSR'],
    image: '/images/placeholder-female.jpg',
    color: 'bg-green-600'
  },
  {
    id: 5,
    name: 'Alexandre Petit',
    role: 'Moniteur',
    experience: '7 ans d\'expérience',
    specialites: ['Permis B', 'Conduite écologique', 'Remise à niveau'],
    bio: 'Spécialiste de l\'éco-conduite, Alexandre vous apprendra à conduire de manière économique et respectueuse de l\'environnement.',
    certifications: ['Titre Professionnel ECSR', 'Certification Éco-conduite'],
    image: '/images/placeholder-male.jpg',
    color: 'bg-yellow-600'
  },
  {
    id: 6,
    name: 'Nadia Benali',
    role: 'Monitrice',
    experience: '4 ans d\'expérience',
    specialites: ['Permis B', 'Conduite accompagnée', 'Conduite en anglais'],
    bio: 'Parfaitement bilingue, Nadia propose des cours en anglais pour les expatriés et les étudiants internationaux.',
    certifications: ['Titre Professionnel ECSR', 'TOEIC 950'],
    image: '/images/placeholder-female.jpg',
    color: 'bg-purple-600'
  }
];

const MoniteursTeam = () => {
  return (
    <section className="py-16 bg-white" id="team">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Une Équipe Expérimentée
          </h2>
          <p className="text-lg text-gray-700">
            Tous nos moniteurs sont diplômés d'État et bénéficient d'une formation continue
            pour vous offrir un enseignement de qualité adapté à vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moniteurs.map((moniteur, index) => (
            <motion.div
              key={moniteur.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${moniteur.color} h-32 flex items-center justify-center`}>
                <div className="w-24 h-24 bg-gray-300 rounded-full border-4 border-white overflow-hidden">
                  {/* Placeholder pour l'image */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-400 text-white text-2xl font-bold">
                    {moniteur.name.charAt(0)}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{moniteur.name}</h3>
                <p className="text-gray-600 mb-4 text-center">{moniteur.role}</p>
                
                <div className="mb-4 flex items-center justify-center">
                  <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                    {moniteur.experience}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4 text-center">
                  {moniteur.bio}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Spécialités</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {moniteur.specialites.map((specialite, i) => (
                      <span 
                        key={i} 
                        className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {specialite}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Certifications</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {moniteur.certifications.map((certification, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded flex items-center"
                      >
                        <FaMedal className="text-yellow-500 mr-1" />
                        {certification}
                      </span>
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
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Qualifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="flex flex-col items-center">
                <div className="bg-red-100 p-4 rounded-full mb-4">
                  <FaGraduationCap className="text-3xl text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Diplômés d'État</h4>
                <p className="text-gray-700 text-center text-sm">
                  Tous nos moniteurs sont titulaires du BEPECASER ou du Titre Professionnel ECSR.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <FaCar className="text-3xl text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expérience</h4>
                <p className="text-gray-700 text-center text-sm">
                  Minimum 4 ans d'expérience dans l'enseignement de la conduite.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <FaMotorcycle className="text-3xl text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Spécialisations</h4>
                <p className="text-gray-700 text-center text-sm">
                  Des moniteurs spécialisés pour chaque type de permis et de formation.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 p-4 rounded-full mb-4">
                  <FaMedal className="text-3xl text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Formation continue</h4>
                <p className="text-gray-700 text-center text-sm">
                  Nos moniteurs suivent régulièrement des formations pour rester à jour.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoniteursTeam;
