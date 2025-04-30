/**
 * @author Joel Kemkeng
 * @description Layout principal de la bibliothèque de composants
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wallet, ChevronLeft, Menu, X } from 'lucide-react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: 'Accueil',
      path: '/',
      icon: <Home size={24} />
    },
    {
      name: 'Composants Wallet',
      path: '/wallet',
      icon: <Wallet size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header fixe */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {location.pathname !== '/' && (
                <Link
                  to="/"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                >
                  <ChevronLeft size={24} className="text-gray-600 dark:text-gray-300" />
                </Link>
              )}
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Bibliothèque de Composants
              </h1>
            </div>

            {/* Menu burger pour mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu size={24} className="text-gray-600 dark:text-gray-300" />
              )}
            </button>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-colors
                    ${location.pathname === item.path
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white dark:bg-gray-800 pt-16">
          <nav className="container mx-auto px-4 py-6">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 p-4 rounded-xl transition-colors
                    ${location.pathname === item.path
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Contenu principal */}
      <main className="pt-16 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Bibliothèque de Composants - Créé par Joel Kemkeng
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 