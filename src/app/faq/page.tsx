import FAQHero from '@/components/faq/FAQHero';
import FAQCategories from '@/components/faq/FAQCategories';
import FAQQuestions from '@/components/faq/FAQQuestions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Auto-École Fiat 500',
  description: 'Consultez nos questions fréquemment posées sur nos formations, nos Fiat 500 et le déroulement des cours de conduite.',
};

export default function FAQPage() {
  return (
    <main>
      <FAQHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <FAQCategories />
          </div>
          <div className="lg:col-span-3 order-1 lg:order-2">
            <FAQQuestions />
          </div>
        </div>
      </div>
    </main>
  );
}
