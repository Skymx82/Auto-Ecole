"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCar, FaCarSide, FaUserFriends, FaGraduationCap, FaCheck, FaArrowLeft, FaCalendarAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';

// Données des formations
const formationsData = {
  "permis-b": {
    title: "Permis B Classique",
    subtitle: "Formation complète sur Fiat 500",
    description: "Notre formation au permis B sur Fiat 500 est idéale pour apprendre à conduire en toute confiance. La Fiat 500, compacte et maniable, est parfaite pour les débutants.",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    color: "#FF4242",
    icon: <FaCar className="text-xl" />,
    duration: "3 à 6 mois en moyenne",
    sessions: "20 heures minimum",
    price: "999€",
    features: [
      "Évaluation de départ personnalisée",
      "Accès illimité à la plateforme de code en ligne",
      "20 heures de conduite sur Fiat 500",
      "1 accompagnement à l'examen pratique",
      "Livret d'apprentissage numérique",
      "Suivi pédagogique personnalisé"
    ],
    content: [
      {
        title: "Déroulement de la formation",
        text: "La formation se déroule en plusieurs étapes : évaluation initiale, formation au code de la route, formation pratique à la conduite, et présentation aux examens. Vous progressez à votre rythme, avec un suivi personnalisé de nos moniteurs expérimentés."
      },
      {
        title: "Pourquoi choisir la Fiat 500",
        text: "La Fiat 500 est un véhicule idéal pour l'apprentissage : compacte pour faciliter les manœuvres, excellente visibilité, direction assistée légère, et équipée de toutes les technologies modernes d'aide à la conduite. Son gabarit rassurant vous permettra de prendre confiance rapidement."
      }
    ]
  },
  "permis-accelere": {
    title: "Permis Accéléré",
    subtitle: "Obtenez votre permis en 1 mois",
    description: "Notre formation accélérée est conçue pour ceux qui ont besoin d'obtenir leur permis rapidement. Intensive et efficace, elle vous permet d'être prêt pour l'examen en un temps record.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    color: "#212121",
    icon: <FaCarSide className="text-xl" />,
    duration: "1 mois environ",
    sessions: "30 heures intensives",
    price: "1290€",
    features: [
      "Évaluation de départ personnalisée",
      "Stage intensif de code (1 semaine)",
      "30 heures de conduite sur Fiat 500",
      "Cours concentrés sur 4 semaines",
      "1 accompagnement à l'examen pratique",
      "Présentation prioritaire aux examens"
    ],
    content: [
      {
        title: "Déroulement de la formation accélérée",
        text: "La formation accélérée commence par un stage intensif de code d'une semaine, suivi de 30 heures de conduite réparties sur 3 semaines. Ce rythme soutenu vous permet d'acquérir rapidement les compétences nécessaires pour passer l'examen."
      },
      {
        title: "Pour qui est cette formation ?",
        text: "Cette formation est idéale pour les personnes qui ont besoin de leur permis rapidement pour des raisons professionnelles ou personnelles, ou pour ceux qui préfèrent une immersion totale dans l'apprentissage plutôt qu'une formation étalée sur plusieurs mois."
      }
    ]
  },
  "conduite-accompagnee": {
    title: "Conduite Accompagnée",
    subtitle: "Pour les jeunes dès 15 ans",
    description: "La conduite accompagnée (AAC) permet aux jeunes dès 15 ans de commencer leur apprentissage de la conduite. Cette formule offre un excellent taux de réussite et une assurance moins chère après l'obtention du permis.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    color: "#8ECAE6",
    icon: <FaUserFriends className="text-xl" />,
    duration: "Minimum 1 an d'accompagnement",
    sessions: "20 heures + conduite avec accompagnateur",
    price: "1150€",
    features: [
      "Formation initiale de 20 heures sur Fiat 500",
      "Rendez-vous préalable avec l'accompagnateur",
      "2 rendez-vous pédagogiques obligatoires",
      "Livret d'apprentissage spécifique AAC",
      "Suivi personnalisé pendant toute la période",
      "Présentation à l'examen dès 17 ans"
    ],
    content: [
      {
        title: "Déroulement de la conduite accompagnée",
        text: "Après une formation initiale de 20 heures minimum et l'obtention du code, vous pourrez conduire avec un accompagnateur (parent, ami) pendant au moins un an et 3000 km. Des rendez-vous pédagogiques réguliers permettent de suivre votre progression."
      },
      {
        title: "Avantages de la conduite accompagnée",
        text: "La conduite accompagnée offre de nombreux avantages : taux de réussite plus élevé (74% contre 57%), période probatoire réduite (2 ans au lieu de 3), assurance moins chère après l'obtention du permis, et une expérience de conduite plus variée avant l'examen."
      }
    ]
  },
  "code-route": {
    title: "Code de la Route",
    subtitle: "Préparation complète à l'examen théorique",
    description: "Notre formation au code de la route combine des cours en salle avec un accès illimité à notre plateforme d'entraînement en ligne, pour une préparation optimale à l'examen théorique.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    color: "#4CAF50",
    icon: <FaGraduationCap className="text-xl" />,
    duration: "1 à 2 mois en moyenne",
    sessions: "Accès illimité + cours en salle",
    price: "350€",
    features: [
      "Accès illimité à la plateforme en ligne",
      "Cours collectifs avec moniteur",
      "Tests blancs réguliers",
      "Suivi de progression personnalisé",
      "Application mobile pour s'entraîner partout",
      "1 présentation à l'examen"
    ],
    content: [
      {
        title: "Notre méthode d'apprentissage",
        text: "Notre méthode combine l'apprentissage en autonomie sur notre plateforme en ligne et des cours en salle avec un moniteur qui explique les points difficiles et répond à vos questions. Cette approche mixte permet d'obtenir d'excellents résultats."
      },
      {
        title: "Contenu de la formation",
        text: "La formation couvre les 10 thèmes officiels de l'examen : la circulation routière, le conducteur, la route, les autres usagers, les notions diverses, les premiers secours, prendre et quitter son véhicule, la mécanique et les équipements, l'environnement, et la sécurité du passager et du véhicule."
      }
    ]
  }
};

