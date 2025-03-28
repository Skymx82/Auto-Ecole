import FormationDetail from '@/components/formations/FormationDetail';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formation Permis B sur Fiat 500 | Auto-École',
  description: 'Découvrez notre formation complète au permis B sur Fiat 500, véhicule idéal pour l\'apprentissage de la conduite.',
};

export default function PermisB() {
  return (
    <main>
      <FormationDetail formationId="permis-b" />
    </main>
  );
}
