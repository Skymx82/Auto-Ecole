"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    question: "Comment prendre rendez-vous pour une évaluation de conduite ?",
    answer: "Vous pouvez prendre rendez-vous pour une évaluation de conduite en nous appelant au 01 23 45 67 89, en nous envoyant un email à contact@conduitefacile.fr ou en remplissant le formulaire de contact sur cette page. Nous vous répondrons dans les plus brefs délais pour convenir d'un rendez-vous."
  },
  {
    id: 2,
    question: "Comment modifier ou annuler un rendez-vous ?",
    answer: "Pour modifier ou annuler un rendez-vous, veuillez nous contacter par téléphone au 01 23 45 67 89 au moins 48 heures à l'avance. En cas d'annulation tardive ou d'absence, la leçon pourra être facturée conformément à nos conditions générales."
  },
  {
    id: 3,
    question: "Comment accéder à mon espace élève en ligne ?",
    answer: "Pour accéder à votre espace élève, cliquez sur le bouton 'Espace Élève' dans le menu de navigation en haut de la page. Vous pourrez vous connecter avec les identifiants qui vous ont été fournis lors de votre inscription. Si vous avez oublié vos identifiants, cliquez sur 'Mot de passe oublié' ou contactez-nous."
  },
  {
    id: 4,
    question: "Comment obtenir un devis personnalisé ?",
    answer: "Pour obtenir un devis personnalisé, vous pouvez remplir le formulaire de contact en sélectionnant 'Renseignements sur nos formations' comme sujet. Précisez vos besoins spécifiques dans le message et nous vous enverrons un devis détaillé par email dans les 24 heures ouvrées."
  },
  {
    id: 5,
    question: "Proposez-vous des cours de conduite en langue étrangère ?",
    answer: "Oui, nous proposons des cours de conduite en anglais et en espagnol avec certains de nos moniteurs bilingues. Veuillez préciser votre demande lors de votre inscription ou contactez-nous pour plus d'informations."
  },
  {
    id: 6,
    question: "Comment se déroule l'évaluation initiale de conduite ?",
    answer: "L'évaluation initiale dure environ 1 heure et permet d'estimer le nombre d'heures de formation nécessaires pour atteindre le niveau requis pour l'examen. Elle se déroule sur route avec un moniteur qui évaluera vos compétences et vos réflexes. À l'issue de cette évaluation, nous vous proposerons un plan de formation personnalisé."
  }
];

const ContactFAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-gray-700">
            Vous avez des questions ? Consultez notre FAQ ci-dessous ou contactez-nous directement.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: faq.id * 0.05 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className={`w-full text-left p-5 rounded-lg flex justify-between items-center transition-colors duration-300 ${
                  openId === faq.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="font-semibold">{faq.question}</span>
                {openId === faq.id ? (
                  <FaChevronUp className="flex-shrink-0" />
                ) : (
                  <FaChevronDown className="flex-shrink-0" />
                )}
              </button>
              {openId === faq.id && (
                <div className="bg-white p-5 rounded-b-lg shadow-md border-t-0 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-12"
        >
          <p className="text-gray-700 mb-6">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#form"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Contactez-nous
            </a>
            <a
              href="/faq"
              className="bg-white border border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Voir toutes les FAQ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFAQ;
