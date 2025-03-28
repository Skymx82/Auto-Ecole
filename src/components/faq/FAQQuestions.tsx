"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaCar, FaGraduationCap, FaMoneyBillWave, FaClipboardList, FaUserFriends, FaCalendarAlt } from 'react-icons/fa';

// Données des questions regroupées par catégorie
const faqData = [
  {
    id: 'formations',
    title: 'Formations',
    icon: <FaGraduationCap className="text-[#FF4242]" />,
    questions: [
      {
        id: 1,
        question: "Quelles sont les différentes formules de formation proposées ?",
        answer: "Nous proposons plusieurs formules adaptées à vos besoins : la formation classique (20h de conduite), la formation accélérée (30h en 2 semaines), la conduite accompagnée (dès 15 ans) et des formules sur-mesure. Toutes nos formations sont dispensées sur Fiat 500, véhicule idéal pour l'apprentissage de la conduite."
      },
      {
        id: 2,
        question: "Combien d'heures de conduite sont nécessaires pour passer l'examen ?",
        answer: "La réglementation impose un minimum de 20 heures de conduite. Cependant, le nombre d'heures nécessaire varie selon les aptitudes de chaque élève. Notre évaluation initiale nous permet d'estimer le volume horaire adapté à votre profil. En moyenne, nos élèves ont besoin de 25 à 30 heures pour atteindre le niveau requis pour l'examen."
      },
      {
        id: 3,
        question: "Comment se déroule la formation au code de la route ?",
        answer: "Notre formation au code de la route combine des cours en présentiel avec nos moniteurs et un accès illimité à notre plateforme d'entraînement en ligne. Vous pouvez ainsi vous exercer à votre rythme, où que vous soyez. Nos cours en salle sont interactifs et abordent tous les thèmes de l'examen avec des explications détaillées et des mises en situation."
      },
      {
        id: 4,
        question: "Puis-je commencer les leçons de conduite avant d'avoir obtenu le code ?",
        answer: "Oui, vous pouvez commencer les leçons de conduite avant d'avoir obtenu le code de la route. Cette approche parallèle est même recommandée car elle permet de mettre en pratique les connaissances théoriques et d'avancer plus rapidement dans votre formation. Cependant, vous ne pourrez pas passer l'examen pratique sans avoir validé l'examen théorique."
      },
      {
        id: 5,
        question: "Qu'est-ce que la conduite accompagnée et quels sont ses avantages ?",
        answer: "La conduite accompagnée (AAC) permet de commencer l'apprentissage dès 15 ans, avec un accompagnateur expérimenté après une formation initiale en auto-école. Ses avantages sont nombreux : plus d'expérience avant l'examen, taux de réussite plus élevé (74% contre 57%), assurance moins chère après l'obtention du permis, et période probatoire réduite à 2 ans au lieu de 3."
      },
      {
        id: 6,
        question: "Proposez-vous des cours de perfectionnement après l'obtention du permis ?",
        answer: "Oui, nous proposons des cours de perfectionnement pour les conducteurs novices ou expérimentés. Ces sessions permettent d'approfondir certaines compétences comme la conduite sur autoroute, la conduite de nuit, ou la conduite économique. C'est une excellente façon de gagner en confiance et d'améliorer votre technique de conduite sur nos Fiat 500."
      },
      {
        id: 7,
        question: "Quelle est la durée de validité de mon inscription ?",
        answer: "Votre inscription est valable 3 ans pour le code de la route et 5 ans pour la conduite à compter de la date de validation de votre dossier. Si vous n'avez pas obtenu votre permis dans ce délai, vous devrez procéder à une réinscription. Nous vous accompagnons tout au long de votre parcours pour éviter cette situation."
      },
      {
        id: 8,
        question: "Proposez-vous des cours en langue étrangère ?",
        answer: "Oui, nous proposons des cours de conduite en anglais et en espagnol avec certains de nos moniteurs bilingues. Veuillez préciser votre demande lors de votre inscription ou contactez-nous pour plus d'informations sur la disponibilité de ces moniteurs."
      }
    ]
  },
  {
    id: 'vehicules',
    title: 'Nos Fiat 500',
    icon: <FaCar className="text-[#FF4242]" />,
    questions: [
      {
        id: 9,
        question: "Pourquoi avez-vous choisi la Fiat 500 comme véhicule d'apprentissage ?",
        answer: "Nous avons choisi la Fiat 500 pour ses nombreux avantages pédagogiques : dimensions compactes idéales pour les manœuvres, excellente visibilité, direction précise et légère, boîte de vitesses accessible aux débutants, et nombreux équipements de sécurité. Ces caractéristiques en font un véhicule parfait pour apprendre à conduire avec confiance et plaisir."
      },
      {
        id: 10,
        question: "Les Fiat 500 sont-elles équipées d'une boîte automatique ou manuelle ?",
        answer: "Notre flotte comprend à la fois des Fiat 500 à boîte manuelle et à boîte automatique. Vous pouvez choisir la transmission qui vous convient le mieux selon vos préférences ou besoins spécifiques. Notez que si vous passez votre permis sur une boîte automatique, votre permis sera limité à ce type de transmission pendant les 3 premières années."
      },
      {
        id: 11,
        question: "Les véhicules sont-ils récents et bien entretenus ?",
        answer: "Absolument ! Notre flotte de Fiat 500 est renouvelée régulièrement (tous les 2 ans maximum) et chaque véhicule fait l'objet d'un entretien rigoureux selon les préconisations du constructeur. Nous accordons une importance particulière à la propreté et au bon fonctionnement de tous les équipements pour vous offrir une expérience d'apprentissage optimale."
      },
      {
        id: 12,
        question: "Les Fiat 500 sont-elles adaptées à toutes les morphologies ?",
        answer: "Les Fiat 500, malgré leur taille compacte, offrent un habitacle surprenamment spacieux et adaptable. Les sièges et le volant sont réglables pour s'adapter à différentes morphologies. Cependant, si vous êtes particulièrement grand (plus de 1,90m) ou si vous avez des besoins spécifiques, n'hésitez pas à nous en informer lors de votre inscription pour que nous puissions vous proposer la solution la plus adaptée."
      },
      {
        id: 13,
        question: "Les véhicules sont-ils équipés de doubles commandes ?",
        answer: "Oui, toutes nos Fiat 500 sont équipées de doubles commandes (pédale d'embrayage, de frein et d'accélérateur) permettant au moniteur d'intervenir si nécessaire. Ce dispositif de sécurité est essentiel pour l'apprentissage et vous permet de conduire sereinement même lors de vos premières leçons."
      },
      {
        id: 14,
        question: "Puis-je choisir la couleur de ma Fiat 500 pour les leçons ?",
        answer: "Dans la mesure du possible, nous essayons de respecter vos préférences concernant la couleur de la Fiat 500 (rouge, blanche ou bleue). Cependant, l'attribution des véhicules dépend principalement de la disponibilité et du planning des moniteurs. N'hésitez pas à nous faire part de vos préférences lors de la réservation de vos leçons."
      }
    ]
  },
  {
    id: 'tarifs',
    title: 'Tarifs et paiements',
    icon: <FaMoneyBillWave className="text-[#FF4242]" />,
    questions: [
      {
        id: 15,
        question: "Quels sont les tarifs de vos formations ?",
        answer: "Nos tarifs varient selon la formule choisie : la formation classique au permis B débute à 1200€, la formation accélérée à 1500€, et la conduite accompagnée à 1100€. Ces tarifs comprennent l'inscription, les frais de dossier, les cours de code en ligne et en salle, et les heures de conduite incluses dans le forfait. Consultez notre page Tarifs pour le détail complet ou demandez-nous un devis personnalisé."
      },
      {
        id: 16,
        question: "Proposez-vous des facilités de paiement ?",
        answer: "Oui, nous proposons plusieurs options de paiement échelonné sans frais supplémentaires. Vous pouvez régler en 3 ou 4 fois par chèque ou par prélèvement automatique. Nous acceptons également les paiements par carte bancaire, espèces (dans la limite légale) et chèques. N'hésitez pas à nous consulter pour établir un plan de paiement adapté à votre situation."
      },
      {
        id: 17,
        question: "Quelles aides financières sont disponibles pour financer mon permis ?",
        answer: "Plusieurs aides peuvent vous aider à financer votre permis : le permis à 1€ par jour pour les 15-25 ans, le Compte Personnel de Formation (CPF), les aides de Pôle Emploi pour les demandeurs d'emploi, les aides régionales ou départementales, et parfois des aides de la mission locale pour les jeunes. Nous pouvons vous accompagner dans vos démarches pour obtenir ces financements."
      },
      {
        id: 18,
        question: "Le prix inclut-il les frais d'examen ?",
        answer: "Nos forfaits incluent les frais de présentation à l'examen théorique (code) et à l'examen pratique (conduite) pour une première présentation. En cas d'échec, des frais supplémentaires s'appliquent pour les présentations suivantes : 30€ pour le code et 45€ pour la conduite. Ces frais couvrent les démarches administratives et l'accompagnement le jour de l'examen."
      },
      {
        id: 19,
        question: "Que se passe-t-il si j'ai besoin d'heures supplémentaires ?",
        answer: "Si vous avez besoin d'heures de conduite supplémentaires au-delà de votre forfait initial, elles sont facturées au tarif de 45€ de l'heure. Nous évaluons régulièrement votre progression et vous informons suffisamment à l'avance si des heures additionnelles semblent nécessaires pour atteindre le niveau requis pour l'examen."
      }
    ]
  },
  {
    id: 'examens',
    title: 'Examens',
    icon: <FaClipboardList className="text-[#FF4242]" />,
    questions: [
      {
        id: 20,
        question: "Comment se déroule l'examen du code de la route ?",
        answer: "L'examen du code se déroule dans un centre agréé indépendant de l'auto-école. Il consiste en 40 questions à choix multiples sur tablette tactile. Vous devez obtenir au moins 35 bonnes réponses pour réussir. L'examen dure environ 30 minutes et les résultats sont communiqués par email quelques heures après. Nous vous accompagnons dans la prise de rendez-vous et la préparation."
      },
      {
        id: 21,
        question: "Comment se déroule l'examen pratique du permis de conduire ?",
        answer: "L'examen pratique dure environ 32 minutes et évalue vos compétences en conduite. Il comprend une vérification technique du véhicule, des manœuvres, et une conduite autonome avec GPS. L'examinateur évalue votre maîtrise du véhicule, votre respect du code de la route, votre courtoisie et votre autonomie. Vous êtes accompagné par votre moniteur qui vous attend à la fin de l'épreuve."
      },
      {
        id: 22,
        question: "Quel est le délai pour obtenir une place d'examen ?",
        answer: "Les délais pour obtenir une place d'examen varient selon les périodes et la région. En moyenne, il faut compter 2 à 4 semaines pour le code et 4 à 8 semaines pour la conduite. Nous gérons les inscriptions aux examens et vous proposons la première date disponible dès que vous atteignez le niveau requis. Notre système de réservation prioritaire permet souvent de réduire ces délais."
      },
      {
        id: 23,
        question: "Que se passe-t-il en cas d'échec à l'examen ?",
        answer: "En cas d'échec, nous analysons avec vous les points à améliorer et établissons un plan de remise à niveau ciblé. Vous pouvez repasser l'examen du code sans délai d'attente, mais pour la conduite, il faut généralement attendre 2 à 3 semaines. Des frais de représentation s'appliquent : 30€ pour le code et 45€ pour la conduite, en plus des éventuelles heures de conduite supplémentaires recommandées."
      },
      {
        id: 24,
        question: "Quel est votre taux de réussite aux examens ?",
        answer: "Notre auto-école maintient un taux de réussite supérieur à la moyenne nationale : 75% pour le code (contre 60% au niveau national) et 68% pour la conduite (contre 57% au niveau national). Ces résultats s'expliquent par notre méthode pédagogique personnalisée, la qualité de nos Fiat 500 comme véhicules d'apprentissage, et notre politique de présentation à l'examen uniquement lorsque l'élève est prêt."
      },
      {
        id: 25,
        question: "Comment obtenir mon permis de conduire après réussite à l'examen ?",
        answer: "Après réussite à l'examen pratique, vous recevrez un Certificat d'Examen du Permis de Conduire (CEPC) valable 4 mois. Votre permis définitif sera disponible sous 2 à 3 semaines et vous sera envoyé directement à votre domicile. En attendant, le CEPC et une pièce d'identité vous permettent de conduire en France. Nous vous guidons dans toutes ces démarches administratives."
      },
      {
        id: 26,
        question: "Puis-je passer l'examen dans une autre ville que celle où j'ai pris mes leçons ?",
        answer: "Techniquement, c'est possible, mais cela implique un transfert de dossier qui peut rallonger les délais. De plus, chaque centre d'examen a ses spécificités (parcours, habitudes des examinateurs) que nos moniteurs connaissent parfaitement. Pour maximiser vos chances de réussite, nous recommandons de passer l'examen dans la ville où vous avez été formé avec nos Fiat 500."
      }
    ]
  },
  {
    id: 'moniteurs',
    title: 'Moniteurs',
    icon: <FaUserFriends className="text-[#FF4242]" />,
    questions: [
      {
        id: 27,
        question: "Quelles sont les qualifications de vos moniteurs ?",
        answer: "Tous nos moniteurs sont titulaires du Titre Professionnel d'Enseignant de la Conduite et de la Sécurité Routière (TPECSR) ou du Brevet pour l'Exercice de la Profession d'Enseignant de la Conduite Automobile et de la Sécurité Routière (BEPECASER). Ils suivent régulièrement des formations continues pour rester à jour des évolutions réglementaires et pédagogiques. Chacun possède au minimum 3 ans d'expérience."
      },
      {
        id: 28,
        question: "Puis-je choisir mon moniteur ?",
        answer: "Oui, dans la mesure du possible, nous respectons votre préférence pour un moniteur spécifique. Après votre évaluation initiale, nous vous proposons un moniteur dont le style pédagogique correspond à votre profil d'apprentissage. Si vous souhaitez changer de moniteur en cours de formation, c'est tout à fait possible sur simple demande, sans frais supplémentaires."
      },
      {
        id: 29,
        question: "Les moniteurs sont-ils spécialisés sur la Fiat 500 ?",
        answer: "Absolument ! Tous nos moniteurs sont spécialement formés à l'enseignement sur Fiat 500 et connaissent parfaitement les spécificités de ce véhicule. Cette expertise leur permet d'adapter leur pédagogie pour tirer le meilleur parti des avantages de la Fiat 500 dans l'apprentissage de la conduite, notamment pour les manœuvres et la conduite en milieu urbain."
      },
      {
        id: 30,
        question: "Comment sont attribués les moniteurs aux élèves ?",
        answer: "L'attribution des moniteurs se fait en fonction de plusieurs critères : vos disponibilités, le style d'apprentissage identifié lors de votre évaluation initiale, et les spécialités de chaque moniteur (conduite accompagnée, conduite intensive, élèves anxieux, etc.). Notre objectif est de créer le meilleur binôme possible pour faciliter votre progression et maximiser vos chances de réussite."
      }
    ]
  },
  {
    id: 'rendez-vous',
    title: 'Rendez-vous',
    icon: <FaCalendarAlt className="text-[#FF4242]" />,
    questions: [
      {
        id: 31,
        question: "Comment prendre rendez-vous pour une leçon de conduite ?",
        answer: "Vous pouvez prendre rendez-vous pour une leçon de conduite de plusieurs façons : directement à l'accueil de l'auto-école, par téléphone au 01 23 45 67 89, ou via votre espace élève en ligne. Nous recommandons de planifier vos leçons plusieurs semaines à l'avance pour obtenir les créneaux qui vous conviennent le mieux, particulièrement pendant les périodes chargées."
      },
      {
        id: 32,
        question: "Comment modifier ou annuler un rendez-vous ?",
        answer: "Pour modifier ou annuler un rendez-vous, contactez-nous par téléphone ou via votre espace élève au moins 48 heures à l'avance. Les annulations tardives (moins de 48h) ou les absences non justifiées entraînent la facturation de la leçon, conformément à nos conditions générales. En cas d'empêchement de dernière minute pour raison médicale, un justificatif vous sera demandé."
      },
      {
        id: 33,
        question: "Quelle est la durée d'une leçon de conduite ?",
        answer: "Une leçon de conduite standard dure 1h30, comprenant 5 minutes de présentation des objectifs, 1h20 de conduite effective sur notre Fiat 500, et 5 minutes de bilan et planification de la prochaine leçon. Cette durée optimale permet un apprentissage efficace sans fatigue excessive. Pour les élèves débutants, nous proposons parfois des leçons d'1h pour une introduction en douceur."
      },
      {
        id: 34,
        question: "Quels sont vos horaires d'ouverture ?",
        answer: "Notre auto-école est ouverte du lundi au vendredi de 9h à 19h et le samedi de 9h à 17h. Les leçons de conduite peuvent être programmées du lundi au samedi de 8h à 20h. Nous proposons également des créneaux en soirée jusqu'à 21h certains jours de la semaine pour accommoder les élèves qui travaillent ou étudient en journée."
      },
      {
        id: 35,
        question: "Est-il possible de prendre des leçons le week-end ?",
        answer: "Oui, nous proposons des leçons de conduite le samedi de 8h à 18h. Ces créneaux étant très demandés, nous vous conseillons de les réserver plusieurs semaines à l'avance. Notez que nous ne dispensons pas de leçons le dimanche, sauf dans le cadre de stages intensifs spécifiques organisés ponctuellement."
      },
      {
        id: 36,
        question: "Comment accéder à mon espace élève en ligne ?",
        answer: "Pour accéder à votre espace élève, rendez-vous sur notre site web et cliquez sur le bouton 'Espace Élève' dans le menu principal. Connectez-vous avec les identifiants qui vous ont été fournis lors de votre inscription. Dans cet espace, vous pouvez consulter votre progression, réserver ou modifier vos leçons, accéder à la plateforme d'entraînement au code, et gérer vos documents administratifs."
      }
    ]
  }
];

