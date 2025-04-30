/**
 * @author Joel Kemkeng
 * @description Modal de détail d'une transaction
 */

import React, { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { TransactionDetailModalProps } from '../../../types/wallet/detail-transaction/transaction.types';
import { useTransaction } from '../../../hooks/wallet/detail-transaction/useTransaction';
import { TransactionHeader } from '../../../components/wallet/detail-transaction/TransactionHeader';
import { TransactionSummary } from '../../../components/wallet/detail-transaction/TransactionSummary';
import { TransactionDetails } from '../../../components/wallet/detail-transaction/TransactionDetails';
import { TransactionDocuments } from '../../../components/wallet/detail-transaction/TransactionDocuments';
import { TransactionActions } from '../../../components/wallet/detail-transaction/TransactionActions';

export const TransactionDetailModal: React.FC<TransactionDetailModalProps> = ({
  transactionId,
  onClose,
  onHistoryClick,
}) => {
  const { transaction, loading, error } = useTransaction(transactionId);

  // Ajouter un gestionnaire d'événements pour la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error || !transaction) {
    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
          <div className="flex items-center text-red-600 dark:text-red-400">
            <AlertTriangle size={24} className="mr-2" />
            <span>{error || 'Transaction non trouvée'}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start sm:items-center justify-center z-50 p-0 sm:p-6 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div 
        className="w-full max-w-5xl bg-white dark:bg-gray-900 rounded-none sm:rounded-2xl overflow-hidden shadow-2xl animate-fadeIn my-0 sm:my-6 min-h-screen sm:min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <TransactionHeader onClose={onClose} onHistoryClick={onHistoryClick} />

        <div className="flex flex-col lg:flex-row max-h-[calc(100vh-4rem)] sm:max-h-none overflow-y-auto">
          <TransactionSummary transaction={transaction} />

          <div className="lg:w-2/3 p-4 sm:p-6 lg:p-8">
            <TransactionDetails transaction={transaction} />
            <TransactionDocuments transaction={transaction} />
            <TransactionActions />
          </div>
        </div>
      </div>
    </div>
  );
}; 