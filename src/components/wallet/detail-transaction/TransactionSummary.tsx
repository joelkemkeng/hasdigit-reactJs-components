/**
 * @author Joel Kemkeng
 * @description Composant de résumé pour le détail d'une transaction
 */

import React from 'react';
import { BookText, Copy, CheckCircle } from 'lucide-react';
import { Transaction } from '../../../types/wallet/detail-transaction/transaction.types';

interface TransactionSummaryProps {
  transaction: Transaction;
}

export const TransactionSummary: React.FC<TransactionSummaryProps> = ({
  transaction
}) => {
  return (
    <div className="lg:w-1/3 p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-gray-800">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-orange-100 dark:bg-orange-900/30">
          <BookText 
            size={32} 
            className="text-orange-600 dark:text-orange-400" 
          />
        </div>
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Transaction</span>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Service AVI</h3>
        </div>
      </div>
      
      <div className="mb-10">
        <div className={`text-3xl font-bold mb-2 ${transaction.type === "outgoing" ? "text-orange-600 dark:text-orange-400" : "text-blue-600 dark:text-blue-400"}`}>
          {transaction.amount} {transaction.currency}
        </div>
        <div className="flex items-center">
          <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ${transaction.status === "Payée" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"}`}>
            <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
            {transaction.status}
          </span>
        </div>
      </div>
      
      <div className="space-y-8">
        <div>
          <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
            Informations de base
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">Date</span>
              <span className="text-gray-900 dark:text-white font-medium">{transaction.transactionDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">Référence</span>
              <div className="flex items-center">
                <span className="text-gray-900 dark:text-white truncate max-w-[150px]">{transaction.id}</span>
                <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors ml-2" title="Copier la référence">
                  <Copy size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-5">
          <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
            Statut souscription
          </h4>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircle size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-900 dark:text-white font-medium">{transaction.subscriptionStatus}</span>
            </div>
            <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              Détails
            </button>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
            Wallet Boaz
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">Solde avant</span>
              <span className="text-gray-900 dark:text-white font-medium">{transaction.balanceBefore.toFixed(2)} {transaction.currency}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">Solde après</span>
              <span className="text-gray-900 dark:text-white font-medium">{transaction.balanceAfter.toFixed(2)} {transaction.currency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 