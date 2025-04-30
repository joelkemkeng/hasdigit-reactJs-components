# Guide d'Utilisation - Feature Detail Transaction

## Introduction

Ce guide vous aidera à intégrer la feature Detail Transaction dans votre projet React. Cette feature permet d'afficher les détails d'une transaction de manière élégante et interactive.

## Prérequis

### 1. Dépendances Requises
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^4.9.0",
    "tailwindcss": "^3.0.0",
    "lucide-react": "^0.294.0"
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
      }
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
├── features/
│   └── wallet/
│       └── detail-transaction/
├── hooks/
│   └── wallet/
│       └── detail-transaction/
├── layouts/
│   └── wallet/
│       └── detail-transaction/
└── types/
    └── wallet/
        └── detail-transaction/
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
```

### 2. Configuration du Hook
```typescript
// src/hooks/wallet/detail-transaction/useTransaction.ts
import { useState, useCallback } from 'react';
import { Transaction } from '../../../types/wallet/detail-transaction/transaction.types';

export const useTransaction = (transactionId: string) => {
  // ... implémentation
};
```

### 3. Utilisation du Composant
```tsx
import { TransactionDetailModal } from './features/wallet/detail-transaction/TransactionDetailModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Voir les détails
      </button>

      {isModalOpen && (
        <TransactionDetailModal
          transactionId="BOAZ-AVI-25894"
          onClose={() => setIsModalOpen(false)}
          onHistoryClick={() => {
            // Votre logique pour l'historique
          }}
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
```

### 2. Thème
```typescript
// src/theme/transaction.ts
export const transactionTheme = {
  colors: {
    primary: '#3B82F6',
    secondary: '#F97316',
    // ... autres couleurs
  }
};
```

### 3. Composants
Vous pouvez personnaliser chaque composant en modifiant ses props :
```tsx
<TransactionHeader
  title="Détails de Transaction"
  onClose={handleClose}
  onHistoryClick={handleHistory}
/>
```

## Gestion des Données

### 1. Configuration de l'API
```typescript
// src/api/transaction.ts
export const fetchTransaction = async (id: string): Promise<Transaction> => {
  const response = await fetch(`/api/transactions/${id}`);
  return response.json();
};
```

### 2. Intégration avec le Hook
```typescript
// src/hooks/wallet/detail-transaction/useTransaction.ts
import { fetchTransaction } from '../../../api/transaction';

export const useTransaction = (transactionId: string) => {
  // ... implémentation avec fetchTransaction
};
```

## Gestion des Erreurs

### 1. Configuration des Messages
```typescript
// src/constants/error-messages.ts
export const ERROR_MESSAGES = {
  TRANSACTION_NOT_FOUND: 'Transaction non trouvée',
  NETWORK_ERROR: 'Erreur de connexion',
  // ... autres messages
};
```

### 2. Gestion dans le Composant
```tsx
<TransactionDetailModal
  transactionId={id}
  onError={(error) => {
    // Votre logique de gestion d'erreur
  }}
/>
```

## Tests

### 1. Tests Unitaires
```typescript
// src/tests/TransactionDetailModal.test.tsx
import { render, screen } from '@testing-library/react';
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
    // Vos assertions
  });
});
```

### 2. Tests d'Intégration
```typescript
// src/tests/integration/transaction.test.tsx
import { render, fireEvent } from '@testing-library/react';
import { TransactionDetailModal } from '../../features/wallet/detail-transaction/TransactionDetailModal';

describe('Transaction Integration', () => {
  it('handles user interactions correctly', () => {
    // Vos tests d'intégration
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

### 3. Déploiement
```bash
npm run deploy
# ou
yarn deploy
```

## Dépannage

### 1. Problèmes Courants
- **Erreur de Type**: Vérifiez que tous les types sont correctement importés
- **Erreur de Style**: Vérifiez la configuration Tailwind
- **Erreur d'API**: Vérifiez les endpoints et les credentials

### 2. Solutions
- Vérifiez les logs de la console
- Consultez la documentation des dépendances
- Vérifiez les versions des packages

## Support

### 1. Ressources
- Documentation officielle
- Exemples de code
- Guides de migration

### 2. Contact
- Email: support@example.com
- GitHub Issues
- Forum de la communauté

## Mise à Jour

### 1. Vérification des Versions
```bash
npm outdated
# ou
yarn outdated
```

### 2. Mise à Jour
```bash
npm update
# ou
yarn upgrade
```

### 3. Migration
Suivez le guide de migration pour les changements majeurs.

## Conclusion

Cette feature est conçue pour être facilement intégrée et personnalisée. N'hésitez pas à consulter la documentation technique pour plus de détails sur l'implémentation. 