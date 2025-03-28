"use client";

import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaFacebookSquare, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nos Coordonnées
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                N'hésitez pas à nous contacter par téléphone, email ou en vous rendant directement à notre agence.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-xl text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-700">
                      123 Avenue de la Conduite<br />
                      75000 Paris, France
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Métro : Ligne 1, Station Champs-Élysées
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaPhoneAlt className="text-xl text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                    <p className="text-gray-700">
                      <a href="tel:+33123456789" className="hover:text-red-600 transition duration-200">
                        01 23 45 67 89
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Du lundi au vendredi : 9h - 19h<br />
                      Samedi : 9h - 17h
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-xl text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:contact@conduitefacile.fr" className="hover:text-red-600 transition duration-200">
                        contact@conduitefacile.fr
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Nous répondons à vos emails sous 24h
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaClock className="text-xl text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Horaires d'ouverture</h3>
                    <div className="text-gray-700">
                      <div className="grid grid-cols-2 gap-2">
                        <span>Lundi - Vendredi:</span>
                        <span>9h00 - 19h00</span>
                        <span>Samedi:</span>
                        <span>9h00 - 17h00</span>
                        <span>Dimanche:</span>
                        <span>Fermé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebookSquare className="text-xl text-gray-700" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl text-gray-700" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="text-xl text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Besoin d'informations ?</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Renseignements sur nos formations</h4>
                  <p className="text-gray-700 text-sm">
                    Pour toute question concernant nos formations, tarifs ou disponibilités.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Prise de rendez-vous</h4>
                  <p className="text-gray-700 text-sm">
                    Pour planifier une évaluation de conduite ou un cours.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Service administratif</h4>
                  <p className="text-gray-700 text-sm">
                    Pour les questions concernant votre dossier, factures ou documents.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Recrutement</h4>
                  <p className="text-gray-700 text-sm">
                    Pour postuler ou envoyer une candidature spontanée.
                  </p>
                </div>
              </div>
              <a 
                href="#form" 
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
