import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatisticsSection from './components/StatisticsSection';
import FeaturedSection from './components/FeaturedSection';
import StrategicInitiativesSection from './components/StrategicInitiativesSection';
import FeedSection from './components/FeedSection';
import NewsSection from './components/NewsSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <StatisticsSection />
        <StrategicInitiativesSection />
        <FeaturedSection />
        <FeedSection />
        <NewsSection />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">À propos</h3>
              <p className="text-gray-400">
                Portail de transparence budgétaire du Maroc, votre source d'information sur les finances publiques.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Accueil</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Budgets</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Actualités</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Ressources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Guide d'utilisation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Glossaire</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Open Data</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: contact@budget.gov.ma<br />
                Tél: +212 5XX-XXXXXX<br />
                Rabat, Maroc
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Portail de Transparence Budgétaire du Maroc. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;