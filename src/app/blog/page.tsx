import BlogHero from '@/components/blog/BlogHero';
import BlogPosts from '@/components/blog/BlogPosts';
import BlogCategories from '@/components/blog/BlogCategories';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Auto-École Fiat 500',
  description: 'Découvrez nos articles, conseils et actualités sur la conduite, le permis et nos Fiat 500.',
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogPosts />
          </div>
          <div className="lg:col-span-1">
            <BlogCategories />
          </div>
        </div>
      </div>
    </main>
  );
}
