import React from 'react';
import { FileText, Download, Share2 } from 'lucide-react';
import { DocumentItemProps } from '../types/props';

export const DocumentItem: React.FC<DocumentItemProps> = ({
  name,
  date,
  onDownload,
  onShare,
}) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-xl p-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3">
          <FileText size={20} className="text-orange-600 dark:text-orange-400" />
        </div>
        <div>
          <span className="text-gray-900 dark:text-white font-medium">{name}</span>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Généré le {date}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onDownload}
          title="Télécharger le document"
          className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 transition-colors"
        >
          <Download size={18} className="text-blue-600 dark:text-blue-400" />
        </button>
        <button
          onClick={onShare}
          title="Partager le document"
          className="p-2 rounded-lg bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/30 dark:hover:bg-orange-800/50 transition-colors"
        >
          <Share2 size={18} className="text-orange-600 dark:text-orange-400" />
        </button>
      </div>
    </div>
  );
}; 