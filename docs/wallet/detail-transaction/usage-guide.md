# Guide d'Utilisation - Feature Detail Transaction

## Introduction

Ce guide vous aidera à intégrer la feature Detail Transaction dans votre projet React. Cette feature permet d'afficher les détails d'une transaction de manière élégante et interactive, avec un support complet du mode sombre et des animations fluides.

## Prérequis

### 1. Dépendances Requises
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^4.9.0",
    "tailwindcss": "^3.0.0",
    "lucide-react": "^0.294.0",
    "@headlessui/react": "^1.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

### 2. Configuration Tailwind
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Vos couleurs personnalisées
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    }
  },
  plugins: []
}
```

## Installation

### 1. Cloner le Projet
```bash
git clone [URL_DU_REPO]
cd detail-transactions
```

### 2. Extraire les Fichiers Nécessaires
Copiez les dossiers suivants dans votre projet :
```
src/
├── components/
│   └── wallet/
│       └── detail-transaction/
│           ├── TransactionHeader.tsx
│           ├── TransactionSummary.tsx
│           ├── TransactionDetails.tsx
│           ├── TransactionDocuments.tsx
│           ├── TransactionActions.tsx
│           ├── CopyButton.tsx
│           └── DocumentItem.tsx
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
            └── transaction.types.ts
```

### 3. Installer les Dépendances
```bash
npm install
# ou
yarn install
```

## Intégration

### 1. Configuration des Types
```typescript
// src/types/wallet/detail-transaction/transaction.types.ts
export interface Transaction {
  id: string;
  type: 'incoming' | 'outgoing';
  // ... autres propriétés
}

export interface TransactionModalProps {
  transactionId: string;
  onClose: () => void;
  onHistoryClick?: () => void;
  customTheme?: {
    primaryColor?: string;
    borderRadius?: string;
    fontFamily?: string;
  };
  showDocuments?: boolean;
  enableSharing?: boolean;
}
```

### 2. Configuration du Hook
```typescript
// src/hooks/wallet/detail-transaction/useTransaction.ts
import { useState, useCallback } from 'react';
import { Transaction } from '../../../types/wallet/detail-transaction/transaction.types';

export const useTransaction = (transactionId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  const fetchTransaction = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/transactions/${transactionId}`);
      if (!response.ok) throw new Error('Transaction not found');
      const data = await response.json();
      setTransaction(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, [transactionId]);

  return { transaction, isLoading, error, refetch: fetchTransaction };
};
```

### 3. Utilisation du Composant
```tsx
import { TransactionDetailModal } from './features/wallet/detail-transaction/TransactionDetailModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Voir les détails
      </button>

      {isModalOpen && (
        <TransactionDetailModal
          transactionId="BOAZ-AVI-25894"
          onClose={() => setIsModalOpen(false)}
          onHistoryClick={() => {
            // Votre logique pour l'historique
          }}
          customTheme={{
            primaryColor: '#3B82F6',
            borderRadius: '1rem',
            fontFamily: 'Inter, sans-serif'
          }}
          showDocuments={true}
          enableSharing={true}
        />
      )}
    </div>
  );
}
```

## Personnalisation

### 1. Styles
```css
/* src/styles/transaction.css */
.transaction-modal {
  /* Vos styles personnalisés */
}

/* Support du mode sombre */
.dark .transaction-modal {
  /* Styles pour le mode sombre */
}

/* Animations */
.transaction-modal-enter {
  opacity: 0;
  transform: translateY(10px);
}

.transaction-modal-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 300ms, transform 300ms;
}
```

### 2. Thème
```typescript
// src/theme/transaction.ts
export const transactionTheme = {
  colors: {
    primary: '#3B82F6',
    secondary: '#F97316',
    success: '#22C55E',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
  },
};
```

### 3. Composants
Vous pouvez personnaliser chaque composant en modifiant ses props :
```tsx
<TransactionHeader
  title="Détails de Transaction"
  onClose={handleClose}
  onHistoryClick={handleHistory}
  className="custom-header"
/>

<TransactionSummary
  transaction={transaction}
  showBalance={true}
  showStatus={true}
  className="custom-summary"
/>

<TransactionDocuments
  documents={transaction.linkedDocuments}
  onDownload={handleDownload}
  onShare={handleShare}
  className="custom-documents"
/>
```

## Gestion des Données

### 1. Configuration de l'API
```typescript
// src/api/transaction.ts
export const fetchTransaction = async (id: string): Promise<Transaction> => {
  const response = await fetch(`/api/transactions/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch transaction');
  }
  
  return response.json();
};

