"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaChevronLeft, 
  FaChevronRight, 
  FaPlus, 
  FaCar, 
  FaClipboardCheck 
} from 'react-icons/fa';

const EspaceEleveCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Données simulées des leçons
  const lessons = [
    {
      id: 1,
      date: new Date(2025, 2, 30, 14, 0), // 30 mars 2025 à 14h00
      duration: 120, // minutes
      type: 'driving',
      title: 'Leçon de conduite',
      instructor: 'Sophie Martin'
    },
    {
      id: 2,
      date: new Date(2025, 3, 5, 10, 0), // 5 avril 2025 à 10h00
      duration: 120,
      type: 'driving',
      title: 'Leçon de conduite',
      instructor: 'Sophie Martin'
    },
    {
      id: 3,
      date: new Date(2025, 3, 12, 14, 0), // 12 avril 2025 à 14h00
      duration: 60,
      type: 'exam',
      title: 'Examen blanc',
      instructor: 'Thomas Dubois'
    }
  ];

  // Fonctions pour la navigation dans le calendrier
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Fonction pour formater la date
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Fonction pour formater l'heure
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Fonction pour générer le calendrier du mois
  const generateCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Premier jour du mois
    const firstDay = new Date(year, month, 1);
    // Dernier jour du mois
    const lastDay = new Date(year, month + 1, 0);
    
    // Jour de la semaine du premier jour (0 = dimanche, 1 = lundi, etc.)
    const firstDayOfWeek = firstDay.getDay();
    // Nombre de jours dans le mois
    const daysInMonth = lastDay.getDate();
    
    // Tableau pour stocker les jours du calendrier
    const days = [];
    
    // Ajouter les jours du mois précédent pour compléter la première semaine
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    const prevMonthDays = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; // Ajustement pour commencer par lundi
    
    for (let i = prevMonthDays - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false,
        hasLesson: false
      });
    }
    
    // Ajouter les jours du mois en cours
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const hasLesson = lessons.some(lesson => 
        lesson.date.getDate() === i && 
        lesson.date.getMonth() === month && 
        lesson.date.getFullYear() === year
      );
      
      days.push({
        date,
        isCurrentMonth: true,
        hasLesson
      });
    }
    
    // Ajouter les jours du mois suivant pour compléter la dernière semaine
    const nextMonthDays = 42 - days.length; // 6 semaines * 7 jours = 42
    
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        hasLesson: false
      });
    }
    
    return days;
  };

  // Fonction pour vérifier si une date est aujourd'hui
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Fonction pour vérifier si une date est sélectionnée
  const isSelected = (date: Date): boolean => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  // Fonction pour obtenir les leçons d'une date spécifique
  const getLessonsForDate = (date: Date) => {
    return lessons.filter(lesson => 
      lesson.date.getDate() === date.getDate() && 
      lesson.date.getMonth() === date.getMonth() && 
      lesson.date.getFullYear() === date.getFullYear()
    );
  };

  // Générer le calendrier
  const calendarDays = generateCalendar();
  
  // Jours de la semaine
  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Calendrier
        </h1>
        <button 
          onClick={() => setShowBookingModal(true)}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center"
        >
          <FaPlus className="mr-2" />
          Réserver une leçon
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <button 
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <h2 className="text-xl font-bold text-gray-900">
            {currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </h2>
          <button 
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-7 gap-1">
            {weekDays.map((day, index) => (
              <div key={index} className="text-center font-medium text-gray-700 py-2">
                {day}
              </div>
            ))}
            
            {calendarDays.map((day, index) => (
              <div 
                key={index}
                onClick={() => setSelectedDate(day.date)}
                className={`
                  p-2 text-center rounded-lg cursor-pointer transition-colors duration-200
                  ${!day.isCurrentMonth ? 'text-gray-400' : 'text-gray-900'}
                  ${isToday(day.date) ? 'bg-blue-100' : ''}
                  ${isSelected(day.date) ? 'bg-red-100' : ''}
                  ${day.hasLesson && day.isCurrentMonth ? 'font-semibold' : ''}
                  hover:bg-gray-100
                `}
              >
                <div className="relative">
                  {day.date.getDate()}
                  {day.hasLesson && day.isCurrentMonth && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full"></span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-red-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-900">
              {formatDate(selectedDate)}
            </h2>
          </div>

          {getLessonsForDate(selectedDate).length > 0 ? (
            <div className="space-y-4">
              {getLessonsForDate(selectedDate).map((lesson) => (
                <div 
                  key={lesson.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-full mr-3 ${
                      lesson.type === 'driving' ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      {lesson.type === 'driving' ? (
                        <FaCar className={`${
                          lesson.type === 'driving' ? 'text-green-600' : 'text-blue-600'
                        }`} />
                      ) : (
                        <FaClipboardCheck className="text-blue-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                      <p className="text-gray-700 text-sm">
                        {formatTime(lesson.date)} - {formatTime(new Date(lesson.date.getTime() + lesson.duration * 60000))}
                      </p>
                      <p className="text-gray-700 text-sm">
                        Moniteur : {lesson.instructor}
                      </p>
                      <div className="mt-3 flex space-x-2">
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-1 px-3 rounded transition duration-300">
                          Modifier
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-1 px-3 rounded transition duration-300">
                          Annuler
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-700 mb-4">Aucune leçon programmée pour cette date.</p>
              <button 
                onClick={() => setShowBookingModal(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 inline-flex items-center"
              >
                <FaPlus className="mr-2" />
                Réserver une leçon
              </button>
            </div>
          )}
        </motion.div>
      )}

      {/* Modal de réservation (simulé) */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Réserver une leçon</h2>
              <p className="text-gray-700 mb-6">
                Cette fonctionnalité sera bientôt disponible. Veuillez contacter l'auto-école pour réserver une leçon.
              </p>
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowBookingModal(false)}
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EspaceEleveCalendar;
