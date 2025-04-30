/**
 * @author Joel Kemkeng
 * @description Composant de détails pour le détail d'une transaction
 */

import React from 'react';
import { Copy } from 'lucide-react';
import { Transaction } from '../../../types/wallet/detail-transaction/transaction.types';

interface TransactionDetailsProps {
  transaction: Transaction;
}

export const TransactionDetails: React.FC<TransactionDetailsProps> = ({
  transaction
}) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* Service Details */}
      <div>
        <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
          Détails du service
        </h4>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">Type de service</span>
              <span className="text-gray-900 dark:text-white font-medium">{transaction.service}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">N° Proforma</span>
              <div className="flex items-center">
                <span className="text-gray-900 dark:text-white truncate max-w-[180px]">{transaction.proformaNumber}</span>
                <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-2" title="Copier le numéro de proforma">
                  <Copy size={16} />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">Catégorie</span>
              <span className="text-gray-900 dark:text-white font-medium">{transaction.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div>
        <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
          Détails du paiement
        </h4>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">Méthode</span>
              <span className="text-gray-900 dark:text-white font-medium">{transaction.paymentMethod}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">ID Transaction</span>
              <div className="flex items-center">
                <span className="text-gray-900 dark:text-white truncate max-w-[180px]">{transaction.idTransactionProforma}</span>
                <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-2" title="Copier l'ID de transaction">
                  <Copy size={16} />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">Frais</span>
              <span className="text-gray-900 dark:text-white font-medium">{transaction.fees} {transaction.currency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 