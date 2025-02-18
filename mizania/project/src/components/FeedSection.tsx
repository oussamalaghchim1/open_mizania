import React, { useState } from 'react';
import { Filter, Clock, TrendingUp } from 'lucide-react';

type FeedItem = {
  id: number;
  type: 'project' | 'expense';
  title: string;
  description: string;
  amount: number;
  date: string;
  organization: string;
  category: string;
  image?: string;
};

const feedData: FeedItem[] = [
  {
    id: 1,
    type: 'project',
    title: "Extension du Port de Dakhla",
    description: "Lancement des travaux d'extension du port de Dakhla",
    amount: 1200000000,
    date: "2024-03-15",
    organization: "ANP",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1569262755545-6a05e93f10f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    type: 'expense',
    title: "Acquisition de matériel médical",
    description: "Achat d'équipements pour les nouveaux centres hospitaliers",
    amount: 85000000,
    date: "2024-03-14",
    organization: "Ministère de la Santé",
    category: "Santé"
  },
  // Ajoutez plus d'éléments de feed ici
];

const FeedSection = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('new');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'MAD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const sortedAndFilteredFeed = feedData
    .filter(item => filter === 'all' || item.type === filter)
    .sort((a, b) => {
      if (sortBy === 'new') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'old') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return 0;
    });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Feed d'Activités</h2>
          
          <div className="flex gap-4">
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-hsl-primary"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">Tout</option>
                <option value="project">Projets</option>
                <option value="expense">Dépenses</option>
              </select>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex rounded-md overflow-hidden">
              <button
                className={`px-4 py-2 flex items-center ${
                  sortBy === 'new' 
                    ? 'bg-hsl-primary text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setSortBy('new')}
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Plus récent
              </button>
              <button
                className={`px-4 py-2 flex items-center ${
                  sortBy === 'old'
                    ? 'bg-hsl-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setSortBy('old')}
              >
                <Clock className="h-4 w-4 mr-2" />
                Plus ancien
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {sortedAndFilteredFeed.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-32 h-32 object-cover rounded-lg ml-4"
                    />
                  )}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Montant</div>
                    <div className="font-semibold text-hsl-primary">{formatAmount(item.amount)}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Date</div>
                    <div className="font-semibold">{formatDate(item.date)}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Organisation</div>
                    <div className="font-semibold">{item.organization}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Catégorie</div>
                    <div className="font-semibold">{item.category}</div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="text-hsl-primary hover:text-hsl-primary/80 font-medium">
                    Voir les détails →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedSection;