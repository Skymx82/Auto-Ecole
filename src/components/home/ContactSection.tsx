"use client";

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCalendarCheck } from 'react-icons/fa';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nous Trouver</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Notre auto-école est idéalement située au centre-ville, facilement accessible en transport en commun.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Carte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-gray-200"
          >
            {/* Ici nous simulons une carte avec un div de couleur */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-gray-600 text-lg font-medium">Carte de localisation</p>
            </div>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactez-nous</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-xl text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Adresse</h4>
                  <p className="text-gray-700">123 Avenue de la Conduite<br />75000 Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaPhoneAlt className="text-xl text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Téléphone</h4>
                  <p className="text-gray-700">
                    <a href="tel:+33123456789" className="hover:text-red-600 transition duration-200">
                      01 23 45 67 89
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-xl text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-700">
                    <a href="mailto:contact@conduitefacile.fr" className="hover:text-red-600 transition duration-200">
                      contact@conduitefacile.fr
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaCalendarCheck className="text-xl text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Horaires</h4>
                  <p className="text-gray-700">
                    Lun-Ven: 9h00 - 19h00<br />
                    Sam: 9h00 - 17h00<br />
                    Dim: Fermé
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/contact"
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
