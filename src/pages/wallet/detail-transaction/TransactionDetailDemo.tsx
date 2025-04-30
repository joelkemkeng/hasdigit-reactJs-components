/**
 * @author Joel Kemkeng
 * @description Page de démonstration du composant TransactionDetailModal
 */

import React, { useState } from 'react';
import { TransactionDetailModal } from '../../../features/wallet/detail-transaction/TransactionDetailModal';
import { Code, Copy, ExternalLink, PlayCircle, FileJson, FolderTree, Package, Layers, Settings } from 'lucide-react';

// Imports des composants pour la documentation
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TransactionHeader } from '../../../components/wallet/detail-transaction/TransactionHeader';
import { TransactionSummary } from '../../../components/wallet/detail-transaction/TransactionSummary';
import { TransactionDetails } from '../../../components/wallet/detail-transaction/TransactionDetails';
import { TransactionDocuments } from '../../../components/wallet/detail-transaction/TransactionDocuments';
/* eslint-enable @typescript-eslint/no-unused-vars */

export const TransactionDetailDemo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const sampleTransaction = {
    id: "BOAZ-AVI-25894",
    type: "outgoing",
    service: "Attestation de Virement Irrévocable (AVI)",
    proformaNumber: "Proforma-classique-AVI_25894",
    category: "Document administratif",
    amount: -175.00,
    currency: "€",
    date: "30 Avril 2025",
    time: "14:32",
    status: "Payée",
    paymentMethod: "Dépôt bancaire - Banque Atlantique",
    idTransactionProforma: "PROF-78542-9021",
    fees: 0,
    balanceBefore: 250.00,
    balanceAfter: 75.00,
    linkedDocuments: [
      "Proforma-classique-AVI_25894.pdf",
      "Contrat-classique-AVI_25894.pdf",
      "AVI_25894_validé.pdf"
    ],
    subscriptionStatus: "Livré",
    embassy: "Ambassade de France au Cameroun",
    note: "",
    transactionDate: "30/04/2025 à 14:32:47",
    etudiant: {
      nom: "MBOCK",
      prenom: "Jean",
      email: "jean.mbock@gmail.com",
      telephone: "+237 698 76 54 32"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Transaction Detail Modal Demo
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Un composant React moderne et élégant pour afficher les détails d'une transaction avec une interface utilisateur intuitive.
        </p>
      </div>

      {/* Demo Section */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-md">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200"
            >
              <PlayCircle size={24} />
              <span>Tester le composant</span>
            </button>
          </div>
        </div>
      </div>

      {/* Documentation Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Guide d'utilisation complet</h2>
        
        {/* Structure des fichiers */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <FolderTree size={24} className="mr-3 text-blue-600" />
            Structure des fichiers
          </h3>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 mb-4">
            <pre className="text-sm text-gray-800 dark:text-gray-200">
{`src/
├── components/
│   └── wallet/
│       └── detail-transaction/
│           ├── TransactionHeader.tsx
│           ├── TransactionSummary.tsx
│           ├── TransactionDetails.tsx
│           ├── TransactionDocuments.tsx
│           ├── TransactionActions.tsx
│           ├── DocumentItem.tsx
│           └── CopyButton.tsx
├── features/
│   └── wallet/
│       └── detail-transaction/
│           └── TransactionDetailModal.tsx
├── hooks/
│   └── wallet/
│       └── detail-transaction/
│           ├── useTransaction.ts
│           └── useClipboard.ts
└── types/
    └── wallet/
        └── detail-transaction/
            ├── transaction.types.ts
            └── props.types.ts`}
            </pre>
          </div>
        </div>

        {/* Installation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Package size={24} className="mr-3 text-blue-600" />
            Installation
          </h3>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              1. Installez le package via npm :
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 flex justify-between items-center">
              <code className="text-sm">npm install @boaz/detail-transaction</code>
              <button
                onClick={() => handleCopyCode('npm install @boaz/detail-transaction')}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                title="Copier la commande"
              >
                <Copy size={20} />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              2. Assurez-vous d'avoir les dépendances requises :
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
{`{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "tailwindcss": "^3.3.0",
  "lucide-react": "^0.294.0"
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Format des données */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <FileJson size={24} className="mr-3 text-blue-600" />
            Format des données
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Le composant attend une transaction avec la structure suivante :
          </p>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-start">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
{JSON.stringify(sampleTransaction, null, 2)}
              </pre>
              <button
                onClick={() => handleCopyCode(JSON.stringify(sampleTransaction, null, 2))}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 ml-4"
                title="Copier l'exemple"
              >
                <Copy size={20} />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Description des champs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="font-medium text-gray-900 dark:text-white">Champs obligatoires :</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>id: Identifiant unique de la transaction</li>
                  <li>type: "incoming" ou "outgoing"</li>
                  <li>amount: Montant (nombre)</li>
                  <li>currency: Devise</li>
                  <li>status: État de la transaction</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-900 dark:text-white">Champs optionnels :</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>note: Notes additionnelles</li>
                  <li>linkedDocuments: Liste des documents</li>
                  <li>embassy: Ambassade concernée</li>
                  <li>fees: Frais associés</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Utilisation avancée */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Settings size={24} className="mr-3 text-blue-600" />
            Utilisation avancée
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Personnalisation</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Le composant peut être personnalisé via les props suivantes :
              </p>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
                <pre className="text-sm text-gray-800 dark:text-gray-200">
{`<TransactionDetailModal
  transactionId="123"
  onClose={() => {}}
  onHistoryClick={() => {}}
  // Props optionnelles
  customTheme={{
    primaryColor: '#0ea5e9',
    borderRadius: '1rem',
    fontFamily: 'Inter, sans-serif'
  }}
  showDocuments={true}
  enableSharing={true}
/>`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Gestion des événements</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Exemple d'implémentation avec gestion des événements :
              </p>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
                <pre className="text-sm text-gray-800 dark:text-gray-200">
{`const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    // Logique de fermeture personnalisée
    setIsOpen(false);
  };

  const handleHistoryClick = () => {
    // Navigation vers l'historique
    navigate('/transactions/history');
  };

  return (
    <TransactionDetailModal
      transactionId="123"
      onClose={handleClose}
      onHistoryClick={handleHistoryClick}
    />
  );
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Composants internes */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Layers size={24} className="mr-3 text-blue-600" />
            Composants internes
          </h3>
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              Le modal est composé des sous-composants suivants, qui peuvent être utilisés individuellement :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">TransactionHeader</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  En-tête du modal avec titre et boutons de navigation.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-3">
                  <code className="text-sm">
                    {"import { TransactionHeader } from '../../../components/wallet/detail-transaction/TransactionHeader';"}
                  </code>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">TransactionSummary</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Résumé des informations principales de la transaction.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-3">
                  <code className="text-sm">
                    {"import { TransactionSummary } from '../../../components/wallet/detail-transaction/TransactionSummary';"}
                  </code>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">TransactionDetails</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Détails complets de la transaction avec mise en page responsive.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-3">
                  <code className="text-sm">
                    {"import { TransactionDetails } from '../../../components/wallet/detail-transaction/TransactionDetails';"}
                  </code>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">TransactionDocuments</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Liste des documents liés avec options de téléchargement.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-3">
                  <code className="text-sm">
                    {"import { TransactionDocuments } from '../../../components/wallet/detail-transaction/TransactionDocuments';"}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonnes pratiques */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Code size={24} className="mr-3 text-blue-600" />
            Bonnes pratiques
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Performance</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Utilisez la mémorisation (memo) pour les composants enfants qui ne changent pas fréquemment</li>
                <li>Implémentez le chargement paresseux (lazy loading) pour les documents volumineux</li>
                <li>Optimisez les images et les documents avant de les afficher</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Accessibilité</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Assurez-vous que tous les éléments interactifs sont accessibles au clavier</li>
                <li>Utilisez des attributs ARIA appropriés pour les rôles et les états</li>
                <li>Maintenez un contraste suffisant pour le texte et les éléments visuels</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sécurité</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Validez toujours les données d'entrée côté client et serveur</li>
                <li>Implémentez une protection CSRF pour les actions sensibles</li>
                <li>Utilisez HTTPS pour toutes les communications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cas d'utilisation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <ExternalLink size={24} className="mr-3 text-blue-600" />
            Cas d'utilisation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Scénarios courants</h4>
              <div className="space-y-3">
                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Affichage des détails</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Utilisez le modal pour afficher les détails complets d'une transaction après un clic sur une ligne du tableau.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Vérification de statut</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Permettez aux utilisateurs de vérifier rapidement le statut d'une transaction en cours.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Intégrations</h4>
              <div className="space-y-3">
                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Système de notification</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Intégrez le modal avec un système de notification pour les mises à jour de statut.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Export de données</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Permettez l'export des détails de transaction dans différents formats (PDF, CSV).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exemples de code avancés */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Code size={24} className="mr-3 text-blue-600" />
            Exemples de code avancés
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Intégration avec Redux</h4>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
                <pre className="text-sm text-gray-800 dark:text-gray-200">
{`import { useSelector, useDispatch } from 'react-redux';
import { setTransactionDetails } from './store/transactionSlice';

const TransactionContainer = () => {
  const dispatch = useDispatch();
  const transaction = useSelector(state => state.transactions.current);

  const handleTransactionLoad = async (id) => {
    const details = await fetchTransactionDetails(id);
    dispatch(setTransactionDetails(details));
  };

  return (
    <TransactionDetailModal
      transaction={transaction}
      onLoad={handleTransactionLoad}
    />
  );
};`}
                </pre>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Gestion des erreurs</h4>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
                <pre className="text-sm text-gray-800 dark:text-gray-200">
{`const TransactionWithErrorHandling = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTransactionLoad = async (id) => {
    try {
      setIsLoading(true);
      const details = await fetchTransactionDetails(id);
      return details;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <TransactionDetailModal
        onLoad={handleTransactionLoad}
        error={error}
        isLoading={isLoading}
      />
      {error && (
        <div className="error-toast">
          Une erreur est survenue: {error}
        </div>
      )}
    </>
  );
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <TransactionDetailModal
          transactionId="demo-123"
          onClose={() => setIsModalOpen(false)}
          onHistoryClick={() => console.log('Historique cliqué')}
        />
      )}
    </div>
  );
}; 