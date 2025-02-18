import React, { useState } from 'react';
import { MapPin, Calendar, Users, Building2, ChevronDown, Star, MessageSquare } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  budget: number;
  location: {
    region: string;
    province: string;
    collectivite: string;
  };
  startDate: string;
  endDate: string;
  status: 'En cours' | 'Achevé' | 'Planifié';
  progress: number;
  category: string;
  beneficiaries: string;
  rating: number;
  commentsCount: number;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Ligne à Grande Vitesse Casablanca-Agadir",
    description: "Extension du réseau ferroviaire à grande vitesse vers le sud du pays pour améliorer la connectivité régionale.",
    budget: 40000000000,
    location: {
      region: "Casablanca-Settat",
      province: "Casablanca",
      collectivite: "Casablanca"
    },
    startDate: "2024-01",
    endDate: "2029-12",
    status: "En cours",
    progress: 15,
    category: "Infrastructure",
    beneficiaries: "7 millions d'habitants",
    rating: 4.2,
    commentsCount: 156,
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Complexe Solaire Noor Midelt",
    description: "Construction d'une centrale solaire hybride PV-CSP d'une capacité de 800 MW.",
    budget: 7500000000,
    location: {
      region: "Drâa-Tafilalet",
      province: "Midelt",
      collectivite: "Midelt"
    },
    startDate: "2023-06",
    endDate: "2025-12",
    status: "En cours",
    progress: 45,
    category: "Énergie",
    beneficiaries: "2 millions de foyers",
    rating: 4.8,
    commentsCount: 89,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  // ... autres projets
];

const regions = [
  "Toutes les régions",
  "Casablanca-Settat",
  "Rabat-Salé-Kénitra",
  "Fès-Meknès",
  "Tanger-Tétouan-Al Hoceïma",
  "Marrakech-Safi",
  "Souss-Massa",
  "Drâa-Tafilalet",
  "Oriental",
  "Béni Mellal-Khénifra",
  "Guelmim-Oued Noun",
  "Laâyoune-Sakia El Hamra",
  "Dakhla-Oued Ed-Dahab"
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [selectedCollectivite, setSelectedCollectivite] = useState<string>('all');

  const formatBudget = (budget: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'MAD',
      maximumFractionDigits: 0
    }).format(budget);
  };

  const filteredProjects = projects.filter(project => {
    if (selectedCategory !== 'all' && project.category !== selectedCategory) return false;
    if (selectedStatus !== 'all' && project.status !== selectedStatus) return false;
    if (selectedRegion !== 'all' && project.location.region !== selectedRegion) return false;
    if (selectedProvince !== 'all' && project.location.province !== selectedProvince) return false;
    if (selectedCollectivite !== 'all' && project.location.collectivite !== selectedCollectivite) return false;
    return true;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projets Publics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les projets d'investissement public en cours de réalisation à travers le Royaume du Maroc.
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-4">Filtres</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="relative">
              <select
                className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-hsl-primary"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">Toutes les catégories</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Énergie">Énergie</option>
                <option value="Innovation">Innovation</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative">
              <select
                className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-hsl-primary"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">Tous les statuts</option>
                <option value="En cours">En cours</option>
                <option value="Achevé">Achevé</option>
                <option value="Planifié">Planifié</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative">
              <select
                className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-hsl-primary"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                {regions.map((region) => (
                  <option key={region} value={region === "Toutes les régions" ? "all" : region}>
                    {region}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative">
              <select
                className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-hsl-primary"
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
              >
                <option value="all">Toutes les provinces</option>
                <option value="Casablanca">Casablanca</option>
                <option value="Midelt">Midelt</option>
                {/* Ajouter plus de provinces */}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative">
              <select
                className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-hsl-primary"
                value={selectedCollectivite}
                onChange={(e) => setSelectedCollectivite(e.target.value)}
              >
                <option value="all">Toutes les collectivités</option>
                <option value="Casablanca">Casablanca</option>
                <option value="Midelt">Midelt</option>
                {/* Ajouter plus de collectivités */}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Liste des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-hsl-primary">
                  {project.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {project.location.region} - {project.location.province}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Building2 className="h-5 w-5 mr-2" />
                    {project.category}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {project.startDate} - {project.endDate}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    {project.beneficiaries}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Progression</span>
                    <span className="text-sm font-medium text-hsl-primary">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-hsl-primary rounded-full h-2 transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-xl font-bold text-hsl-primary">
                    {formatBudget(project.budget)}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="text-gray-600">{project.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 text-gray-400 mr-1" />
                      <span className="text-gray-600">{project.commentsCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;