import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src="/morocco-coat-of-arms.png" alt="Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-900">Budget.gov.ma</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#" className="nav-link nav-link-active">Accueil</a>
            <a href="#" className="nav-link">Budgets</a>
            <a href="#" className="nav-link">Données</a>
            <a href="#" className="nav-link">Actualités</a>
            <a href="#" className="nav-link">Participation</a>
            <a href="#" className="nav-link">Ressources</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hsl-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <button className="btn-primary">
              Connexion
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="nav-link nav-link-active block">Accueil</a>
            <a href="#" className="nav-link block">Budgets</a>
            <a href="#" className="nav-link block">Données</a>
            <a href="#" className="nav-link block">Actualités</a>
            <a href="#" className="nav-link block">Participation</a>
            <a href="#" className="nav-link block">Ressources</a>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hsl-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <button className="btn-primary w-full mt-4">
              Connexion
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;