import { Transaction } from './transaction';

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