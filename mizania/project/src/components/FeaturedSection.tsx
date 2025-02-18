import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Documents Clés</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FileText className="h-8 w-8 text-hsl-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Loi de Finances 2024</h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les principales dispositions de la loi de finances pour l'année 2024.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-hsl-primary hover:text-hsl-primary/80">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </button>
                  <button className="flex items-center text-hsl-primary hover:text-hsl-primary/80">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Consulter
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FileText className="h-8 w-8 text-hsl-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Rapport d'Exécution</h3>
                <p className="text-gray-600 mb-4">
                  Rapport détaillé sur l'exécution du budget de l'État pour le premier semestre 2024.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-hsl-primary hover:text-hsl-primary/80">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </button>
                  <button className="flex items-center text-hsl-primary hover:text-hsl-primary/80">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Consulter
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FileText className="h-8 w-8 text-hsl-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Note de Conjoncture</h3>
                <p className="text-gray-600 mb-4">
                  Analyse de la situation économique et financière du Maroc au premier trimestre 2024.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-hsl-primary hover:text-hsl-primary/80">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </button>
                  <button className="flex items-center text-hsl-primary hover:text-hsl-primary/80">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Consulter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;