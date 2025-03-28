"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';

const EspaceEleveLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simuler une connexion
    setTimeout(() => {
      // Dans une application réelle, vous feriez une requête API ici
      if (email === 'demo@conduitefacile.fr' && password === 'demo123') {
        // Redirection vers le tableau de bord
        window.location.href = '/espace-eleve/tableau-de-bord';
      } else {
        setError('Identifiants incorrects. Veuillez réessayer.');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <section className="min-h-screen py-16 bg-gray-50 flex items-center text-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Espace Élève</h1>
                <p className="text-gray-600">
                  Connectez-vous pour accéder à votre espace personnel
                </p>
              </div>

              {error && (
                <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                      placeholder="votre.email@exemple.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="block text-gray-700 font-medium">
                      Mot de passe
                    </label>
                    <Link
                      href="/espace-eleve/mot-de-passe-oublie"
                      className="text-sm text-red-600 hover:underline"
                    >
                      Mot de passe oublié ?
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                      placeholder="Votre mot de passe"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                      ) : (
                        <FaEye className="text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember-me"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Se souvenir de moi
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Connexion en cours...
                    </>
                  ) : (
                    "Se connecter"
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  Vous n'avez pas encore de compte ?{" "}
                  <Link href="/contact" className="text-red-600 hover:underline font-medium">
                    Contactez-nous
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Accès démo</h2>
              <p className="text-gray-700 mb-4">
                Pour tester l'espace élève, utilisez les identifiants suivants :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-left mb-4">
                <p className="mb-2">
                  <span className="font-semibold">Email :</span> demo@conduitefacile.fr
                </p>
                <p>
                  <span className="font-semibold">Mot de passe :</span> demo123
                </p>
              </div>
              <p className="text-sm text-gray-600">
                Ces identifiants sont fournis à des fins de démonstration uniquement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EspaceEleveLogin;
