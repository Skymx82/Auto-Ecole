"use client";

import { motion } from 'framer-motion';
import { FaDirections, FaSubway, FaBus, FaParking } from 'react-icons/fa';

const ContactMap = () => {
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment nous trouver
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Notre auto-école est idéalement située au centre-ville, facilement accessible en transport en commun.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-md h-[400px] relative">
                {/* Ici, nous simulons une carte avec un div de couleur */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600 text-lg font-medium">Carte de localisation</p>
                </div>
                
                {/* Dans une application réelle, vous intégreriez ici une carte Google Maps ou OpenStreetMap */}
                {/* Exemple avec Google Maps:
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047033408!2d2.3354330156743847!3d48.87456857928884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUyJzI4LjQiTiAywrAyMCcxMy4yIkU!5e0!3m2!1sfr!2sfr!4v1616661432647!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Localisation de l'auto-école"
                ></iframe>
                */}
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Comment venir</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <FaSubway className="text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Métro</h4>
                      <p className="text-gray-700 text-sm">
                        Ligne 1 : Station Champs-Élysées<br />
                        Ligne 9 : Station Franklin D. Roosevelt
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <FaBus className="text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Bus</h4>
                      <p className="text-gray-700 text-sm">
                        Lignes 28, 42, 73, 80, 83, 93<br />
                        Arrêt : Champs-Élysées
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <FaParking className="text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Parking</h4>
                      <p className="text-gray-700 text-sm">
                        Parking Champs-Élysées<br />
                        Parking Rond-Point des Champs-Élysées
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="https://www.google.com/maps/dir//Paris,+France/@48.856614,2.3522219,13z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                  >
                    <FaDirections className="mr-2" />
                    Itinéraire
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-md mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nos locaux</h3>
                <p className="text-gray-700 mb-4">
                  Notre auto-école dispose de :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                    <span>Salle de code spacieuse</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                    <span>Espace d'accueil confortable</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                    <span>Simulateurs de conduite</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                    <span>Accès PMR</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
