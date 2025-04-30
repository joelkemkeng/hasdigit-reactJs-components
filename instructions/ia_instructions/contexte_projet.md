# Contexte du Projet - Bibliothèque de Composants React

## 1. Vue d'Ensemble
Ce projet est une bibliothèque de composants React spécialisée dans l'affichage des détails de transactions de portefeuille. Il suit une architecture modulaire et des principes de développement stricts pour assurer la maintenabilité et la réutilisabilité.

## 2. Architecture du Projet

### 2.1 Structure des Dossiers
```
src/
├── components/          # Composants UI réutilisables
│   └── wallet/         # Composants spécifiques au wallet
│       └── detail-transaction/  # Composants pour les détails de transaction
├── features/           # Fonctionnalités complètes
│   └── wallet/
│       └── detail-transaction/  # Feature de détail de transaction
├── hooks/             # Logique réutilisable
│   └── wallet/
│       └── detail-transaction/  # Hooks pour les transactions
├── layouts/           # Mises en page
│   └── wallet/
│       └── detail-transaction/  # Layouts pour les transactions
├── pages/             # Pages de l'application
│   └── wallet/
│       └── detail-transaction/  # Pages de transaction
├── styles/            # Styles globaux
├── types/             # Types TypeScript
│   └── wallet/
│       └── detail-transaction/  # Types pour les transactions
└── constants/         # Constantes et configurations
```

### 2.2 Organisation des Composants
Chaque composant suit une structure standard :
```
MonComposant/
├── index.ts           # Exportations
├── MonComposant.tsx   # Implémentation
└── types.ts           # Types et interfaces
```

## 3. Exemple Concret : Feature Detail Transaction

### 3.1 Composants
1. **TransactionHeader**
   - Affiche l'en-tête de la transaction
   - Gère les actions de fermeture et d'historique
   - Utilise des icônes de Lucide React

2. **TransactionSummary**
   - Affiche un résumé de la transaction
   - Inclut le montant, la date, et le statut
   - Utilise des styles Tailwind CSS

3. **TransactionDetails**
   - Affiche les détails complets
   - Inclut les informations de l'expéditeur et du destinataire
   - Gère l'affichage conditionnel des informations

4. **TransactionDocuments**
   - Gère l'affichage des documents associés
   - Permet le téléchargement et la prévisualisation
   - Utilise des composants de prévisualisation

5. **TransactionActions**
   - Gère les actions possibles sur la transaction
   - Inclut le partage et le téléchargement
   - Utilise des boutons d'action

### 3.2 Types
```typescript
interface Transaction {
  id: string;
  amount: number;
  date: string;
  status: 'pending' | 'completed' | 'failed';
  sender: {
    name: string;
    account: string;
  };
  recipient: {
    name: string;
    account: string;
  };
  documents: Document[];
}

interface Document {
  id: string;
  name: string;
  type: string;
  url: string;
}
```

### 3.3 Hooks
```typescript
const useTransaction = (transactionId: string) => {
  // Logique de récupération des données
  return {
    transaction,
    loading,
    error
  };
};
```

## 4. Règles de Développement

### 4.1 Nommage
- Composants : PascalCase (ex: `TransactionHeader`)
- Fichiers : PascalCase pour les composants, kebab-case pour les autres
- Variables : camelCase
- Types : PascalCase avec préfixe I pour les interfaces

### 4.2 Structure des Fichiers
- Un composant par fichier
- Types dans un fichier séparé
- Styles avec Tailwind CSS
- Documentation JSDoc obligatoire

### 4.3 Documentation
```typescript
/**
 * @author [Nom du développeur]
 * @description [Description du composant]
 * @param {Type} paramName - Description du paramètre
 * @returns {JSX.Element} Description du retour
 */
```

## 5. Bonnes Pratiques

### 5.1 TypeScript
- Utiliser le mode strict
- Définir des types explicites
- Éviter `any`
- Utiliser des interfaces pour les props

### 5.2 React
- Utiliser des composants fonctionnels
- Implémenter les hooks personnalisés
- Gérer les états de chargement et d'erreur
- Utiliser des props typées

### 5.3 Styling
- Utiliser Tailwind CSS
- Suivre la convention de nommage
- Implémenter le mode sombre
- Assurer la responsivité

## 6. Tests et Validation

### 6.1 Tests Unitaires
- Tester chaque composant
- Vérifier les props
- Tester les hooks
- Valider les types

### 6.2 Validation
- Vérifier les types TypeScript
- Exécuter ESLint
- Formater avec Prettier
- Vérifier la responsivité

## 7. Exemple d'Implémentation

### 7.1 Création d'un Composant
```typescript
// types.ts
export interface MonComposantProps {
  title: string;
  onAction: () => void;
}

// MonComposant.tsx
import React from 'react';
import { MonComposantProps } from './types';

export const MonComposant: React.FC<MonComposantProps> = ({
  title,
  onAction
}) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold">{title}</h2>
      <button onClick={onAction}>Action</button>
    </div>
  );
};

// index.ts
export * from './MonComposant';
```

## 8. Points d'Attention

### 8.1 Performance
- Optimiser les rendus
- Utiliser la mémoisation
- Gérer les effets de bord
- Optimiser les imports

### 8.2 Sécurité
- Valider les entrées
- Sanitizer les données
- Gérer les erreurs
- Protéger les routes

### 8.3 Accessibilité
- Utiliser des rôles ARIA
- Gérer le focus
- Assurer le contraste
- Supporter le clavier

## 9. Conclusion
Ce projet suit une architecture stricte et des conventions de code rigoureuses. Chaque nouveau composant doit respecter ces règles pour maintenir la cohérence et la qualité du code. L'exemple de la feature Detail Transaction sert de référence pour l'implémentation de nouvelles fonctionnalités. 