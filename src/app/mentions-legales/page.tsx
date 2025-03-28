import MentionsLegalesHero from '@/components/mentions-legales/MentionsLegalesHero';
import MentionsLegalesContent from '@/components/mentions-legales/MentionsLegalesContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | Auto-École Fiat 500',
  description: 'Consultez les mentions légales de notre auto-école, informations sur l\'entreprise, politique de confidentialité et conditions d\'utilisation.',
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <MentionsLegalesHero />
      <MentionsLegalesContent />
    </main>
  );
}
