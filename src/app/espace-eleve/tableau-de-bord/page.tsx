import DashboardClient from '@/components/espace-eleve/DashboardClient';

export const metadata = {
  title: 'Tableau de Bord | Espace Élève | Auto-École Conduite Facile',
  description: 'Gérez votre formation, suivez votre progression et réservez vos leçons de conduite depuis votre espace personnel.',
};

export default function TableauDeBordPage() {
  return (
    <div>
      <DashboardClient />
    </div>
  );
}
