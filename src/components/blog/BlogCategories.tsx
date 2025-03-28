"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaTags, FaFire, FaCar, FaGraduationCap, FaNewspaper, FaLightbulb } from 'react-icons/fa';

// Données fictives pour les catégories
const categories = [
  { id: 1, name: 'Véhicules', count: 8, icon: <FaCar /> },
  { id: 2, name: 'Conseils', count: 12, icon: <FaLightbulb /> },
  { id: 3, name: 'Formations', count: 6, icon: <FaGraduationCap /> },
  { id: 4, name: 'Actualités', count: 9, icon: <FaNewspaper /> },
];

// Données fictives pour les articles populaires
const popularPosts = [
  {
    id: 1,
    title: 'Les avantages de la Fiat 500 pour l\'apprentissage',
    date: '28 mars 2025',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    slug: 'avantages-fiat-500-apprentissage-conduite'
  },
  {
    id: 2,
    title: 'Comment réussir son examen du code de la route',
    date: '21 mars 2025',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    slug: 'reussir-examen-code-route-premier-coup'
  },
  {
    id: 3,
    title: 'Gérer le stress lors de l\'examen du permis',
    date: '5 mars 2025',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    slug: 'gerer-stress-examen-permis-conduire'
  }
];

const BlogCategories = () => {
  return (
    <div className="space-y-8">
      {/* Widget de recherche */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
      >
        <h3 className="text-lg font-bold text-[#212121] mb-4 flex items-center gap-2">
          <FaTags className="text-[#FF4242]" />
          Catégories
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link 
                href={`/blog/categorie/${category.name.toLowerCase()}`}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#FF4242]">{category.icon}</span>
                  <span className="text-gray-700">{category.name}</span>
                </div>
                <span className="bg-gray-100 text-gray-600 text-xs rounded-full py-1 px-2">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Articles populaires */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
      >
        <h3 className="text-lg font-bold text-[#212121] mb-4 flex items-center gap-2">
          <FaFire className="text-[#FF4242]" />
          Articles populaires
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className="flex gap-3 group"
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#212121] group-hover:text-[#FF4242] transition-colors duration-200">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Abonnement à la newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-[#FF4242] rounded-xl shadow-sm p-6 text-white"
      >
        <h3 className="text-lg font-bold mb-3">Restez informé</h3>
        <p className="text-sm mb-4 text-white/90">
          Abonnez-vous à notre newsletter pour recevoir nos derniers articles et conseils de conduite.
        </p>
        <form>
          <input
            type="email"
            placeholder="Votre email"
            className="w-full py-2 px-3 rounded-lg text-gray-800 mb-2 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 px-3 bg-white text-[#FF4242] font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            S'abonner
          </button>
        </form>
      </motion.div>

      {/* Tags populaires */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
      >
        <h3 className="text-lg font-bold text-[#212121] mb-4">Tags populaires</h3>
        <div className="flex flex-wrap gap-2">
          <Link href="/blog/tag/fiat-500" className="py-1 px-3 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200">
            Fiat 500
          </Link>
          <Link href="/blog/tag/permis" className="py-1 px-3 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200">
            Permis
          </Link>
          <Link href="/blog/tag/code" className="py-1 px-3 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200">
            Code
          </Link>
          <Link href="/blog/tag/conduite" className="py-1 px-3 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200">
            Conduite
          </Link>
          <Link href="/blog/tag/securite" className="py-1 px-3 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200">
            Sécurité
          </Link>
          <Link href="/blog/tag/conseils" className="py-1 px-3 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200">
            Conseils
          </Link>
          <Link href="/blog/tag/examen" className="py-1 px-3 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200">
            Examen
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogCategories;
