"use client";

import { motion } from 'framer-motion';
import { FaRegClock, FaRegUser, FaRegCommentDots, FaTags, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

interface Author {
  name: string;
  image: string;
  role: string;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
  authorImage: string;
  authorRole: string;
  comments: number;
  category: string;
  tags: string[];
  slug: string;
}

interface BlogPostDetailProps {
  post: BlogPost;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
    >
      {/* Image d'en-tête */}
      <div className="relative h-72 md:h-96">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-[#FF4242] text-white text-xs font-bold py-1 px-3 rounded-full">
          {post.category}
        </div>
      </div>
      
      {/* Contenu de l'article */}
      <div className="p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#212121] mb-4">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
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
        
        {/* Contenu HTML de l'article */}
        <div 
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Tags */}
        <div className="flex items-center flex-wrap gap-2 mb-8 pb-8 border-b border-gray-100">
          <FaTags className="text-[#FF4242] mr-2" />
          {post.tags.map((tag, index) => (
            <a 
              key={index}
              href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="py-1 px-3 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              {tag}
            </a>
          ))}
        </div>
        
        {/* Partage sur les réseaux sociaux */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-[#212121] font-medium mr-3">Partager:</span>
            <div className="flex space-x-2">
              <a 
                href="#" 
                className="w-8 h-8 bg-[#3b5998] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
                aria-label="Partager sur Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-[#1da1f2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
                aria-label="Partager sur Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-[#0077b5] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
                aria-label="Partager sur LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-[#e60023] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
                aria-label="Partager sur Pinterest"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>
        
        {/* Auteur */}
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={post.authorImage} 
              alt={post.author} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-[#212121]">{post.author}</h3>
            <p className="text-sm text-[#FF4242] mb-2">{post.authorRole}</p>
            <p className="text-gray-600 text-sm">
              Moniteur d'auto-école passionné par l'enseignement de la conduite et spécialiste de la Fiat 500. 
              Plus de 10 ans d'expérience dans la formation de conducteurs.
            </p>
          </div>
        </div>
        
        {/* Section commentaires */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-[#212121] mb-6">Commentaires ({post.comments})</h3>
          
          {/* Formulaire de commentaire */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-bold text-[#212121] mb-4">Laisser un commentaire</h4>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="Votre nom *"
                    className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4242] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Votre email *"
                    className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4242] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Votre commentaire *"
                  rows={4}
                  className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4242] focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#FF4242] hover:bg-[#E03232] text-white font-medium py-2 px-6 rounded-lg transition duration-300"
              >
                Publier le commentaire
              </button>
            </form>
          </div>
          
          {/* Liste des commentaires (exemples) */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Thomas Bernard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium text-[#212121]">Thomas Bernard</h5>
                    <span className="text-xs text-gray-500">20 mars 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Excellent article ! J'ai appris à conduire sur une Fiat 500 et je confirme tous ces avantages. 
                    C'est vraiment un véhicule idéal pour débuter.
                  </p>
                </div>
                <div className="mt-2 ml-4">
                  <button className="text-sm text-[#FF4242] hover:text-[#E03232] transition-colors duration-200">
                    Répondre
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://randomuser.me/api/portraits/women/65.jpg" 
                  alt="Sophie Leroy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium text-[#212121]">Sophie Leroy</h5>
                    <span className="text-xs text-gray-500">18 mars 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Je vais bientôt commencer mes leçons de conduite et cet article me rassure sur le choix 
                    de la Fiat 500. Merci pour ces informations !
                  </p>
                </div>
                <div className="mt-2 ml-4">
                  <button className="text-sm text-[#FF4242] hover:text-[#E03232] transition-colors duration-200">
                    Répondre
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPostDetail;
