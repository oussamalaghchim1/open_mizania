import React from 'react';
import { Search, BarChart3, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-hsl-primary to-blue-600 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparence Budgétaire du Maroc
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Accédez aux données budgétaires du Maroc, analysez les dépenses publiques et participez à la gouvernance financière de votre pays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-secondary">
              Explorer les Données
            </button>
            <button className="bg-white text-hsl-primary px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
              En savoir plus
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <Search className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Recherche Avancée</h3>
            <p className="text-gray-200">
              Trouvez rapidement les informations budgétaires par ministère, région ou projet.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <BarChart3 className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visualisation Interactive</h3>
            <p className="text-gray-200">
              Explorez les données à travers des graphiques et tableaux interactifs.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <Users className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Participation Citoyenne</h3>
            <p className="text-gray-200">
              Contribuez au dialogue sur la gestion des finances publiques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;