/**
 * @author Joel Kemkeng
 * @description Composant de documents pour le détail d'une transaction
 */

import React from 'react';
import { FileText, Download, Share2 } from 'lucide-react';
import { Transaction } from '../../../types/wallet/detail-transaction/transaction.types';
import { DocumentItem } from './DocumentItem';

interface TransactionDocumentsProps {
  transaction: Transaction;
}

export const TransactionDocuments: React.FC<TransactionDocumentsProps> = ({
  transaction
}) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Documents liés</h3>
      <div className="space-y-4">
        {transaction.linkedDocuments.map((doc: string, index: number) => (
          <DocumentItem
            key={index}
            name={doc}
            date={transaction.date}
            onDownload={() => console.log('Download:', doc)}
            onShare={() => console.log('Share:', doc)}
          />
        ))}
      </div>
    </div>
  );
}; 