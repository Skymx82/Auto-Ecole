"use client";

import Link from 'next/link';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookSquare, 
  FaInstagram, 
  FaYoutube,
  FaClock
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">Auto-École Conduite Facile</h3>
            <p className="text-gray-300 mb-4">
              Votre centre de formation à la conduite professionnelle avec des moniteurs diplômés et un accompagnement personnalisé.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookSquare className="text-2xl text-gray-300 hover:text-red-500 transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-2xl text-gray-300 hover:text-red-500 transition duration-300" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="text-2xl text-gray-300 hover:text-red-500 transition duration-300" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/formations" className="text-gray-300 hover:text-red-500 transition duration-200">
                  Nos Formations
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-gray-300 hover:text-red-500 transition duration-200">
                  Grille Tarifaire
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-red-500 transition duration-200">
                  Blog & Actualités
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-red-500 transition duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-gray-300 hover:text-red-500 transition duration-200">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">Horaires d'Ouverture</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <FaClock className="mr-2 text-red-500" />
                <span>Lundi - Vendredi: 9h00 - 19h00</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2 text-red-500" />
                <span>Samedi: 9h00 - 17h00</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2 text-red-500" />
                <span>Dimanche: Fermé</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-red-500" />
                <span>123 Avenue de la Conduite<br />75000 Paris, France</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-red-500" />
                <a href="tel:+33123456789" className="hover:text-red-500 transition duration-200">01 23 45 67 89</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-red-500" />
                <a href="mailto:contact@conduitedfacile.fr" className="hover:text-red-500 transition duration-200">contact@conduitefacile.fr</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Auto-École Conduite Facile. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
