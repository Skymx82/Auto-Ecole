"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRegClock, FaCarSide } from 'react-icons/fa';

interface BlogRelatedPostsProps {
  currentPostId: number;
}

const BlogRelatedPosts: React.FC<BlogRelatedPostsProps> = ({ currentPostId }) => {
  // Données fictives pour les articles connexes
  const relatedPosts = [
    {
      id: 2,
      title: 'Comment réussir son examen du code de la route du premier coup',
      excerpt: 'Nos moniteurs partagent leurs meilleures astuces et conseils pour maximiser vos chances de réussite.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      date: '21 mars 2025',
      slug: 'reussir-examen-code-route-premier-coup'
    },
    {
      id: 5,
      title: 'Comment gérer le stress lors de l\'examen du permis de conduire',
      excerpt: 'Techniques et astuces pour rester calme et confiant le jour J.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      date: '5 mars 2025',
      slug: 'gerer-stress-examen-permis-conduire'
    },
    {
      id: 4,
      title: 'Conduite accompagnée : tout ce que vous devez savoir',
      excerpt: 'Guide complet sur la conduite accompagnée, ses avantages et son déroulement.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      date: '10 mars 2025',
      slug: 'conduite-accompagnee-guide-complet'
    }
  ].filter(post => post.id !== currentPostId);

  return (
    <div className="space-y-8">
      {/* Articles connexes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
      >
        <h3 className="text-lg font-bold text-[#212121] mb-4 flex items-center gap-2">
          <FaCarSide className="text-[#FF4242]" />
          Articles connexes
        </h3>
        <div className="space-y-6">
          {relatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="rounded-lg overflow-hidden mb-3">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-base font-medium text-[#212121] group-hover:text-[#FF4242] transition-colors duration-200 mb-1">
                  {post.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <FaRegClock className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA pour s'inscrire */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-[#212121] rounded-xl shadow-md p-6 text-white relative overflow-hidden"
      >
        <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-10">
          <FaCarSide className="w-full h-full" />
        </div>
        <h3 className="text-lg font-bold mb-3">Prêt à commencer ?</h3>
        <p className="text-sm mb-4 text-white/80">
          Inscrivez-vous dès maintenant pour apprendre à conduire sur notre flotte de Fiat 500.
        </p>
        <Link 
          href="/contact#rdv" 
          className="block w-full py-2 px-4 bg-[#FF4242] hover:bg-[#E03232] text-white font-medium rounded-lg text-center transition-colors duration-200"
        >
          Réserver un cours d'essai
        </Link>
      </motion.div>
    </div>
  );
};

export default BlogRelatedPosts;
