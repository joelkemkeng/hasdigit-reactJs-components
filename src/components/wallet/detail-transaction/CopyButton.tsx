import React from 'react';
import { Copy, CheckCircle } from 'lucide-react';
import { useClipboard } from '../../../hooks/wallet/detail-transaction/useClipboard';
import { CopyButtonProps } from '../../../types/wallet/detail-transaction/props.types';

export const CopyButton: React.FC<CopyButtonProps> = ({ text, className = '' }) => {
  const { copyToClipboard, isCopied, error } = useClipboard();

  const handleCopy = async () => {
    await copyToClipboard(text);
  };

  return (
    <button
      onClick={handleCopy}
      className={`text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors ${className}`}
      title={isCopied ? "Copié !" : "Copier"}
    >
      {isCopied ? (
        <CheckCircle size={14} className="text-green-500" />
      ) : (
        <Copy size={14} />
      )}
    </button>
  );
}; 