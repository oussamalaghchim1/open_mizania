import React from 'react';
import { Shield, Heart, Clock } from 'lucide-react';

const initiatives = [
  {
    id: 1,
    title: "Protection Sociale",
    icon: Shield,
    description: "Généralisation de la protection sociale à tous les citoyens marocains",
    stats: [
      { label: "Budget alloué", value: "51 Mrd MAD" },
      { label: "Bénéficiaires", value: "22M citoyens" },
      { label: "Horizon", value: "2025" }
    ],
    progress: 65,
    updates: [
      "Lancement de l'AMO pour les travailleurs non-salariés",
      "Extension des allocations familiales",
      "Mise en place du Registre Social Unifié"
    ]
  },
  {
    id: 2,
    title: "Réforme du Système de Santé",
    icon: Heart,
    description: "Modernisation et extension du système de santé national",
    stats: [
      { label: "Budget alloué", value: "32 Mrd MAD" },
      { label: "Nouveaux CHU", value: "5" },
      { label: "Nouveaux médecins", value: "+3000" }
    ],
    progress: 45,
    updates: [
      "Construction de nouveaux CHU régionaux",
      "Revalorisation des ressources humaines",
      "Digitalisation du parcours de soins"
    ]
  },
  {
    id: 3,
    title: "Réforme des Retraites",
    icon: Clock,
    description: "Refonte du système des retraites pour assurer sa pérennité",
    stats: [
      { label: "Budget alloué", value: "28 Mrd MAD" },
      { label: "Population cible", value: "4M retraités" },
      { label: "Mise en œuvre", value: "2024-2028" }
    ],
    progress: 30,
    updates: [
      "Unification des régimes de retraite",
      "Extension de la couverture",
      "Révision des paramètres de calcul"
    ]
  }
];

const StrategicInitiativesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Chantiers Stratégiques</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <div key={initiative.id} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-hsl-primary/10 p-3 rounded-lg">
                    <Icon className="h-8 w-8 text-hsl-primary" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{initiative.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{initiative.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {initiative.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-hsl-primary">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Avancement</span>
                    <span className="text-sm font-medium text-hsl-primary">{initiative.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-hsl-primary rounded-full h-2 transition-all duration-300"
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {initiative.updates.map((update, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-2 w-2 bg-hsl-primary rounded-full mt-2 mr-3"></div>
                      <p className="text-sm text-gray-600">{update}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StrategicInitiativesSection;