const FAQQuestions = () => {
  const [openQuestions, setOpenQuestions] = useState<Record<number, boolean>>({});

  const toggleQuestion = (id: number) => {
    setOpenQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-12">
      {faqData.map((category) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id={category.id}
          className="scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
              {category.icon}
            </div>
            <h2 className="text-2xl font-bold text-[#212121]">{category.title}</h2>
          </div>

          <div className="space-y-4">
            {category.questions.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: faq.id * 0.03 }}
                viewport={{ once: true }}
                className="border border-gray-100 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className={`w-full text-left p-5 flex justify-between items-center transition-colors duration-300 ${
                    openQuestions[faq.id]
                      ? 'bg-[#FF4242] text-white'
                      : 'bg-white text-[#212121] hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium pr-8">{faq.question}</span>
                  {openQuestions[faq.id] ? (
                    <FaChevronUp className="flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="flex-shrink-0" />
                  )}
                </button>
                {openQuestions[faq.id] && (
                  <div className="bg-white p-5 border-t border-gray-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gray-50 rounded-xl p-8 text-center mt-12"
      >
        <h3 className="text-xl font-bold text-[#212121] mb-4">Vous n'avez pas trouvé la réponse à votre question ?</h3>
        <p className="text-gray-700 mb-6">
          Notre équipe est à votre disposition pour répondre à toutes vos interrogations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact#rdv"
            className="bg-[#FF4242] hover:bg-[#E03232] text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-sm"
          >
            Nous contacter
          </a>
          <a
            href="tel:+33123456789"
            className="bg-white border border-gray-200 text-[#212121] hover:border-gray-300 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            01 23 45 67 89
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQQuestions;
