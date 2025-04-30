/**
 * @author Joel Kemkeng
 * @description Page d'accueil de la bibliothèque de composants
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Layout, Search } from 'lucide-react';

const categories = [
  {
    name: 'Composants Wallet',
    description: 'Composants spécialisés pour les applications de portefeuille numérique',
    icon: <Wallet size={32} className="text-blue-600 dark:text-blue-400" />,
    path: '/wallet',
    count: 1
  },
  // Autres catégories à venir...
];

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Bibliothèque de Composants React
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Une collection de composants React modernes et réutilisables pour accélérer votre développement
        </p>
      </section>

      {/* Barre de recherche */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher un composant..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-shadow"
          />
        </div>
      </div>

      {/* Grille des catégories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.path}
            to={category.path}
            className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                    {category.count} composant{category.count > 1 ? 's' : ''}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    Explorer →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage; 