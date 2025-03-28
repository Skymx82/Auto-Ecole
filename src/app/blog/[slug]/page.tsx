import BlogPostDetail from '@/components/blog/BlogPostDetail';
import BlogRelatedPosts from '@/components/blog/BlogRelatedPosts';
import type { Metadata } from 'next';

// Cette fonction serait remplacée par une vraie récupération de données
const getBlogPostBySlug = (slug: string) => {
  // Données fictives pour l'exemple
  const blogPosts = [
    {
      id: 1,
      title: 'Les avantages de la Fiat 500 pour l\'apprentissage de la conduite',
      content: `
        <p>La Fiat 500 est devenue l'un des véhicules les plus populaires pour l'apprentissage de la conduite, et ce n'est pas un hasard. Ce petit véhicule italien offre de nombreux avantages qui en font un choix idéal pour les conducteurs débutants.</p>
        
        <h2>Une taille compacte idéale pour les manœuvres</h2>
        <p>Avec ses dimensions réduites (3,57 m de long et 1,63 m de large), la Fiat 500 est particulièrement adaptée pour apprendre les manœuvres de stationnement et la conduite en milieu urbain. Sa petite taille permet de se faufiler facilement dans la circulation et de se garer sans difficulté, même dans les espaces restreints.</p>
        
        <h2>Une excellente visibilité</h2>
        <p>La position de conduite surélevée et les larges surfaces vitrées offrent une excellente visibilité dans toutes les directions. Cette caractéristique est essentielle pour les débutants qui doivent développer une bonne conscience de l'environnement routier.</p>
        
        <h2>Une direction légère et précise</h2>
        <p>La direction assistée de la Fiat 500 est à la fois légère et précise, ce qui facilite les manœuvres à basse vitesse tout en offrant un bon retour d'information à vitesse plus élevée. Cette combinaison est idéale pour les nouveaux conducteurs qui peuvent ainsi développer de bonnes sensations de conduite.</p>
        
        <h2>Un tableau de bord intuitif</h2>
        <p>Le tableau de bord de la Fiat 500 est simple et intuitif, avec des commandes faciles à comprendre et à utiliser. Cette simplicité permet aux débutants de se concentrer sur la conduite plutôt que sur la compréhension des différentes fonctionnalités du véhicule.</p>
        
        <h2>Une boîte de vitesses accessible</h2>
        <p>Que ce soit en version manuelle ou automatique, la boîte de vitesses de la Fiat 500 est douce et facile à utiliser. La version manuelle offre un embrayage progressif qui pardonne les erreurs, tandis que la version automatique permet de se concentrer uniquement sur la direction et les pédales d'accélérateur et de frein.</p>
        
        <h2>Un véhicule rassurant</h2>
        <p>Malgré sa petite taille, la Fiat 500 est équipée de nombreux systèmes de sécurité (ABS, ESP, airbags) qui rassurent les débutants. De plus, sa carrosserie robuste et son comportement prévisible en font un véhicule sécurisant pour apprendre à conduire.</p>
        
        <h2>Conclusion</h2>
        <p>La Fiat 500 combine de nombreux avantages qui en font un véhicule idéal pour l'apprentissage de la conduite : taille compacte, bonne visibilité, direction précise, commandes intuitives et sécurité rassurante. C'est pourquoi notre auto-école a choisi d'équiper sa flotte exclusivement de Fiat 500, offrant ainsi à nos élèves les meilleures conditions pour apprendre à conduire avec confiance et plaisir.</p>
      `,
      image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      date: '28 mars 2025',
      author: 'Marie Dupont',
      authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      authorRole: 'Monitrice d\'auto-école',
      comments: 12,
      category: 'Véhicules',
      tags: ['Fiat 500', 'Apprentissage', 'Conduite', 'Véhicules'],
      slug: 'avantages-fiat-500-apprentissage-conduite'
    },
    // Autres articles...
  ];
  
  return blogPosts.find(post => post.slug === slug) || null;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Article non trouvé | Auto-École Fiat 500',
      description: 'L\'article que vous recherchez n\'existe pas ou a été déplacé.',
    };
  }
  
  return {
    title: `${post.title} | Auto-École Fiat 500`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#212121] mb-4">Article non trouvé</h1>
          <p className="text-gray-600 mb-8">
            L'article que vous recherchez n'existe pas ou a été déplacé.
          </p>
          <a 
            href="/blog" 
            className="inline-block bg-[#FF4242] hover:bg-[#E03232] text-white font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            Retour au blog
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <main>
      <div className="container mx-auto px-4 py-12 text-black">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogPostDetail post={post} />
          </div>
          <div className="lg:col-span-1">
            <BlogRelatedPosts currentPostId={post.id} />
          </div>
        </div>
      </div>
    </main>
  );
}
