"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
    politique: false
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulation d'envoi de formulaire
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.'
    });
    
    // Réinitialiser le formulaire
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      sujet: '',
      message: '',
      politique: false
    });
    
    // Dans une application réelle, vous enverriez les données à votre API ici
  };

  return (
    <section className="py-16 bg-gray-50" id="form">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Formulaire de contact
              </h2>
              
              {formStatus.submitted ? (
                <div className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus.message}
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nom" className="block text-gray-700 font-medium mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="prenom" className="block text-gray-700 font-medium mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                      placeholder="votre.email@exemple.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telephone" className="block text-gray-700 font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                      placeholder="01 23 45 67 89"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="sujet" className="block text-gray-700 font-medium mb-2">
                    Sujet *
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="renseignement">Renseignements sur nos formations</option>
                    <option value="rendez-vous">Prise de rendez-vous</option>
                    <option value="administratif">Service administratif</option>
                    <option value="recrutement">Recrutement</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                    placeholder="Votre message..."
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="politique"
                      name="politique"
                      checked={formData.politique}
                      onChange={handleCheckboxChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="politique" className="text-gray-700 text-sm">
                      J'accepte que mes données soient traitées conformément à la <a href="/mentions-legales" className="text-red-600 hover:underline">politique de confidentialité</a> de l'auto-école. *
                    </label>
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Les champs marqués d'un * sont obligatoires.</p>
            <p className="mt-2">
              Nous vous répondrons dans un délai de 24 à 48 heures ouvrées.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
