import EspaceEleveLogin from '@/components/espace-eleve/EspaceEleveLogin';

export const metadata = {
  title: 'Espace Élève | Auto-École Conduite Facile',
  description: 'Connectez-vous à votre espace élève pour suivre votre progression, réserver des leçons et accéder à vos documents.',
};

export default function EspaceElevePage() {
  return (
    <div>
      <EspaceEleveLogin />
    </div>
  );
}
