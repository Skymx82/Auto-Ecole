import MoniteursHero from '@/components/moniteurs/MoniteursHero';
import MoniteursTeam from '@/components/moniteurs/MoniteursTeam';
import MoniteursTestimonials from '@/components/moniteurs/MoniteursTestimonials';

export const metadata = {
  title: 'Nos Moniteurs | Auto-École Conduite Facile',
  description: 'Découvrez notre équipe de moniteurs diplômés et expérimentés qui vous accompagneront tout au long de votre formation à la conduite.',
};

export default function MoniteursPage() {
  return (
    <div>
      <MoniteursHero />
      <MoniteursTeam />
      <MoniteursTestimonials />
    </div>
  );
}
