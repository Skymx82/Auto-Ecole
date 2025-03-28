import FormationDetail from '@/components/formations/FormationDetail';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formation Conduite Accompagnée sur Fiat 500 | Auto-École',
  description: 'Formez-vous à la conduite accompagnée dès 15 ans sur Fiat 500, avec un excellent taux de réussite et un suivi personnalisé.',
};

export default function ConduiteAccompagnee() {
  return (
    <main>
      <FormationDetail formationId="conduite-accompagnee" />
    </main>
  );
}
