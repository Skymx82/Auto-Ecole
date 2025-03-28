"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

// Importation des composants du tableau de bord
import EspaceEleveHeader from './dashboard/EspaceEleveHeader';
import EspaceEleveSidebar from './dashboard/EspaceEleveSidebar';
import EspaceEleveOverview from './dashboard/EspaceEleveOverview';
import EspaceEleveCalendar from './dashboard/EspaceEleveCalendar';
import EspaceEleveProgress from './dashboard/EspaceEleveProgress';
import EspaceEleveDocuments from './dashboard/EspaceEleveDocuments';
import EspaceEleveSettings from './dashboard/EspaceEleveSettings';

const DashboardClient = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Données de l'élève (simulées)
  const studentData = {
    name: 'Thomas Dupont',
    email: 'demo@conduitefacile.fr',
    formation: 'Permis B - Formule Confort',
    progress: 65,
    instructor: 'Sophie Martin',
    startDate: '15/01/2025',
    nextLesson: '30/03/2025 à 14h00',
    codeExam: {
      date: '10/02/2025',
      passed: true,
      score: '36/40'
    },
    drivingExam: {
      date: 'Non programmé',
      passed: null
    },
    completedLessons: 16,
    totalLessons: 25,
    notifications: 3
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <EspaceEleveOverview studentData={studentData} />;
      case 'calendar':
        return <EspaceEleveCalendar />;
      case 'progress':
        return <EspaceEleveProgress studentData={studentData} />;
      case 'documents':
        return <EspaceEleveDocuments />;
      case 'settings':
        return <EspaceEleveSettings studentData={studentData} />;
      default:
        return <EspaceEleveOverview studentData={studentData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <EspaceEleveHeader studentData={studentData} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <EspaceEleveSidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            notifications={studentData.notifications} 
          />
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
