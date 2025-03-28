"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaPhoneAlt, FaEnvelope, FaCheck, FaCarSide } from 'react-icons/fa';

type FormuleType = 'classique' | 'acceleree' | 'accompagnee' | 'custom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    formule: '' as FormuleType,
    date: '',
    heure: '',
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

  const setFormule = (formule: FormuleType) => {
    setFormData(prev => ({
      ...prev,
      formule
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulation d'envoi de formulaire
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Votre réservation a été effectuée avec succès! Nous vous contacterons rapidement pour confirmer votre rendez-vous.'
    });
    
    // Réinitialiser le formulaire
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      formule: '' as FormuleType,
      date: '',
      heure: '',
      message: '',
      politique: false
    });
  };

  return (
    <section className="py-16 bg-white text-black" id="rdv">
      <div className="container mx-auto px-4 text-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#212121] mb-2 flex items-center gap-2">
                <FaCalendarAlt className="text-[#FF4242]" />
                <span>Réservez votre session de conduite</span>
              </h2>
              <p className="text-[#212121] mb-8">Prenez rendez-vous en quelques clics pour votre formation sur Fiat 500</p>
              
              {formStatus.submitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 mb-6 rounded-lg bg-green-50 text-green-700 border border-green-100 flex items-start gap-3"
                >
                  <FaCheck className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{formStatus.message}</p>
                    <p className="text-sm mt-1">Référence de réservation: RDV-{Math.floor(Math.random() * 10000)}</p>
                  </div>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                {/* Sélection de formule */}
                <div className="mb-6">
                  <label className="block text-[#212121] font-medium mb-3">
                    Choisissez votre Fiat 500
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${formData.formule === 'classique' ? 'border-[#FF4242] bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setFormule('classique')}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 flex-shrink-0 relative border-gray-300 flex items-center justify-center">
                          {formData.formule === 'classique' && <div className="w-2 h-2 bg-[#FF4242] rounded-full"></div>}
                        </div>
                        <div>
                          <div className="font-medium text-[#212121]">Formule Classique</div>
                          <div className="text-xs text-gray-500">Fiat 500 Rouge</div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${formData.formule === 'acceleree' ? 'border-[#212121] bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setFormule('acceleree')}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 flex-shrink-0 relative border-gray-300 flex items-center justify-center">
                          {formData.formule === 'acceleree' && <div className="w-2 h-2 bg-[#212121] rounded-full"></div>}
                        </div>
                        <div>
                          <div className="font-medium text-[#212121]">Formule Accélérée</div>
                          <div className="text-xs text-gray-500">Fiat 500 Blanche</div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${formData.formule === 'accompagnee' ? 'border-[#8ECAE6] bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setFormule('accompagnee')}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 flex-shrink-0 relative border-gray-300 flex items-center justify-center">
                          {formData.formule === 'accompagnee' && <div className="w-2 h-2 bg-[#8ECAE6] rounded-full"></div>}
                        </div>
                        <div>
                          <div className="font-medium text-[#212121]">Conduite Accompagnée</div>
                          <div className="text-xs text-gray-500">Fiat 500 Bleue</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Coordonnées */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nom" className="text-[#212121] font-medium mb-2 flex items-center gap-1">
                        <FaUser className="text-xs text-gray-400" /> Nom complet
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#FF4242] focus:border-[#FF4242] outline-none transition-colors duration-200"
                        placeholder="Votre nom et prénom"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telephone" className="text-[#212121] font-medium mb-2 flex items-center gap-1">
                        <FaPhoneAlt className="text-xs text-gray-400" /> Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#FF4242] focus:border-[#FF4242] outline-none transition-colors duration-200"
                        placeholder="Votre numéro de téléphone"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="text-[#212121] font-medium mb-2 flex items-center gap-1">
                    <FaEnvelope className="text-xs text-gray-400" /> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#FF4242] focus:border-[#FF4242] outline-none transition-colors duration-200"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>
                
                {/* Date et heure */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="text-[#212121] font-medium mb-2 flex items-center gap-1">
                        <FaCalendarAlt className="text-xs text-gray-400" /> Date souhaitée
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#FF4242] focus:border-[#FF4242] outline-none transition-colors duration-200"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="heure" className="text-[#212121] font-medium mb-2 flex items-center gap-1">
                        <FaClock className="text-xs text-gray-400" /> Heure souhaitée
                      </label>
                      <select
                        id="heure"
                        name="heure"
                        value={formData.heure}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#FF4242] focus:border-[#FF4242] outline-none transition-colors duration-200"
                        required
                      >
                        <option value="">Sélectionnez une heure</option>
                        <option value="9:00">9:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Message optionnel */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#212121] font-medium mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#FF4242] focus:border-[#FF4242] outline-none transition-colors duration-200"
                    placeholder="Précisez vos besoins ou questions..."
                  ></textarea>
                </div>
                
                {/* Politique de confidentialité */}
                <div className="mb-8">
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
                    <label htmlFor="politique" className="text-gray-600 text-sm">
                      J'accepte que mes données soient traitées conformément à la <a href="/mentions-legales" className="text-[#FF4242] hover:underline">politique de confidentialité</a>.
                    </label>
                  </div>
                </div>
                
                {/* Bouton de soumission */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#FF4242] hover:bg-[#E03232] text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md flex items-center gap-2"
                  >
                    <FaCarSide /> Réserver maintenant
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm px-4">
            <p className="mb-2 md:mb-0">
              <FaCheck className="inline-block text-green-500 mr-1" />
              Confirmation instantanée par email et SMS
            </p>
            <p>
              <FaCheck className="inline-block text-green-500 mr-1" />
              Annulation gratuite jusqu'à 24h avant
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
