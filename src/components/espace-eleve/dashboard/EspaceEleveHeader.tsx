"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBell, FaUserCircle, FaSignOutAlt, FaCog } from 'react-icons/fa';

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

interface EspaceEleveHeaderProps {
  studentData: StudentData;
}

const EspaceEleveHeader: React.FC<EspaceEleveHeaderProps> = ({ studentData }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    if (showNotifications) setShowNotifications(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (showDropdown) setShowDropdown(false);
  };

  const handleLogout = () => {
    // Dans une application réelle, vous déconnecteriez l'utilisateur ici
    window.location.href = '/espace-eleve';
  };

  const notifications = [
    {
      id: 1,
      title: 'Leçon confirmée',
      message: 'Votre leçon du 30/03/2025 à 14h00 a été confirmée.',
      time: 'Il y a 2 heures',
      read: false
    },
    {
      id: 2,
      title: 'Document disponible',
      message: 'Votre attestation de formation est disponible dans vos documents.',
      time: 'Il y a 1 jour',
      read: false
    },
    {
      id: 3,
      title: 'Rappel',
      message: 'N\'oubliez pas votre leçon de conduite demain à 10h00.',
      time: 'Il y a 2 jours',
      read: true
    }
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">CF</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Espace Élève</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                className="relative p-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
                onClick={toggleNotifications}
                aria-label="Notifications"
              >
                <FaBell className="text-xl" />
                {studentData.notifications > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {studentData.notifications}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-10 overflow-hidden">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${
                          !notification.read ? 'bg-blue-50' : ''
                        }`}
                      >
                        <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                        <p className="text-gray-700 text-sm mt-1">{notification.message}</p>
                        <p className="text-gray-500 text-xs mt-2">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t border-gray-100">
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                      Marquer tout comme lu
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
                onClick={toggleDropdown}
                aria-label="Menu utilisateur"
              >
                <FaUserCircle className="text-2xl" />
                <span className="hidden md:block font-medium">{studentData.name}</span>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 overflow-hidden">
                  <div className="p-3 border-b border-gray-100">
                    <p className="font-medium text-gray-900">{studentData.name}</p>
                    <p className="text-gray-500 text-sm truncate">{studentData.email}</p>
                  </div>
                  <div className="py-1">
                    <Link
                      href="/espace-eleve/tableau-de-bord?tab=settings"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <FaCog className="mr-2" />
                      Paramètres
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <FaSignOutAlt className="mr-2" />
                      Déconnexion
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EspaceEleveHeader;
