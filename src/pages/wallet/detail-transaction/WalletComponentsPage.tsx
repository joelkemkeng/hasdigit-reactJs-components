/**
 * @author Joel Kemkeng
 * @description Page des composants du wallet
 */

import React from 'react';
import { FileText, Copy, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TransactionDetailModal } from '../../../features/wallet/detail-transaction/TransactionDetailModal';

const components = [
  {
    name: 'Détail Transaction',
    description: 'Modal de détail d\'une transaction avec informations complètes et actions associées',
    preview: () => <TransactionDetailModal transactionId="BOAZ-AVI-25894" onClose={() => {}} onHistoryClick={() => {}} />,
    codeSnippet: `<TransactionDetailModal 
  transactionId="BOAZ-AVI-25894"
  onClose={() => {}}
  onHistoryClick={() => {}}
/>`,
    documentation: 'Affiche les détails complets d\'une transaction avec possibilité de télécharger les documents, partager et effectuer diverses actions.'
  }
];

const WalletComponentsPage = () => {
  const navigate = useNavigate();

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // Vous pouvez ajouter une notification de succès ici
  };

  const handleViewDemo = () => {
    navigate('/wallet/transaction-detail-demo');
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      {/* En-tête */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Composants Wallet
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Une collection de composants spécialisés pour les applications de portefeuille numérique
        </p>
      </div>

      {/* Liste des composants */}
      <div className="grid grid-cols-1 gap-8">
        {components.map((component) => (
          <div
            key={component.name}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            {/* En-tête du composant */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {component.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {component.description}
              </p>
            </div>

            {/* Documentation et aperçu */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <FileText size={20} className="mr-2" />
                  Documentation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {component.documentation}
                </p>

                {/* Code d'exemple */}
                <div className="relative">
                  <pre className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                    <code className="text-gray-100 text-sm">{component.codeSnippet}</code>
                  </pre>
                  <button
                    onClick={() => handleCopyCode(component.codeSnippet)}
                    className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700"
                    title="Copier le code"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>

              {/* Aperçu */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Aperçu
                </h3>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 flex items-center justify-center min-h-[200px]">
                  <button
                    onClick={handleViewDemo}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <ExternalLink size={20} />
                    <span>Voir la démo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletComponentsPage; 