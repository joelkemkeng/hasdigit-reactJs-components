/**
 * @author Joel Kemkeng
 * @description En-tête du modal de détail d'une transaction
 */

import React from 'react';
import { X, History } from 'lucide-react';

interface TransactionHeaderProps {
  onClose: () => void;
  onHistoryClick: () => void;
}

export const TransactionHeader: React.FC<TransactionHeaderProps> = ({
  onClose,
  onHistoryClick,
}) => {
  return (
    <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Détails de la transaction
        </h2>
        <button
          onClick={onHistoryClick}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          title="Voir l'historique"
        >
          <History size={20} className="text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      <button
        onClick={onClose}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        title="Fermer"
      >
        <X size={20} className="text-gray-500 dark:text-gray-400" />
      </button>
    </div>
  );
}; 