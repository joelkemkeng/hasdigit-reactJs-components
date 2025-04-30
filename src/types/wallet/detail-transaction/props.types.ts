/**
 * @author Joel Kemkeng
 * @description Types pour les props des composants de détail de transaction
 */

import { Transaction } from './transaction.types';

export interface TransactionDetailModalProps {
  transactionId: string;
  onClose: () => void;
  onHistoryClick: () => void;
}

export interface DocumentItemProps {
  name: string;
  date: string;
  onDownload: () => void;
  onShare: () => void;
}

export interface CopyButtonProps {
  text: string;
  className?: string;
} 