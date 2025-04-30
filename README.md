# Bibliothèque de Composants pour les Détails de Transaction

## Auteur

### Informations Personnelles
- **Nom complet** : KEMKENG NGOUZA KEDI JOEL
- **Nom court** : Joel Kemkeng
- **Entreprise** : HasDigit (@HasDigit)

### Contact
- **Email personnel** : kedikemkeng@gmail.com
- **Email professionnel** : kedikemkenh@hasdigit.com
- **Téléphone** : +33 7 51 54 27 74
- **Téléphone alternatif** : +237659403009

### Réseaux Sociaux
- **YouTube** : [HasDigit](https://youtube.com/@hasdigit)
- **LinkedIn** : [Joel Kemkeng](https://linkedin.com/in/joelkemkeng)

## 📋 Table des Matières
1. [Introduction](#introduction)
2. [Prérequis](#prérequis)
3. [Installation](#installation)
4. [Structure du Projet](#structure-du-projet)
5. [Guide d'Utilisation](#guide-dutilisation)
6. [Guide de Développement](#guide-de-développement)
7. [Règles et Conventions](#règles-et-conventions)
8. [Dépannage](#dépannage)

## Introduction
Ce projet est une bibliothèque de composants React pour afficher les détails des transactions de portefeuille. Il est conçu pour être facile à utiliser et à maintenir, avec une architecture modulaire et des composants réutilisables.

## Prérequis
Avant de commencer, assurez-vous d'avoir installé :

1. **Node.js** (version 18 ou supérieure)
   - Pour vérifier si Node.js est installé, ouvrez un terminal et tapez :
     ```bash
     node --version
     ```
   - Si Node.js n'est pas installé, téléchargez-le sur [nodejs.org](https://nodejs.org)

2. **Git** (pour la gestion de version)
   - Pour vérifier si Git est installé, tapez dans le terminal :
     ```bash
     git --version
     ```
   - Si Git n'est pas installé, téléchargez-le sur [git-scm.com](https://git-scm.com)

3. **Un éditeur de code**
   - Nous recommandons [Visual Studio Code](https://code.visualstudio.com)
   - Extensions recommandées pour VS Code :
     - ESLint
     - Prettier
     - TypeScript and JavaScript Language Features

## Installation

### 1. Cloner le Projet
1. Ouvrez votre terminal
2. Naviguez vers le dossier où vous voulez installer le projet
3. Exécutez la commande :
   ```bash
   git clone [URL_DU_REPO]
   cd detail-transactions
   ```

### 2. Installer les Dépendances
1. Dans le terminal, toujours dans le dossier du projet, exécutez :
   ```bash
   npm install
   ```
   Cette commande peut prendre quelques minutes. Elle installe toutes les bibliothèques nécessaires.

### 3. Démarrer le Projet
1. Pour lancer le serveur de développement :
   ```bash
   npm run dev
   ```
2. Ouvrez votre navigateur et allez à `http://localhost:3000`

## Structure du Projet
```
src/
├── components/          # Composants réutilisables
│   └── wallet/
│       └── detail-transaction/
├── features/           # Fonctionnalités spécifiques
│   └── wallet/
│       └── detail-transaction/
├── hooks/             # Hooks personnalisés
│   └── wallet/
│       └── detail-transaction/
├── layouts/           # Mises en page
│   └── wallet/
│       └── detail-transaction/
├── pages/             # Pages de l'application
│   └── wallet/
│       └── detail-transaction/
├── styles/            # Styles globaux
├── types/             # Types TypeScript
│   └── wallet/
│       └── detail-transaction/
└── constants/         # Constantes et configurations
```

## Guide d'Utilisation

### Pour les Débutants

#### 1. Comprendre les Composants
- Chaque composant est dans son propre fichier
- Les composants sont organisés par fonctionnalité
- Chaque composant a un fichier de types associé

#### 2. Navigation dans le Projet
- Utilisez VS Code pour explorer les fichiers
- Le panneau de gauche montre la structure des dossiers
- Double-cliquez sur un fichier pour l'ouvrir

#### 3. Tester les Composants
- Lancez le projet avec `npm run dev`
- Ouvrez `http://localhost:3000` dans votre navigateur
- Naviguez dans l'interface pour voir les composants en action

## Guide de Développement

### Pour Ajouter un Nouveau Composant

#### 1. Créer la Structure
1. Identifiez la catégorie du composant (component, feature, etc.)
2. Créez un nouveau dossier dans le bon répertoire
3. Créez les fichiers nécessaires :
   ```
   MonNouveauComposant/
   ├── index.ts
   ├── MonNouveauComposant.tsx
   └── types.ts
   ```

#### 2. Définir les Types
1. Dans `types.ts`, définissez les interfaces :
   ```typescript
   export interface MonNouveauComposantProps {
     // Propriétés du composant
   }
   ```

#### 3. Créer le Composant
1. Dans `MonNouveauComposant.tsx` :
   ```typescript
   import React from 'react';
   import { MonNouveauComposantProps } from './types';

   export const MonNouveauComposant: React.FC<MonNouveauComposantProps> = (props) => {
     // Implémentation du composant
   };
   ```

#### 4. Exporter le Composant
1. Dans `index.ts` :
   ```typescript
   export * from './MonNouveauComposant';
   ```

## Règles et Conventions

### 1. Nommage
- Utilisez PascalCase pour les composants : `MonComposant.tsx`
- Utilisez camelCase pour les fonctions et variables
- Utilisez kebab-case pour les noms de fichiers CSS

### 2. Structure des Fichiers
- Un composant par fichier
- Types dans un fichier séparé
- Styles dans un fichier séparé

### 3. Documentation
- Ajoutez des commentaires JSDoc pour chaque composant
- Documentez les props avec des exemples
- Incluez des tests unitaires

### 4. Code Style
- Utilisez TypeScript strict
- Suivez les règles ESLint
- Formatez avec Prettier

## Dépannage

### Problèmes Courants

#### 1. Erreurs d'Installation
```bash
# Si npm install échoue
npm cache clean --force
npm install
```

#### 2. Erreurs de Compilation
```bash
# Nettoyer le cache TypeScript
rm -rf node_modules/.cache/typescript
```

#### 3. Problèmes de Style
```bash
# Vérifier les erreurs ESLint
npm run lint
```

### Support
Pour toute question ou problème :
1. Consultez la documentation
2. Vérifiez les issues GitHub
3. Contactez l'équipe de développement

## Contribution
1. Créez une branche pour votre fonctionnalité
2. Suivez les conventions de code
3. Ajoutez des tests
4. Soumettez une pull request

## Licence
© 2024 Joel Kemkeng. Tous droits réservés.
