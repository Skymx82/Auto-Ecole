import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Prendre rendez-vous | Auto-École Fiat 500',
  description: 'Prenez rendez-vous facilement pour votre formation au permis de conduire sur Fiat 500. Réservation rapide de cours et demande d\'informations.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#F5F5F5]">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
