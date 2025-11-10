# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Decription
Dans ce TP on va ajouter un useEffect pour réviser cette notion.

Une LED supplémentaire au-dessus (bleue), La possibilité de la démonter et de la remonter, Un compteur de changements d'état affiché uniquement quand la LED est démontée

Hooks utilisés :

useReducer pour gérer l'état de la LED active (cycle rouge → jaune → vert)

useState pour : Suivre le nombre de changements d'état Gérer si la LED du haut est montée ou démontée Stocker la valeur du compteur au moment du démontage

useEffect pour détecter et compter automatiquement les changements d'état

Props pour transmettre l'état et les actions au composant d'affichage

Conditionnel rendu afin d'afficher :

LED bleue + bouton "Démontage" lorsqu'elle est montée Valeur mémorisée + bouton "Remontage" lorsqu'elle est démontée

Transitions visuelles via Tailwind pour conserver une interface claire et lisible
Organisation des composants
Identique à l'autre TP on va créer deux composants App et LedPanel.

Composant principal (App) :

Gère l'état des LEDs principales via useReducer
Incrémente automatiquement un compteur à chaque changement d'état.
Contrôle le montage/démontage de la LED bleue + mémorisation de la valeur du compteur
Vous devez afficher le résultat du compteur une fois le composant démonté dans la page

Composant d'affichage (LedPanel) :

Affiche les 3 LEDs principales avec mise en évidence de la LED active
Gère l'affichage de la LED bleue selon deux modes :
Montée : LED + bouton "Démontage" Démontée : affichage du compteur + bouton "Remontage"

Mise en forme cohérente via Tailwind (taille, opacité, ombre, transitions), récupérez les design déjà écrit.

Résultat attendu :

Un panneau interactif permettant de suivre l'activité du système grâce au compteur
Un montage/démontage propre et visuel de la LED supplémentaire