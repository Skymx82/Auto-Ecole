"use client";

import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaFacebookSquare, 
  FaInstagram, 
  FaYoutube,
  FaCar,
  FaCalendarAlt
} from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Colonne de gauche - Informations de contact */}
            <div className="md:col-span-3 bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#FF4242] flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#212121]">
                  Notre agence
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-[#FF4242]" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-[#212121]">Adresse</h3>
                      <p className="text-gray-600">
                        123 Avenue de la Conduite<br />
                        75000 Paris, France
                      </p>
                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#FF4242]"></span>
                        Métro : Ligne 1, Station Champs-Élysées
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-[#FF4242]" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-[#212121]">Téléphone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+33123456789" className="hover:text-[#FF4242] transition duration-200">
                          01 23 45 67 89
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Assistance téléphonique 7j/7
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-[#FF4242]" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-[#212121]">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@fiat500-autoecole.fr" className="hover:text-[#FF4242] transition duration-200">
                          contact@fiat500-autoecole.fr
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Réponse sous 24h maximum
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-[#FF4242]" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-[#212121]">Horaires d'ouverture</h3>
                      <div className="text-gray-600 mt-2">
                        <div className="flex justify-between text-sm border-b border-gray-100 pb-1 mb-1">
                          <span className="font-medium">Lundi - Vendredi</span>
                          <span>9h - 19h</span>
                        </div>
                        <div className="flex justify-between text-sm border-b border-gray-100 pb-1 mb-1">
                          <span className="font-medium">Samedi</span>
                          <span>9h - 17h</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">Dimanche</span>
                          <span className="text-[#FF4242]">Fermé</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <FaCar className="text-[#FF4242]" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-[#212121]">Notre flotte</h3>
                      <p className="text-gray-600">
                        Découvrez notre flotte exclusive de Fiat 500
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1"></span>
                        <span>Fiat 500 Rouge</span>
                        <span className="inline-block w-2 h-2 rounded-full bg-white border border-gray-300 ml-3 mr-1"></span>
                        <span>Fiat 500 Blanche</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-base font-medium text-[#212121] mb-3">Suivez-nous</h3>
                    <div className="flex space-x-3">
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition duration-300"
                        aria-label="Facebook"
                      >
                        <FaFacebookSquare className="text-[#212121]" />
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition duration-300"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="text-[#212121]" />
                      </a>
                      <a 
                        href="https://youtube.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition duration-300"
                        aria-label="YouTube"
                      >
                        <FaYoutube className="text-[#212121]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Colonne de droite - Informations et accès rapides */}
            <div className="md:col-span-2 space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#212121] mb-4 flex items-center gap-2">
                  <FaCalendarAlt className="text-[#FF4242]" />
                  <span>Prendre rendez-vous</span>
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 p-3 border border-gray-100 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-[#FF4242]">1</span>
                    </div>
                    <p className="text-sm text-gray-600">Évaluation de conduite (30min)</p>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 border border-gray-100 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-[#FF4242]">2</span>
                    </div>
                    <p className="text-sm text-gray-600">Cours de conduite standard (1h)</p>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 border border-gray-100 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-[#FF4242]">3</span>
                    </div>
                    <p className="text-sm text-gray-600">Formation intensive (3h)</p>
                  </div>
                </div>
                
                <a 
                  href="#rdv" 
                  className="block w-full bg-[#FF4242] hover:bg-[#E03232] text-white text-center font-medium py-3 px-4 rounded-lg transition duration-300 shadow-sm"
                >
                  Réserver maintenant
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 opacity-5">
                  <FaCar className="w-full h-full text-gray-800" />
                </div>
                
                <h3 className="text-xl font-bold text-[#212121] mb-4">Nos avantages Fiat 500</h3>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-500 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-gray-600">Véhicules récents et parfaitement entretenus</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-500 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-gray-600">Taille idéale pour l'apprentissage de la conduite</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-500 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-gray-600">Moniteurs spécialisés sur Fiat 500</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-500 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-gray-600">Taux de réussite supérieur à la moyenne nationale</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          
          {/* Carte Google Maps */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-sm border border-gray-100 h-[240px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047033858!2d2.3354330157606287!3d48.87456787928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sArc%20de%20Triomphe!5e0!3m2!1sen!2sfr!4v1597752257723!5m2!1sen!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Localisation de l'auto-école"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
