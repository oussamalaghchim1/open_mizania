import React from 'react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Nouveau système de gestion des marchés publics",
      date: "15 Mars 2024",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Réformes",
      excerpt: "Le Ministère de l'Économie et des Finances lance une nouvelle plateforme digitale pour la gestion des marchés publics."
    },
    {
      id: 2,
      title: "Rapport sur la transparence budgétaire 2024",
      date: "10 Mars 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Publications",
      excerpt: "Le Maroc améliore son score dans l'indice de transparence budgétaire international."
    },
    {
      id: 3,
      title: "Consultation publique sur le budget 2025",
      date: "5 Mars 2024",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Participation",
      excerpt: "Participez à la consultation publique pour la préparation du budget de l'année 2025."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Actualités</h2>
          <a href="#" className="text-hsl-primary hover:text-hsl-primary/80">
            Voir toutes les actualités →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-hsl-primary font-medium">{item.category}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a 
                  href="#" 
                  className="text-hsl-primary hover:text-hsl-primary/80 font-medium"
                >
                  Lire la suite →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;