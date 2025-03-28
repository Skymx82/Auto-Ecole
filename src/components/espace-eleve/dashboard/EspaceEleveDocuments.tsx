"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFileAlt, 
  FaFileDownload, 
  FaEye, 
  FaFileUpload, 
  FaSearch,
  FaFilePdf,
  FaFileImage,
  FaFileWord,
  FaFileExcel,
  FaRegClock
} from 'react-icons/fa';

const EspaceEleveDocuments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Données simulées pour les documents
  const documents = [
    {
      id: 1,
      name: 'Contrat de formation',
      category: 'administrative',
      type: 'pdf',
      size: '1.2 MB',
      date: '15/01/2025',
      status: 'signed',
      icon: <FaFilePdf className="text-red-600" />,
      new: false
    },
    {
      id: 2,
      name: 'Attestation de formation',
      category: 'administrative',
      type: 'pdf',
      size: '0.8 MB',
      date: '15/01/2025',
      status: 'signed',
      icon: <FaFilePdf className="text-red-600" />,
      new: false
    },
    {
      id: 3,
      name: 'Facture - Acompte initial',
      category: 'financial',
      type: 'pdf',
      size: '0.5 MB',
      date: '15/01/2025',
      status: 'paid',
      icon: <FaFilePdf className="text-red-600" />,
      new: false
    },
    {
      id: 4,
      name: 'Facture - Paiement mensuel Février',
      category: 'financial',
      type: 'pdf',
      size: '0.5 MB',
      date: '01/02/2025',
      status: 'paid',
      icon: <FaFilePdf className="text-red-600" />,
      new: false
    },
    {
      id: 5,
      name: 'Évaluation de conduite - Février',
      category: 'evaluation',
      type: 'pdf',
      size: '0.7 MB',
      date: '28/02/2025',
      status: 'available',
      icon: <FaFilePdf className="text-red-600" />,
      new: false
    },
    {
      id: 6,
      name: 'Évaluation de conduite - Mars',
      category: 'evaluation',
      type: 'pdf',
      size: '0.7 MB',
      date: '25/03/2025',
      status: 'available',
      icon: <FaFilePdf className="text-red-600" />,
      new: true
    },
    {
      id: 7,
      name: 'Guide de préparation à l\'examen',
      category: 'learning',
      type: 'pdf',
      size: '2.5 MB',
      date: '15/01/2025',
      status: 'available',
      icon: <FaFilePdf className="text-red-600" />,
      new: false
    },
    {
      id: 8,
      name: 'Fiche récapitulative - Manœuvres',
      category: 'learning',
      type: 'pdf',
      size: '1.1 MB',
      date: '10/02/2025',
      status: 'available',
      icon: <FaFilePdf className="text-red-600" />,
      new: false
    },
    {
      id: 9,
      name: 'Copie de votre pièce d\'identité',
      category: 'personal',
      type: 'image',
      size: '3.2 MB',
      date: '15/01/2025',
      status: 'uploaded',
      icon: <FaFileImage className="text-blue-600" />,
      new: false
    },
    {
      id: 10,
      name: 'Justificatif de domicile',
      category: 'personal',
      type: 'image',
      size: '2.8 MB',
      date: '15/01/2025',
      status: 'uploaded',
      icon: <FaFileImage className="text-blue-600" />,
      new: false
    },
    {
      id: 11,
      name: 'Planning des leçons - Avril',
      category: 'planning',
      type: 'excel',
      size: '0.6 MB',
      date: '25/03/2025',
      status: 'available',
      icon: <FaFileExcel className="text-green-600" />,
      new: true
    },
    {
      id: 12,
      name: 'Attestation d\'examen du code',
      category: 'administrative',
      type: 'pdf',
      size: '0.5 MB',
      date: '10/02/2025',
      status: 'available',
      icon: <FaFilePdf className="text-red-600" />,
      new: false
    }
  ];

  // Filtrer les documents en fonction de la recherche et de la catégorie
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Catégories de documents
  const categories = [
    { id: 'all', name: 'Tous les documents' },
    { id: 'administrative', name: 'Documents administratifs' },
    { id: 'financial', name: 'Documents financiers' },
    { id: 'evaluation', name: 'Évaluations' },
    { id: 'learning', name: 'Supports de cours' },
    { id: 'personal', name: 'Documents personnels' },
    { id: 'planning', name: 'Plannings' }
  ];

  // Fonction pour obtenir l'icône de statut
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'signed':
        return <span className="text-green-600 text-xs font-medium">Signé</span>;
      case 'paid':
        return <span className="text-green-600 text-xs font-medium">Payé</span>;
      case 'available':
        return <span className="text-blue-600 text-xs font-medium">Disponible</span>;
      case 'uploaded':
        return <span className="text-purple-600 text-xs font-medium">Téléversé</span>;
      case 'pending':
        return <span className="text-yellow-600 text-xs font-medium flex items-center"><FaRegClock className="mr-1" /> En attente</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Mes documents
        </h1>
        <button 
          onClick={() => setShowUploadModal(true)}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center"
        >
          <FaFileUpload className="mr-2" />
          Téléverser un document
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Rechercher un document..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {filteredDocuments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nom
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Taille
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDocuments.map((document) => (
                  <tr key={document.id} className={document.new ? 'bg-blue-50' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                          {document.icon}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 flex items-center">
                            {document.name}
                            {document.new && (
                              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800">
                                Nouveau
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">
                            {categories.find(cat => cat.id === document.category)?.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {document.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {document.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusIcon(document.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 transition-colors duration-200">
                          <FaEye className="text-lg" />
                        </button>
                        <button className="text-green-600 hover:text-green-900 transition-colors duration-200">
                          <FaFileDownload className="text-lg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10">
            <FaFileAlt className="mx-auto text-gray-400 text-4xl mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun document trouvé</h3>
            <p className="text-gray-700">
              Aucun document ne correspond à votre recherche. Essayez d'autres termes ou catégories.
            </p>
          </div>
        )}
      </motion.div>

      {/* Documents requis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4">Documents requis</h2>
        <p className="text-gray-700 mb-4">
          Veuillez téléverser les documents suivants pour compléter votre dossier.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center">
              <FaFileAlt className="text-gray-500 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Photo d'identité numérique</p>
                <p className="text-sm text-gray-700">Format JPEG ou PNG, fond uni</p>
              </div>
            </div>
            <button 
              onClick={() => setShowUploadModal(true)}
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-1.5 px-3 rounded transition duration-300 flex items-center"
            >
              <FaFileUpload className="mr-1" />
              Téléverser
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center">
              <FaFileAlt className="text-gray-500 mr-3" />
              <div>
                <p className="font-medium text-gray-900">ASSR niveau 2</p>
                <p className="text-sm text-gray-700">Attestation scolaire de sécurité routière</p>
              </div>
            </div>
            <button 
              onClick={() => setShowUploadModal(true)}
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-1.5 px-3 rounded transition duration-300 flex items-center"
            >
              <FaFileUpload className="mr-1" />
              Téléverser
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal de téléversement (simulé) */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Téléverser un document</h2>
              <p className="text-gray-700 mb-6">
                Cette fonctionnalité sera bientôt disponible. Vous pourrez téléverser vos documents directement depuis cette interface.
              </p>
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowUploadModal(false)}
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

export default EspaceEleveDocuments;
