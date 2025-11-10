# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Project Description

This project is an educational React application focused on learning and practicing the **Higher-Order Component (HOC)** pattern. It includes a working LED panel demo with HOC-enhanced controls, plus a comprehensive set of HOC practice exercises.

## What's Included

### 1. LED Panel Demo (`src/composant/App.jsx` & `ledPannels.jsx`)
- Interactive LED panel with red, yellow, and green LEDs
- Blue LED that can be mounted/unmounted
- State management using `useReducer` and `useState`
- Control buttons enhanced with HOCs (click counting and logging)

### 2. HOC Examples (`src/composant/hocs.jsx`)
Educational HOC implementations demonstrating core patterns:
- **`withClickCounter`** - Adds click counting functionality
- **`withLogger`** - Adds lifecycle and prop change logging
- **`withAnimation`** - Adds fade-in animation on mount
- **`withMountTracking`** - Tracks mount/unmount events

### 3. HOC Practice Exercises (`src/composant/hocPractice.jsx`)
Five completed beginner exercises:

#### ✅ Exercise 1: `withHover`
- Tracks hover state
- Passes `isHovered`, `onMouseEnter`, `onMouseLeave` to wrapped component
- Demonstrates event interception pattern

#### ✅ Exercise 2: `withLoading`
- Manages loading state
- Provides `isLoading` and `setLoading` function
- Useful for async operations

#### ✅ Exercise 3: `withToggle`
- Manages toggle state (on/off)
- Provides `isOn`, `toggle`, and `setIsOn`
- Demonstrates state + convenience functions

#### ✅ Exercise 4: `withLocalStorage`
- Syncs component state with browser localStorage
- Persists data across page refreshes
- Demonstrates HOC factory pattern and side effects with `useEffect`

#### ✅ Exercise 5: `withDebounce`
- Debounces function calls (delays execution)
- Uses `useRef` and `setTimeout` for timer management
- Demonstrates function manipulation and cleanup

### 4. Practice Exercises Guide (`HOC_PRACTICE_EXERCISES.md`)
Comprehensive guide with:
- 12+ exercises from beginner to expert level
- Clear requirements and hints for each exercise
- Real-world use cases
- Tips and checklists

## Key Concepts Learned

### HOC Pattern
- Function that takes a component and returns an enhanced component
- Allows code reuse and separation of concerns
- Can intercept events, provide state, add side effects, and more

### React Hooks Used
- `useState` - State management in HOCs
- `useEffect` - Side effects (localStorage, cleanup)
- `useRef` - Storing mutable values (timers, etc.)

### Advanced Patterns
- **HOC Factory** - HOCs that accept configuration parameters
- **HOC Composition** - Combining multiple HOCs together
- **Prop Forwarding** - Passing through original props while adding new ones
- **Event Interception** - Wrapping event handlers while preserving original behavior

## How to Use

1. **Run the app**: `npm run dev`
2. **View HOC demos**: The main page shows working HOC examples
3. **Practice exercises**: Click "Show Practice Area" to see interactive HOC exercises
4. **Read the guide**: Check `HOC_PRACTICE_EXERCISES.md` for more exercises to try

## File Structure

```
src/composant/
├── App.jsx              # Main app with LED panel and HOC demos
├── ledPannels.jsx        # LED panel component
├── hocs.jsx             # Educational HOC examples
├── hocPractice.jsx      # HOC practice exercises (5 completed)
└── ButtonWithHOC.jsx    # Demo component showing HOC usage

HOC_PRACTICE_EXERCISES.md # Comprehensive exercise guide
```

## Technologies Used

- **React** - Component library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **ESLint** - Code linting

## Learning Outcomes

After completing these exercises, you understand:
- How to create and use Higher-Order Components
- How to compose multiple HOCs together
- How to manage state and side effects in HOCs
- How to intercept and enhance event handlers
- How to create reusable, composable React patterns