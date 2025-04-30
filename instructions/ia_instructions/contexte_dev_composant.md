# Guide de Développement de Composants

## 1. Instructions Générales pour l'IA

### 1.1 Analyse de la Demande
1. Lire attentivement la description du composant demandé
2. Identifier les fonctionnalités principales
3. Déterminer les dépendances nécessaires
4. Évaluer la complexité du composant

### 1.2 Catégorisation
1. Analyser le type de composant :
   - UI réutilisable → `components/`
   - Fonctionnalité complète → `features/`
   - Logique réutilisable → `hooks/`
   - Mise en page → `layouts/`
   - Page complète → `pages/`

2. Déterminer la catégorie :
   - Existe-t-il une catégorie similaire ?
   - Faut-il créer une nouvelle catégorie ?
   - Faut-il créer une sous-catégorie ?

### 1.3 Structure de Développement
1. Créer la structure de dossiers appropriée
2. Implémenter les types nécessaires
3. Développer le composant
4. Ajouter la documentation
5. Vérifier la conformité

## 2. Instructions Détaillées

### 2.1 Création de la Structure
```bash
# Exemple de structure pour un nouveau composant
src/
└── components/
    └── wallet/
        └── nouveau-composant/
            ├── index.ts
            ├── NouveauComposant.tsx
            └── types.ts
```

### 2.2 Définition des Types
```typescript
// types.ts
export interface NouveauComposantProps {
  // Props obligatoires
  title: string;
  onAction: () => void;
  
  // Props optionnelles
  className?: string;
  variant?: 'primary' | 'secondary';
}

// Types internes
interface InternalState {
  isOpen: boolean;
  data: any[];
}
```

### 2.3 Implémentation du Composant
```typescript
// NouveauComposant.tsx
import React from 'react';
import { NouveauComposantProps } from './types';

/**
 * @author [Nom du développeur]
 * @description [Description détaillée du composant]
 * @param {NouveauComposantProps} props - Les propriétés du composant
 * @returns {JSX.Element} Le composant rendu
 */
export const NouveauComposant: React.FC<NouveauComposantProps> = ({
  title,
  onAction,
  className = '',
  variant = 'primary'
}) => {
  // Implémentation
};
```

### 2.4 Exportation
```typescript
// index.ts
export * from './NouveauComposant';
export * from './types';
```

## 3. Checklist de Vérification

### 3.1 Structure
- [ ] Dossier créé au bon endroit
- [ ] Fichiers nécessaires présents
- [ ] Structure de dossiers correcte
- [ ] Nommage conforme aux conventions

### 3.2 Types
- [ ] Interfaces définies
- [ ] Types exportés
- [ ] Props typées
- [ ] Types internes définis

### 3.3 Composant
- [ ] Implémentation complète
- [ ] Documentation JSDoc
- [ ] Gestion des erreurs
- [ ] États de chargement

### 3.4 Styles
- [ ] Classes Tailwind
- [ ] Mode sombre supporté
- [ ] Responsive design
- [ ] Accessibilité

### 3.5 Tests
- [ ] Tests unitaires
- [ ] Tests d'intégration
- [ ] Tests de performance
- [ ] Tests d'accessibilité

## 4. Instructions pour l'IA

### 4.1 Analyse Initiale
1. Lire la description du composant
2. Identifier les fonctionnalités clés
3. Déterminer les dépendances
4. Évaluer la complexité

### 4.2 Planification
1. Déterminer la catégorie
2. Créer la structure
3. Définir les types
4. Planifier l'implémentation

### 4.3 Développement
1. Créer les fichiers
2. Implémenter les types
3. Développer le composant
4. Ajouter la documentation

### 4.4 Vérification
1. Vérifier la structure
2. Valider les types
3. Tester le composant
4. Vérifier la documentation

## 5. Exemples de Prompts

### 5.1 Création d'un Composant Simple
```
Je veux créer un composant de bouton personnalisé qui :
- Accepte un texte et une action
- Supporte différents styles (primary, secondary)
- Est responsive
- Supporte le mode sombre
```

### 5.2 Création d'une Feature Complexe
```
Je veux créer une feature de tableau de bord qui :
- Affiche des statistiques
- Permet le filtrage des données
- Supporte l'export en CSV
- Est responsive
```

### 5.3 Création d'un Hook
```
Je veux créer un hook qui :
- Gère l'état de chargement
- Gère les erreurs
- Permet la mise en cache
- Supporte la pagination
```

## 6. Règles Strictes

### 6.1 Architecture
- Suivre la structure de dossiers
- Respecter les conventions de nommage
- Maintenir la séparation des préoccupations
- Éviter les dépendances circulaires

### 6.2 Code
- Utiliser TypeScript strict
- Éviter les `any`
- Documenter avec JSDoc
- Gérer les erreurs

### 6.3 Performance
- Optimiser les rendus
- Utiliser la mémoisation
- Gérer les effets de bord
- Optimiser les imports

### 6.4 Tests
- Écrire des tests unitaires
- Tester les cas limites
- Vérifier l'accessibilité
- Tester la performance

## 7. Conclusion
Ces instructions doivent être suivies strictement pour maintenir la qualité et la cohérence du code. L'IA doit toujours vérifier sa propre implémentation et s'assurer que toutes les règles sont respectées avant de considérer le développement comme terminé. 