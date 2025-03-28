"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaCheckCircle, 
  FaRegCircle, 
  FaCarAlt, 
  FaRoad,
  FaTrafficLight,
  FaCity,
  FaRoute,
  FaParking,
  FaDownload
} from 'react-icons/fa';

interface StudentData {
  name: string;
  email: string;
  formation: string;
  progress: number;
  instructor: string;
  startDate: string;
  nextLesson: string;
  codeExam: {
    date: string;
    passed: boolean | null;
    score: string;
  };
  drivingExam: {
    date: string;
    passed: boolean | null;
  };
  completedLessons: number;
  totalLessons: number;
  notifications: number;
}

interface EspaceEleveProgressProps {
  studentData: StudentData;
}

const EspaceEleveProgress: React.FC<EspaceEleveProgressProps> = ({ studentData }) => {
  const [activeTab, setActiveTab] = useState('driving');

  // Données simulées pour les compétences de conduite
  const drivingSkills = [
    {
      id: 1,
      category: 'Maîtrise du véhicule',
      icon: <FaCarAlt />,
      color: 'bg-blue-100 text-blue-600',
      skills: [
        { id: 101, name: 'Installation au poste de conduite', progress: 100 },
        { id: 102, name: 'Démarrage et arrêt', progress: 90 },
        { id: 103, name: 'Utilisation des commandes', progress: 85 },
        { id: 104, name: 'Maîtrise de la direction', progress: 80 },
        { id: 105, name: 'Maîtrise de l\'embrayage', progress: 75 }
      ]
    },
    {
      id: 2,
      category: 'Circulation',
      icon: <FaRoad />,
      color: 'bg-green-100 text-green-600',
      skills: [
        { id: 201, name: 'Adaptation de l\'allure', progress: 70 },
        { id: 202, name: 'Respect des distances de sécurité', progress: 80 },
        { id: 203, name: 'Franchissement des intersections', progress: 65 },
        { id: 204, name: 'Croisement et dépassement', progress: 60 },
        { id: 205, name: 'Prise en compte des autres usagers', progress: 75 }
      ]
    },
    {
      id: 3,
      category: 'Signalisation',
      icon: <FaTrafficLight />,
      color: 'bg-red-100 text-red-600',
      skills: [
        { id: 301, name: 'Connaissance des panneaux', progress: 90 },
        { id: 302, name: 'Respect des feux', progress: 95 },
        { id: 303, name: 'Respect des marquages au sol', progress: 85 },
        { id: 304, name: 'Connaissance des priorités', progress: 80 }
      ]
    },
    {
      id: 4,
      category: 'Environnements spécifiques',
      icon: <FaCity />,
      color: 'bg-purple-100 text-purple-600',
      skills: [
        { id: 401, name: 'Conduite en agglomération', progress: 75 },
        { id: 402, name: 'Conduite hors agglomération', progress: 65 },
        { id: 403, name: 'Conduite sur autoroute', progress: 50 },
        { id: 404, name: 'Conduite de nuit', progress: 40 },
        { id: 405, name: 'Conduite par intempéries', progress: 30 }
      ]
    },
    {
      id: 5,
      category: 'Manœuvres',
      icon: <FaParking />,
      color: 'bg-yellow-100 text-yellow-600',
      skills: [
        { id: 501, name: 'Demi-tour', progress: 70 },
        { id: 502, name: 'Stationnement en créneau', progress: 60 },
        { id: 503, name: 'Stationnement en bataille', progress: 65 },
        { id: 504, name: 'Stationnement en épi', progress: 55 },
        { id: 505, name: 'Marche arrière', progress: 75 }
      ]
    }
  ];

  // Données simulées pour les résultats du code
  const codeResults = [
    { id: 1, date: '10/02/2025', score: '36/40', passed: true, theme: 'Examen officiel' },
    { id: 2, date: '05/02/2025', score: '35/40', passed: true, theme: 'Examen blanc' },
    { id: 3, date: '28/01/2025', score: '32/40', passed: true, theme: 'Examen blanc' },
    { id: 4, date: '20/01/2025', score: '30/40', passed: true, theme: 'Examen blanc' },
    { id: 5, date: '15/01/2025', score: '28/40', passed: true, theme: 'Examen blanc' }
  ];

  // Données simulées pour les thèmes du code
  const codeThemes = [
    { id: 1, name: 'Signalisation', progress: 90 },
    { id: 2, name: 'Priorités', progress: 85 },
    { id: 3, name: 'Croisements / Dépassements', progress: 80 },
    { id: 4, name: 'Règles de circulation', progress: 85 },
    { id: 5, name: 'Autoroute', progress: 75 },
    { id: 6, name: 'Tunnels / Passages à niveau', progress: 70 },
    { id: 7, name: 'Visibilité / Éclairage', progress: 80 },
    { id: 8, name: 'Éco-conduite / Éco-mobilité', progress: 85 },
    { id: 9, name: 'Prise de conscience des risques', progress: 75 },
    { id: 10, name: 'Premiers secours', progress: 70 }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Suivi de progression
        </h1>
        <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center">
          <FaDownload className="mr-2" />
          Télécharger le rapport
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('driving')}
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'driving'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              <FaCarAlt className="inline-block mr-2" />
              Conduite
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'code'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              <FaRoute className="inline-block mr-2" />
              Code de la route
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'driving' ? (
            <div className="space-y-8">
              {/* Progression globale de conduite */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Progression globale</h2>
                <div className="bg-gray-100 rounded-full h-4 mb-2">
                  <div
                    className="bg-red-600 h-4 rounded-full"
                    style={{ width: `${studentData.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Débutant</span>
                  <span>Intermédiaire</span>
                  <span>Confirmé</span>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">Heures effectuées</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {studentData.completedLessons} / {studentData.totalLessons}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">Compétences maîtrisées</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {drivingSkills.reduce(
                        (total, category) => 
                          total + category.skills.filter(skill => skill.progress >= 80).length, 
                        0
                      )} / {drivingSkills.reduce((total, category) => total + category.skills.length, 0)}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">Prêt pour l'examen</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {studentData.progress >= 80 ? 'Oui' : 'Pas encore'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Compétences par catégorie */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Compétences par catégorie</h2>
                <div className="space-y-6">
                  {drivingSkills.map((category) => (
                    <div key={category.id} className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-full mr-3 ${category.color}`}>
                          {category.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                      </div>
                      <div className="space-y-4">
                        {category.skills.map((skill) => (
                          <div key={skill.id}>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700">{skill.name}</span>
                              <span className="text-gray-900 font-medium">{skill.progress}%</span>
                            </div>
                            <div className="bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-red-600 h-2.5 rounded-full"
                                style={{ width: `${skill.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commentaires du moniteur */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Commentaires du moniteur</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">25/03/2025 :</span> Bonne maîtrise des manœuvres de stationnement. 
                      Continuez à travailler sur la fluidité des mouvements.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">18/03/2025 :</span> Progrès sur autoroute, 
                      mais attention aux distances de sécurité qui restent parfois insuffisantes.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">10/03/2025 :</span> Excellente gestion des priorités 
                      aux intersections. Continuez ainsi !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Résultats des examens de code */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Résultats des examens</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Score
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Résultat
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {codeResults.map((result) => (
                        <tr key={result.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {result.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {result.theme}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                            {result.score}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {result.passed ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Réussi
                              </span>
                            ) : (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Échoué
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Progression par thème */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Progression par thème</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {codeThemes.map((theme) => (
                    <div key={theme.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">{theme.name}</span>
                        <span className="text-gray-900 font-medium">{theme.progress}%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-red-600 h-2.5 rounded-full"
                          style={{ width: `${theme.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conseils pour l'examen */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Conseils pour l'examen</h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Lisez attentivement chaque question avant de répondre.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Prenez votre temps, vous disposez de 30 minutes pour 40 questions.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>En cas de doute, fiez-vous à votre première intuition.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Soyez particulièrement attentif aux questions sur les priorités et la signalisation.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>N'oubliez pas que vous pouvez faire jusqu'à 5 erreurs (35/40 minimum pour réussir).</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EspaceEleveProgress;
