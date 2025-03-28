"use client";

import { motion } from 'framer-motion';
import { 
  FaUserGraduate, 
  FaCalendarAlt, 
  FaUserTie, 
  FaClipboardCheck,
  FaCarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaRegClock
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

interface EspaceEleveOverviewProps {
  studentData: StudentData;
}

const EspaceEleveOverview: React.FC<EspaceEleveOverviewProps> = ({ studentData }) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Bienvenue, {studentData.name}
        </h1>
        <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center">
          <FaCalendarAlt className="mr-2" />
          Réserver une leçon
        </button>
      </div>

      {/* Progression générale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4">Progression générale</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 font-medium">Progression globale</span>
              <span className="text-gray-900 font-semibold">{studentData.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-red-600 h-2.5 rounded-full"
                style={{ width: `${studentData.progress}%` }}
              ></div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-700 text-sm">Heures effectuées</span>
                <p className="text-gray-900 font-semibold">{studentData.completedLessons} / {studentData.totalLessons}</p>
              </div>
              <div>
                <span className="text-gray-700 text-sm">Formation</span>
                <p className="text-gray-900 font-semibold">{studentData.formation}</p>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-2">
                  <FaClipboardCheck className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Examen code</h3>
              </div>
              <div className="flex items-center mt-2">
                {studentData.codeExam.passed === true ? (
                  <FaCheckCircle className="text-green-600 mr-2" />
                ) : studentData.codeExam.passed === false ? (
                  <FaTimesCircle className="text-red-600 mr-2" />
                ) : (
                  <FaRegClock className="text-yellow-600 mr-2" />
                )}
                <div>
                  <p className="text-gray-900 font-medium">
                    {studentData.codeExam.passed === true
                      ? `Réussi (${studentData.codeExam.score})`
                      : studentData.codeExam.passed === false
                      ? 'Non réussi'
                      : 'En attente'}
                  </p>
                  <p className="text-gray-700 text-sm">{studentData.codeExam.date}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="bg-purple-100 p-2 rounded-full mr-2">
                  <FaCarAlt className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Examen conduite</h3>
              </div>
              <div className="flex items-center mt-2">
                {studentData.drivingExam.passed === true ? (
                  <FaCheckCircle className="text-green-600 mr-2" />
                ) : studentData.drivingExam.passed === false ? (
                  <FaTimesCircle className="text-red-600 mr-2" />
                ) : (
                  <FaRegClock className="text-yellow-600 mr-2" />
                )}
                <div>
                  <p className="text-gray-900 font-medium">
                    {studentData.drivingExam.passed === true
                      ? 'Réussi'
                      : studentData.drivingExam.passed === false
                      ? 'Non réussi'
                      : 'Non programmé'}
                  </p>
                  <p className="text-gray-700 text-sm">{studentData.drivingExam.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Informations importantes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-3 rounded-full mr-3">
              <FaCalendarAlt className="text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Prochaine leçon</h2>
          </div>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Date :</span> {studentData.nextLesson}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Moniteur :</span> {studentData.instructor}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Type :</span> Leçon de conduite
          </p>
          <div className="flex space-x-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-2 px-3 rounded transition duration-300">
              Modifier
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-2 px-3 rounded transition duration-300">
              Annuler
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-3">
              <FaUserTie className="text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Votre moniteur</h2>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <span className="text-xl font-bold text-gray-600">
                {studentData.instructor.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{studentData.instructor}</h3>
              <p className="text-gray-700 text-sm">Monitrice principale</p>
            </div>
          </div>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded transition duration-300">
            Contacter
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-3">
              <FaUserGraduate className="text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Votre formation</h2>
          </div>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Formule :</span> {studentData.formation}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Date de début :</span> {studentData.startDate}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Heures restantes :</span> {studentData.totalLessons - studentData.completedLessons} heures
          </p>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded transition duration-300">
            Détails de la formation
          </button>
        </motion.div>
      </div>

      {/* Activité récente */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4">Activité récente</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-gray-100 p-2 rounded-full mr-3 mt-1">
              <FaCarAlt className="text-gray-600" />
            </div>
            <div>
              <p className="text-gray-900 font-medium">Leçon de conduite effectuée</p>
              <p className="text-gray-700 text-sm">25/03/2025 - 10h00 à 12h00</p>
              <p className="text-gray-600 text-sm mt-1">
                Thèmes abordés : Manœuvres, stationnement, créneaux
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-gray-100 p-2 rounded-full mr-3 mt-1">
              <FaClipboardCheck className="text-gray-600" />
            </div>
            <div>
              <p className="text-gray-900 font-medium">Examen blanc du code</p>
              <p className="text-gray-700 text-sm">20/03/2025 - 14h00 à 15h00</p>
              <p className="text-gray-600 text-sm mt-1">
                Résultat : 38/40 - Excellent travail !
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-gray-100 p-2 rounded-full mr-3 mt-1">
              <FaCarAlt className="text-gray-600" />
            </div>
            <div>
              <p className="text-gray-900 font-medium">Leçon de conduite effectuée</p>
              <p className="text-gray-700 text-sm">18/03/2025 - 14h00 à 16h00</p>
              <p className="text-gray-600 text-sm mt-1">
                Thèmes abordés : Conduite sur autoroute, insertion
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button className="text-red-600 hover:text-red-700 font-medium">
            Voir toute l'activité
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EspaceEleveOverview;
