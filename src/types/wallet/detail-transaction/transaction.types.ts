/**
 * @author Joel Kemkeng
 * @description Types pour les transactions
 */

export interface Transaction {
  id: string;
  type: 'incoming' | 'outgoing';
  service: string;
  proformaNumber: string;
  category: string;
  amount: number;
  currency: string;
  date: string;
  time: string;
  status: string;
  paymentMethod: string;
  idTransactionProforma: string;
  fees: number;
  balanceBefore: number;
  balanceAfter: number;
  linkedDocuments: string[];
  subscriptionStatus: string;
  embassy: string;
  note: string;
  transactionDate: string;
  etudiant: {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
  };
}

export interface TransactionDetailModalProps {
  transactionId: string;
  onClose: () => void;
  onHistoryClick: () => void;
} 