"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Nous acceptons les paiements par carte bancaire, chèque, espèces et virement bancaire. Nous proposons également des facilités de paiement avec possibilité d'échelonner les règlements sans frais supplémentaires."
  },
  {
    id: 2,
    question: "Est-ce que je peux payer en plusieurs fois ?",
    answer: "Oui, nous proposons des facilités de paiement adaptées à votre budget. Vous pouvez régler votre formation en 3, 4 ou 6 fois sans frais selon la formule choisie. N'hésitez pas à nous consulter pour établir un échéancier personnalisé."
  },
  {
    id: 3,
    question: "Les prix incluent-ils les frais d'examen ?",
    answer: "Oui, nos formules incluent les frais de présentation aux examens (théorique et pratique) comme indiqué dans le détail de chaque formule. Les présentations supplémentaires en cas d'échec sont facturées selon les tarifs indiqués dans la section 'Prestations à l'unité'."
  },
  {
    id: 4,
    question: "Que se passe-t-il si j'ai besoin d'heures supplémentaires ?",
    answer: "Si vous avez besoin d'heures de conduite supplémentaires, elles vous seront facturées au tarif unitaire de 45€ de l'heure. Votre moniteur évaluera régulièrement votre progression et vous conseillera sur le nombre d'heures nécessaires pour atteindre le niveau requis pour l'examen."
  },
  {
    id: 5,
    question: "Comment fonctionne le permis à 1€ par jour ?",
    answer: "Le permis à 1€ par jour est un prêt à taux zéro destiné aux jeunes de 15 à 25 ans. L'État prend en charge les intérêts, et vous remboursez un montant fixe de 30€ maximum par mois. Le montant total du prêt peut aller jusqu'à 1200€ pour le permis B. Nous vous accompagnons dans les démarches administratives auprès des banques partenaires."
  },
  {
    id: 6,
    question: "Est-il possible d'utiliser mon CPF pour financer mon permis ?",
    answer: "Oui, le permis de conduire est éligible au financement par le Compte Personnel de Formation (CPF) sous certaines conditions. Vous devez notamment justifier que l'obtention du permis contribue à votre insertion professionnelle ou à la sécurisation de votre parcours professionnel. Nous pouvons vous aider à constituer votre dossier."
  },
  {
    id: 7,
    question: "Y a-t-il des frais supplémentaires non mentionnés dans vos tarifs ?",
    answer: "Non, nos tarifs sont transparents et incluent tous les frais nécessaires à votre formation selon la formule choisie. Les seuls frais supplémentaires éventuels concernent les heures de conduite additionnelles si nécessaire, ou les présentations supplémentaires aux examens en cas d'échec."
  },
  {
    id: 8,
    question: "Proposez-vous des réductions pour les étudiants ?",
    answer: "Oui, nous proposons une réduction de 5% sur toutes nos formules pour les étudiants sur présentation d'un justificatif valide. Nous offrons également des tarifs préférentiels pour les demandeurs d'emploi et les bénéficiaires du RSA."
  }
];

const TarifsFAQ = () => {
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
            Questions Fréquentes sur nos Tarifs
          </h2>
          <p className="text-lg text-gray-700">
            Vous avez des questions sur nos tarifs et options de financement ? Consultez notre FAQ ci-dessous.
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
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Nous contacter
            </a>
            <a
              href="tel:+33123456789"
              className="bg-white border border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              01 23 45 67 89
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TarifsFAQ;
