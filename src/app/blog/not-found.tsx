import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-[#212121] mb-4">Article non trouvé</h1>
        <p className="text-gray-600 mb-8">
          L'article que vous recherchez n'existe pas ou a été déplacé.
        </p>
        <Link 
          href="/blog" 
          className="inline-block bg-[#FF4242] hover:bg-[#E03232] text-white font-medium py-2 px-6 rounded-lg transition duration-300"
        >
          Retour au blog
        </Link>
      </div>
    </div>
  );
}
