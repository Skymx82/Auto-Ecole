import FormationDetail from '@/components/formations/FormationDetail';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formation Code de la Route | Auto-École',
  description: 'Préparez-vous à l\'examen du code de la route avec notre formation complète incluant des cours en salle et un accès illimité à notre plateforme en ligne.',
};

export default function CodeRoute() {
  return (
    <main>
      <FormationDetail formationId="code-route" />
    </main>
  );
}
