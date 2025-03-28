import FormationsHero from '@/components/formations/FormationsHero';
import FormationsList from '@/components/formations/FormationsList';

export const metadata = {
  title: 'Nos Formations sur Fiat 500 | Auto-École',
  description: 'Découvrez nos formations au permis B sur Fiat 500 : formation classique, accélérée ou conduite accompagnée.',
};

export default function FormationsPage() {
  return (
    <div>
      <FormationsHero />
      <FormationsList />
    </div>
  );
}
