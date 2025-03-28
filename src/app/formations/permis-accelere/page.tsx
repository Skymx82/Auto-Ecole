import FormationDetail from '@/components/formations/FormationDetail';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formation Permis Accéléré sur Fiat 500 | Auto-École',
  description: 'Obtenez votre permis rapidement avec notre formation intensive sur Fiat 500, idéale pour ceux qui ont besoin de leur permis en urgence.',
};

export default function PermisAccelere() {
  return (
    <main>
      <FormationDetail formationId="permis-accelere" />
    </main>
  );
}
