/**
 * @author Joel Kemkeng
 * @description Composant d'en-tête pour le détail d'une transaction
 */

import React from 'react';
import { ChevronLeft, X } from 'lucide-react';
import { Transaction } from '../../../types/wallet/detail-transaction/transaction.types';

interface TransactionHeaderProps {
  onClose: () => void;
  onHistoryClick: () => void;
}

export const TransactionHeader: React.FC<TransactionHeaderProps> = ({
  onClose,
  onHistoryClick,
}) => {
  return (
    <div className="sticky top-0 z-10 p-4 sm:p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl hover:bg-blue-700/50 dark:hover:bg-blue-700/50 transition-colors" 
          title="Retour"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Détails de Transaction
        </h2>
      </div>
      <div className="flex items-center space-x-3">
        <button 
          onClick={onHistoryClick}
          className="py-2 px-3 sm:px-4 bg-blue-700/50 hover:bg-blue-800/50 rounded-lg sm:rounded-xl text-white text-sm font-medium transition-colors"
        >
          Historique
        </button>
        <button 
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl hover:bg-blue-700/50 dark:hover:bg-blue-700/50 transition-colors" 
          title="Fermer"
        >
          <X size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
}; 