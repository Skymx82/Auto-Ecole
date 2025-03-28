"use client";

import { 
  FaHome, 
  FaCalendarAlt, 
  FaChartLine, 
  FaFileAlt, 
  FaCog, 
  FaQuestionCircle 
} from 'react-icons/fa';

interface EspaceEleveSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  notifications: number;
}

const EspaceEleveSidebar: React.FC<EspaceEleveSidebarProps> = ({ 
  activeTab, 
  setActiveTab,
  notifications 
}) => {
  const menuItems = [
    {
      id: 'overview',
      label: 'Tableau de bord',
      icon: <FaHome className="text-xl" />
    },
    {
      id: 'calendar',
      label: 'Calendrier',
      icon: <FaCalendarAlt className="text-xl" />
    },
    {
      id: 'progress',
      label: 'Progression',
      icon: <FaChartLine className="text-xl" />
    },
    {
      id: 'documents',
      label: 'Documents',
      icon: <FaFileAlt className="text-xl" />,
      badge: notifications > 0 ? notifications : null
    },
    {
      id: 'settings',
      label: 'Paramètres',
      icon: <FaCog className="text-xl" />
    }
  ];

  return (
    <div className="w-full lg:w-64 bg-white rounded-xl shadow-md overflow-hidden">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-3 font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activeTab === item.id
                      ? 'bg-white text-red-600'
                      : 'bg-red-600 text-white'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mt-4 border-t border-gray-100">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
            <FaQuestionCircle className="mr-2 text-red-600" />
            Besoin d'aide ?
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            Notre équipe est disponible pour répondre à vos questions.
          </p>
          <a
            href="/contact"
            className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-medium py-2 px-4 rounded-lg transition duration-300 text-sm"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default EspaceEleveSidebar;