interface FormationDetailProps {
  formationId: string;
}

const FormationDetail: React.FC<FormationDetailProps> = ({ formationId }) => {
  const formation = formationsData[formationId as keyof typeof formationsData];
  
  if (!formation) {
    return <div>Formation non trouvée</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${formation.image})` }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-black">
          <div className="max-w-4xl mx-auto">
            <Link href="/formations" className="inline-flex items-center text-gray-600 hover:text-[#FF4242] mb-6 transition-colors duration-200">
              <FaArrowLeft className="mr-2" />
              Retour aux formations
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="inline-flex items-center px-4 py-2 rounded-lg mb-4"
                style={{ backgroundColor: formation.color, color: 'white' }}
              >
                {formation.icon}
                <span className="ml-2 font-medium">{formation.subtitle}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-[#212121] mb-6">
                {formation.title}
              </h1>
              
              <p className="text-xl text-[#212121] mb-8">
                {formation.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center text-black">
                  <FaCalendarAlt className="text-[#FF4242] mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Durée</div>
                    <div className="font-medium">{formation.duration}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-black">
                  <FaClock className="text-[#FF4242] mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Nombre d'heures</div>
                    <div className="font-medium">{formation.sessions}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-black">
                  <FaMoneyBillWave className="text-[#FF4242] mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Tarif</div>
                    <div className="font-medium">{formation.price}</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/contact#rdv" 
                  className="bg-[#FF4242] hover:bg-[#E03232] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
                >
                  Réserver une évaluation
                </a>
                <a 
                  href="/contact" 
                  className="bg-white border-2 border-[#FF4242] text-[#FF4242] hover:bg-[#FFF5F5] font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
                >
                  Demander un devis
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 bg-[#F5F5F5] text-black" >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-6 sticky top-24"
              >
                <h3 className="text-xl font-bold text-[#212121] mb-6">Ce qui est inclus</h3>
                
                <div className="space-y-4">
                  {formation.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div 
                        className="p-1 rounded-full mr-3 flex-shrink-0 mt-1"
                        style={{ backgroundColor: formation.color }}
                      >
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <span className="text-[#212121]">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-bold text-[#212121] mb-2">Des questions ?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    N'hésitez pas à nous contacter pour plus d'informations sur cette formation.
                  </p>
                  <a 
                    href="/contact" 
                    className="block w-full py-2 px-4 bg-[#212121] text-white text-center rounded-lg hover:bg-[#333333] transition duration-200"
                  >
                    Nous contacter
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {formation.content.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <h3 className="text-xl font-bold text-[#212121] mb-4">{section.title}</h3>
                    <p className="text-[#212121]">{section.text}</p>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm p-6"
                >
                  <h3 className="text-xl font-bold text-[#212121] mb-4">Pourquoi choisir notre auto-école ?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="bg-[#FF4242] p-2 rounded-lg mr-3 text-white">
                        <FaCar className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#212121]">Flotte de Fiat 500</h4>
                        <p className="text-sm text-gray-600">Véhicules récents, faciles à maîtriser</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#FF4242] p-2 rounded-lg mr-3 text-white">
                        <FaUserFriends className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#212121]">Moniteurs expérimentés</h4>
                        <p className="text-sm text-gray-600">Pédagogues et bienveillants</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#FF4242] p-2 rounded-lg mr-3 text-white">
                        <FaGraduationCap className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#212121]">94% de réussite</h4>
                        <p className="text-sm text-gray-600">Un taux bien supérieur à la moyenne</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#FF4242] p-2 rounded-lg mr-3 text-white">
                        <FaMoneyBillWave className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#212121]">Paiement facilité</h4>
                        <p className="text-sm text-gray-600">En 3x sans frais, permis à 1€/jour</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 bg-[#212121] rounded-xl p-8 text-white"
              >
                <h3 className="text-xl font-bold mb-4">Prêt à commencer votre formation ?</h3>
                <p className="mb-6">
                  Réservez dès maintenant votre évaluation de conduite sur Fiat 500 et commencez votre apprentissage dans les meilleures conditions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/contact#rdv" 
                    className="bg-[#FF4242] hover:bg-[#E03232] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
                  >
                    Réserver une évaluation
                  </a>
                  <a 
                    href="/formations" 
                    className="bg-transparent border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Voir les autres formations
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormationDetail;
