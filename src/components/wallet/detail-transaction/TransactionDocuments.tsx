/**
 * @author Joel Kemkeng
 * @description Composant de documents pour le détail d'une transaction
 */

import React from 'react';
import { FileText, Download, Share2 } from 'lucide-react';
import { Transaction } from '../../../types/wallet/detail-transaction/transaction.types';

interface TransactionDocumentsProps {
  transaction: Transaction;
}

export const TransactionDocuments: React.FC<TransactionDocumentsProps> = ({
  transaction
}) => {
  return (
    <div className="mt-8">
      <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
        Documents associés
      </h4>
      <div className="grid grid-cols-1 gap-4">
        {transaction.linkedDocuments.map((doc: string, index: number) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-4">
                <FileText size={24} className="text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <span className="text-gray-900 dark:text-white font-medium">{doc}</span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Généré le {transaction.date}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="p-2.5 rounded-xl bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 transition-colors" title="Télécharger le document">
                <Download size={20} className="text-blue-600 dark:text-blue-400" />
              </button>
              <button className="p-2.5 rounded-xl bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/30 dark:hover:bg-orange-800/50 transition-colors" title="Partager le document">
                <Share2 size={20} className="text-orange-600 dark:text-orange-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 