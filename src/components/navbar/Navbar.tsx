'use client'

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo et nom */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">CF</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Conduite Facile</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="/" label="Accueil" />
          <NavLink href="/formations" label="Formations" />
          <NavLink href="/tarifs" label="Tarifs" />
          <NavLink href="/moniteurs" label="Nos Moniteurs" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        {/* Bouton de connexion */}
        <div className="hidden md:flex">
          <Link 
            href="/espace-eleve" 
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition duration-300"
          >
            Espace Élève
          </Link>
        </div>

        {/* Menu Mobile Toggle */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <div className="flex flex-col py-4 px-4">
            <MobileNavLink href="/" label="Accueil" onClick={toggleMenu} />
            <MobileNavLink href="/formations" label="Formations" onClick={toggleMenu} />
            <MobileNavLink href="/tarifs" label="Tarifs" onClick={toggleMenu} />
            <MobileNavLink href="/moniteurs" label="Nos Moniteurs" onClick={toggleMenu} />
            <MobileNavLink href="/contact" label="Contact" onClick={toggleMenu} />
            <Link 
              href="/espace-eleve" 
              className="mt-4 bg-red-600 hover:bg-red-700 text-white text-center px-6 py-3 rounded-full font-medium transition duration-300"
              onClick={toggleMenu}
            >
              Espace Élève
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-700 hover:text-red-600 font-medium transition duration-200"
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ 
  href, 
  label, 
  onClick 
}: { 
  href: string; 
  label: string; 
  onClick: () => void 
}) => {
  return (
    <Link 
      href={href} 
      className="block py-3 text-gray-700 hover:text-red-600 border-b border-gray-100 font-medium"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;