export const downloadDocument = async (documentId: string): Promise<Blob> => {
  const response = await fetch(`/api/documents/${documentId}`, {
    headers: {
      'Authorization': `Bearer ${getToken()}`,
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to download document');
  }
  
  return response.blob();
};
```

### 2. Intégration avec le Hook
```typescript
// src/hooks/wallet/detail-transaction/useTransaction.ts
import { fetchTransaction } from '../../../api/transaction';

export const useTransaction = (transactionId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchTransaction(transactionId);
      setTransaction(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, [transactionId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { transaction, isLoading, error, refetch: fetchData };
};
```

## Gestion des Erreurs

### 1. Configuration des Messages
```typescript
// src/constants/error-messages.ts
export const ERROR_MESSAGES = {
  TRANSACTION_NOT_FOUND: 'Transaction non trouvée',
  NETWORK_ERROR: 'Erreur de connexion',
  UNAUTHORIZED: 'Accès non autorisé',
  FORBIDDEN: 'Accès refusé',
  SERVER_ERROR: 'Erreur serveur',
  DOCUMENT_DOWNLOAD_ERROR: 'Erreur lors du téléchargement du document',
  DOCUMENT_SHARE_ERROR: 'Erreur lors du partage du document',
};

export const ERROR_CODES = {
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  SERVER_ERROR: 500,
};
```

### 2. Gestion dans le Composant
```tsx
<TransactionDetailModal
  transactionId={id}
  onError={(error) => {
    // Votre logique de gestion d'erreur
    console.error('Transaction error:', error);
    showToast({
      type: 'error',
      message: ERROR_MESSAGES[error.code] || 'Une erreur est survenue',
    });
  }}
  onRetry={() => {
    // Logique de réessai
    refetchTransaction();
  }}
/>
```

## Tests

### 1. Tests Unitaires
```typescript
// src/tests/TransactionDetailModal.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { TransactionDetailModal } from '../features/wallet/detail-transaction/TransactionDetailModal';

describe('TransactionDetailModal', () => {
  it('renders correctly', () => {
    render(
      <TransactionDetailModal
        transactionId="test-id"
        onClose={() => {}}
        onHistoryClick={() => {}}
      />
    );
    
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Détails de la transaction')).toBeInTheDocument();
  });

  it('handles close button click', () => {
    const onClose = jest.fn();
    render(
      <TransactionDetailModal
        transactionId="test-id"
        onClose={onClose}
        onHistoryClick={() => {}}
      />
    );
    
    fireEvent.click(screen.getByRole('button', { name: /fermer/i }));
    expect(onClose).toHaveBeenCalled();
  });
});
```

### 2. Tests d'Intégration
```typescript
// src/tests/integration/transaction.test.tsx
import { render, fireEvent, waitFor } from '@testing-library/react';
import { TransactionDetailModal } from '../../features/wallet/detail-transaction/TransactionDetailModal';
import { useTransaction } from '../../hooks/wallet/detail-transaction/useTransaction';

jest.mock('../../hooks/wallet/detail-transaction/useTransaction');

describe('Transaction Integration', () => {
  it('loads and displays transaction data', async () => {
    const mockTransaction = {
      id: 'test-id',
      type: 'outgoing',
      amount: 100,
      // ... autres propriétés
    };

    (useTransaction as jest.Mock).mockReturnValue({
      transaction: mockTransaction,
      isLoading: false,
      error: null,
    });

    render(
      <TransactionDetailModal
        transactionId="test-id"
        onClose={() => {}}
        onHistoryClick={() => {}}
      />
    );

    await waitFor(() => {
      expect(screen.getByText('100 €')).toBeInTheDocument();
    });
  });
});
```

## Déploiement

### 1. Build
```bash
npm run build
# ou
yarn build
```

### 2. Vérification
```bash
npm run test
# ou
yarn test
```

### 3. Optimisation
```bash
npm run build:analyze
# ou
yarn build:analyze
```

## Accessibilité

### 1. Configuration
```typescript
// src/config/accessibility.ts
export const accessibilityConfig = {
  ariaLabels: {
    close: 'Fermer la modal',
    history: 'Voir l\'historique',
    download: 'Télécharger le document',
    share: 'Partager le document',
  },
  keyboardShortcuts: {
    close: 'Escape',
    history: 'h',
    download: 'd',
    share: 's',
  },
};
```

### 2. Utilisation
```tsx
<TransactionDetailModal
  transactionId={id}
  onClose={handleClose}
  accessibilityConfig={accessibilityConfig}
  ariaLabel="Détails de la transaction"
  role="dialog"
/>
```

## Sécurité

### 1. Configuration
```typescript
// src/config/security.ts
export const securityConfig = {
  csrfToken: process.env.REACT_APP_CSRF_TOKEN,
  allowedOrigins: ['https://your-domain.com'],
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limite de 100 requêtes par fenêtre
  },
};
```

### 2. Utilisation
```tsx
<TransactionDetailModal
  transactionId={id}
  onClose={handleClose}
  securityConfig={securityConfig}
  validateInput={true}
  sanitizeOutput={true}
/>
```

## Conclusion

Cette feature est conçue pour être facilement intégrée et personnalisée. N'hésitez pas à consulter la documentation technique pour plus de détails sur l'implémentation. 