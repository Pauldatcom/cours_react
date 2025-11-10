# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


what i have to do, exercice with react using vite. 

Vous avez pour les deux exercices sur les leds un modèle pour démarrer ce tp :

App.jsx
LedPanel.jsx
Mettre en place un panneau de 3 LEDs (rouge, jaune, vert) dont l'état actif change selon des commandes. L'interface doit permettre de passer à la LED suivante, précédente ou de réinitialiser l'affichage.

Contraintes:

Composants fonctionnels React
Props pour transmettre l'état actif au composant d'affichage
useReducer pour gérer un état avec transitions (plutôt qu'un simple useState), on a plus d'algorithmique.
TailwindCSS pour la mise en forme des LEDs (couleurs, transitions, animations)
Logique de cycle des états - récupérez les sources pour ne pas perdre de temps avec le design pour l'instant.
Les fonctionnalités de vos boutons

NEXT : rouge → jaune → vert → rouge
PREV : rouge → vert → jaune → rouge
RESET : retour au rouge
Organisation des composants
Vous allez créer deux composants: App et LedPanel.

Composant principal (App) :

Initialise un état active = "red" via useReducer
Fournit des boutons permettant d'envoyer des actions au reducer
Transmet la valeur active au composant d'affichage
Composant d'affichage (LedPanel) :

Reçoit active comme prop
Définit une liste de LEDs (chaque LED = couleur + classe CSS)
Applique un style différent à la LED dont la couleur correspond à active :
LED active : taille légèrement augmentée + opacité forte + ombre LEDs inactives : opacité réduite

La partie UI:

Un panneau visuel clair avec une LED active bien mise en évidence Des transitions fluides entre les états grâce aux classes Tailwind

