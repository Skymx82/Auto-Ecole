"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCog, 
  FaUser, 
  FaBell, 
  FaLock, 
  FaShieldAlt, 
  FaSave,
  FaToggleOn,
  FaToggleOff
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

interface EspaceEleveSettingsProps {
  studentData: StudentData;
}

const EspaceEleveSettings: React.FC<EspaceEleveSettingsProps> = ({ studentData }) => {
  // État pour les formulaires
  const [personalInfo, setPersonalInfo] = useState({
    firstName: studentData.name.split(' ')[0],
    lastName: studentData.name.split(' ')[1] || '',
    email: studentData.email,
    phone: '06 12 34 56 78',
    address: '123 Rue de Paris',
    city: 'Paris',
    postalCode: '75001'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: true,
    lessonReminder: true,
    examReminder: true,
    news: false,
    promotions: false
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Gestionnaires d'événements
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationToggle = (setting: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handlePersonalInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler la sauvegarde des informations personnelles
    alert('Informations personnelles mises à jour avec succès !');
  };

  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler la sauvegarde des paramètres de notification
    alert('Paramètres de notification mis à jour avec succès !');
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Vérifier que les mots de passe correspondent
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas !');
      return;
    }
    // Simuler le changement de mot de passe
    alert('Mot de passe mis à jour avec succès !');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Paramètres du compte
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex flex-wrap">
            <button
              className="py-4 px-6 text-center font-medium text-red-600 border-b-2 border-red-600"
            >
              <FaCog className="inline-block mr-2" />
              Paramètres
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Informations personnelles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center mb-4">
              <FaUser className="text-red-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Informations personnelles</h2>
            </div>
            <form onSubmit={handlePersonalInfoSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={personalInfo.firstName}
                    onChange={handlePersonalInfoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={personalInfo.lastName}
                    onChange={handlePersonalInfoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={personalInfo.email}
                    onChange={handlePersonalInfoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={personalInfo.address}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={personalInfo.city}
                    onChange={handlePersonalInfoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Code postal
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={personalInfo.postalCode}
                    onChange={handlePersonalInfoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center"
                >
                  <FaSave className="mr-2" />
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          </motion.div>

          {/* Paramètres de notification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center mb-4">
              <FaBell className="text-red-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Paramètres de notification</h2>
            </div>
            <form onSubmit={handleNotificationSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">Notifications par email</h3>
                    <p className="text-sm text-gray-700">Recevoir des notifications par email</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNotificationToggle('email')}
                    className="text-2xl"
                  >
                    {notificationSettings.email ? (
                      <FaToggleOn className="text-red-600" />
                    ) : (
                      <FaToggleOff className="text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">Notifications par SMS</h3>
                    <p className="text-sm text-gray-700">Recevoir des notifications par SMS</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNotificationToggle('sms')}
                    className="text-2xl"
                  >
                    {notificationSettings.sms ? (
                      <FaToggleOn className="text-red-600" />
                    ) : (
                      <FaToggleOff className="text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">Rappels de leçon</h3>
                    <p className="text-sm text-gray-700">Recevoir des rappels avant vos leçons</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNotificationToggle('lessonReminder')}
                    className="text-2xl"
                  >
                    {notificationSettings.lessonReminder ? (
                      <FaToggleOn className="text-red-600" />
                    ) : (
                      <FaToggleOff className="text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">Rappels d'examen</h3>
                    <p className="text-sm text-gray-700">Recevoir des rappels avant vos examens</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNotificationToggle('examReminder')}
                    className="text-2xl"
                  >
                    {notificationSettings.examReminder ? (
                      <FaToggleOn className="text-red-600" />
                    ) : (
                      <FaToggleOff className="text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">Actualités</h3>
                    <p className="text-sm text-gray-700">Recevoir les actualités de l'auto-école</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNotificationToggle('news')}
                    className="text-2xl"
                  >
                    {notificationSettings.news ? (
                      <FaToggleOn className="text-red-600" />
                    ) : (
                      <FaToggleOff className="text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">Promotions</h3>
                    <p className="text-sm text-gray-700">Recevoir les offres promotionnelles</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNotificationToggle('promotions')}
                    className="text-2xl"
                  >
                    {notificationSettings.promotions ? (
                      <FaToggleOn className="text-red-600" />
                    ) : (
                      <FaToggleOff className="text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center"
                >
                  <FaSave className="mr-2" />
                  Enregistrer les préférences
                </button>
              </div>
            </form>
          </motion.div>

          {/* Sécurité du compte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-red-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Sécurité du compte</h2>
            </div>
            <div className="mb-6">
              <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
                <FaLock className="text-yellow-600 mr-3" />
                <p className="text-sm text-gray-800">
                  Pour protéger votre compte, nous vous recommandons de changer régulièrement votre mot de passe et de ne jamais le partager.
                </p>
              </div>
            </div>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Mot de passe actuel
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
                <p className="text-xs text-gray-600 mt-1">
                  Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, un chiffre et un caractère spécial.
                </p>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmer le nouveau mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center"
                >
                  <FaLock className="mr-2" />
                  Changer le mot de passe
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EspaceEleveSettings;
