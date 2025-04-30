/**
 * @author Joel Kemkeng
 * @description Composant d'actions pour le détail d'une transaction
 */

import React from 'react';
import { Flag, Share2 } from 'lucide-react';

export const TransactionActions: React.FC = () => {
  return (
    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 sticky bottom-0 sm:relative bg-white dark:bg-gray-900 p-4 sm:p-0 border-t sm:border-0 border-gray-100 dark:border-gray-800">
      <button className="px-4 sm:px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-900/20 rounded-xl transition-colors font-medium w-full sm:w-auto">
        Imprimer le reçu
      </button>
      <button className="px-4 sm:px-6 py-3 bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:hover:bg-orange-800/50 rounded-xl transition-colors flex items-center justify-center font-medium w-full sm:w-auto">
        <Flag size={18} className="mr-2" />
        Contester la transaction
      </button>
      <button className="px-4 sm:px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 rounded-xl transition-colors flex items-center justify-center font-medium w-full sm:w-auto">
        <Share2 size={18} className="mr-2" />
        Partager le reçu
      </button>
    </div>
  );
}; 