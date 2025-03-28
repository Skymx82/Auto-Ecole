import TarifsHero from '@/components/tarifs/TarifsHero';
import TarifsTable from '@/components/tarifs/TarifsTable';
import TarifsFinancement from '@/components/tarifs/TarifsFinancement';

export const metadata = {
  title: 'Nos Tarifs | Auto-École Conduite Facile',
  description: 'Consultez nos tarifs transparents pour toutes nos formations : permis B, permis moto, conduite accompagnée et perfectionnement.',
};

export default function TarifsPage() {
  return (
    <div>
      <TarifsHero />
      <TarifsTable />
      <TarifsFinancement />
    </div>
  );
}
