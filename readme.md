# Cours React – Exercices et Projets

Ce dépôt contient plusieurs exercices et projets pratiques pour apprendre les **fondamentaux de React** et des concepts avancés.

## 📁 Structure du Projet

### 📂 `introduction/`
Exercices de base avec React via CDN (HTML + Babel) :
- **useState** → gestion des états simples (compteurs, formulaires, etc.)
- **useEffect** → effets de bord, timers, fetch de données, simulations de chargement
- **useReducer** → gestion d'un état complexe (ex: panier, todo list)
- **props & state** → communication entre composants
- **mini-projets** → ex: tableau de températures, compteur interactif, gestion de panier

**Environnement :** HTML avec React & ReactDOM via CDN, Babel pour JSX, TailwindCSS pour le style

### 📂 `app-leds/`
**Premier projet avec Vite** - Panneau de LEDs avec gestion d'état

**Technologies :** React + Vite + TailwindCSS

**Fonctionnalités :**
- Panneau de 3 LEDs (rouge, jaune, vert) avec une LED active
- Gestion d'état avec `useReducer` (actions NEXT, PREV, RESET)
- Transitions fluides avec TailwindCSS
- Composants fonctionnels : `App.jsx` et `LedPanel.jsx`

**Concepts appris :**
- Configuration d'un projet React avec Vite
- Utilisation de `useReducer` pour gérer des transitions d'état complexes
- Communication entre composants via props
- Styling avec TailwindCSS (transitions, animations, responsive)

**Commandes :**
```bash
cd app-leds
npm install
npm run dev
```

### 📂 `app-leds2/`
**Projet avancé** - Panneau de LEDs amélioré + **Higher-Order Components (HOC)**

**Technologies :** React + Vite + TailwindCSS

**Fonctionnalités principales :**

#### 1. Panneau de LEDs amélioré
- LEDs principales (rouge, jaune, vert) avec cycle NEXT/PREV/RESET
- LED bleue optionnelle avec montage/démontage
- Compteur de changements d'état préservé lors du démontage
- Utilisation de `useState`, `useReducer`, `useEffect`, `useRef`

#### 2. Higher-Order Components (HOC)
**HOCs éducatifs implémentés :**
- `withClickCounter` - Compte les clics sur un composant
- `withLogger` - Logging des événements de cycle de vie et changements de props
- `withAnimation` - Animation fade-in au montage
- `withMountTracking` - Suivi des événements mount/unmount

**HOCs pratiques (5 exercices complétés) :**
- ✅ `withHover` - Suivi de l'état de survol
- ✅ `withLoading` - Gestion de l'état de chargement
- ✅ `withToggle` - Fonctionnalité on/off
- ✅ `withLocalStorage` - Synchronisation avec localStorage (persistance)
- ✅ `withDebounce` - Debounce des appels de fonction

**Concepts avancés appris :**
- Pattern HOC (Higher-Order Component)
- Composition de HOCs multiples
- HOC Factory (HOCs paramétrés)
- Interception d'événements
- Gestion des effets de bord avec `useEffect`
- Utilisation de `useRef` pour les valeurs mutables

**Fichiers clés :**
- `src/composant/App.jsx` - Application principale avec démo HOC
- `src/composant/ledPannels.jsx` - Composant LED panel amélioré
- `src/composant/hocs.jsx` - HOCs éducatifs
- `src/composant/hocPractice.jsx` - Exercices pratiques HOC (5 complétés)
- `src/composant/ButtonWithHOC.jsx` - Démo d'utilisation des HOCs
- `HOC_PRACTICE_EXERCISES.md` - Guide complet avec 12+ exercices (débutant à expert)

**Commandes :**
```bash
cd app-leds2
npm install
npm run dev
```

### 📂 `app-zustand/`
**Gestion d'état globale avec Zustand**

**Technologies :** React + Vite + Zustand

**Fonctionnalités :**
- **Counter Store** : compteur avec `increment`, `decrement`, `reset`, `incrementBy`
- **Bear Store** : exemple de store simple avec `increasePopulation` et `removeAllBears`

**Concepts appris :**
- Gestion d'état globale avec Zustand (alternative à Redux)
- Création de stores avec `create()`
- Utilisation de stores dans les composants avec hooks
- Pattern de state management moderne et léger

**Structure :**
```
src/store/
├── counterStore.js  # Store pour le compteur
└── bearStore.js     # Store exemple (bears)
```

**Commandes :**
```bash
cd app-zustand
npm install
npm run dev
```

## 🎯 Progression d'Apprentissage

1. **Introduction** → Bases de React (hooks, props, state) via HTML
2. **app-leds** → Premier projet Vite avec `useReducer`
3. **app-leds2** → Concepts avancés : HOCs, composition, effets de bord
4. **app-zustand** → Gestion d'état globale moderne

## 🛠️ Technologies Utilisées

- **React** - Bibliothèque UI
- **Vite** - Build tool et dev server (pour les projets app-*)
- **TailwindCSS** - Framework CSS utilitaire
- **Zustand** - Gestion d'état globale légère
- **ESLint** - Linting du code

## 📚 Ressources

- Documentation React : https://react.dev
- Documentation Zustand : https://zustand-demo.pmnd.rs
- Guide HOC : Voir `app-leds2/HOC_PRACTICE_EXERCISES.md`

## 🎓 Objectifs Pédagogiques

- Comprendre les hooks React fondamentaux (`useState`, `useEffect`, `useReducer`, `useRef`)
- Maîtriser la communication entre composants (props, state lifting)
- Apprendre les patterns avancés (HOC, composition)
- Découvrir la gestion d'état globale (Zustand)
- Pratiquer avec des projets concrets et progressifs
