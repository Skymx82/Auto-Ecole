"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegClock, FaRegUser, FaRegCommentDots, FaTags, FaCar } from 'react-icons/fa';

// Données fictives pour les articles de blog
const blogPosts = [
  {
    id: 1,
    title: 'Les avantages de la Fiat 500 pour l\'apprentissage de la conduite',
    excerpt: 'Découvrez pourquoi la Fiat 500 est le véhicule idéal pour apprendre à conduire, avec ses dimensions compactes et sa maniabilité exceptionnelle.',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '28 mars 2025',
    author: 'Marie Dupont',
    comments: 12,
    category: 'Véhicules',
    slug: 'avantages-fiat-500-apprentissage-conduite'
  },
  {
    id: 2,
    title: 'Comment réussir son examen du code de la route du premier coup',
    excerpt: 'Nos moniteurs partagent leurs meilleures astuces et conseils pour maximiser vos chances de réussite à l\'examen du code de la route.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '21 mars 2025',
    author: 'Jean Martin',
    comments: 8,
    category: 'Conseils',
    slug: 'reussir-examen-code-route-premier-coup'
  },
  {
    id: 3,
    title: 'Les nouvelles réglementations du code de la route en 2025',
    excerpt: 'Restez informé des dernières modifications du code de la route et de leur impact sur votre conduite quotidienne.',
    image: 'https://images.unsplash.com/photo-1473445730015-841f29a0bb2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '15 mars 2025',
    author: 'Sophie Leroy',
    comments: 5,
    category: 'Actualités',
    slug: 'nouvelles-reglementations-code-route-2025'
  },
  {
    id: 4,
    title: 'Conduite accompagnée : tout ce que vous devez savoir',
    excerpt: 'Guide complet sur la conduite accompagnée, ses avantages, son déroulement et comment s\'y inscrire avec notre auto-école.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '10 mars 2025',
    author: 'Thomas Bernard',
    comments: 3,
    category: 'Formations',
    slug: 'conduite-accompagnee-guide-complet'
  },
  {
    id: 5,
    title: 'Comment gérer le stress lors de l\'examen du permis de conduire',
    excerpt: 'Techniques et astuces pour rester calme et confiant le jour J, et maximiser vos chances de réussite à l\'examen pratique.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '5 mars 2025',
    author: 'Camille Petit',
    comments: 15,
    category: 'Conseils',
    slug: 'gerer-stress-examen-permis-conduire'
  }
];

const BlogPosts = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#212121]">Articles récents</h2>
        <div className="text-sm text-gray-500">
          <span className="mr-2">Trier par:</span>
          <select className="border border-gray-200 rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-[#FF4242]">
            <option>Plus récents</option>
            <option>Plus populaires</option>
            <option>A-Z</option>
          </select>
        </div>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <div className="h-64 md:h-full relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#FF4242] text-white text-xs font-bold py-1 px-3 rounded-full">
                    {post.category}
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold text-[#212121] mb-3 hover:text-[#FF4242] transition-colors duration-200">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FaRegClock className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <FaRegUser className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaRegCommentDots className="mr-1" />
                    <span>{post.comments} commentaires</span>
                  </div>
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#FF4242] font-medium hover:text-[#E03232] transition-colors duration-200"
                >
                  Lire l'article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <nav className="inline-flex rounded-md shadow-sm">
          <a href="#" className="py-2 px-4 bg-white border border-gray-200 text-[#212121] rounded-l-md hover:bg-gray-50">
            Précédent
          </a>
          <a href="#" className="py-2 px-4 bg-[#FF4242] border border-[#FF4242] text-white font-medium">
            1
          </a>
          <a href="#" className="py-2 px-4 bg-white border border-gray-200 text-[#212121] hover:bg-gray-50">
            2
          </a>
          <a href="#" className="py-2 px-4 bg-white border border-gray-200 text-[#212121] hover:bg-gray-50">
            3
          </a>
          <a href="#" className="py-2 px-4 bg-white border border-gray-200 text-[#212121] rounded-r-md hover:bg-gray-50">
            Suivant
          </a>
        </nav>
      </div>
    </div>
  );
};

export default BlogPosts;
