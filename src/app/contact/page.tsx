import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Contact | Auto-École Conduite Facile',
  description: 'Contactez notre auto-école pour prendre rendez-vous, obtenir des informations sur nos formations ou nous poser vos questions.',
};

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <ContactInfo />
        </div>
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
