# HOC Practice Exercises

Practice exercises to master the Higher-Order Component pattern. Work through these progressively.

---

## 🟢 BEGINNER EXERCISES

### Exercise 1: Create `withHover`
**Goal:** Build your first HOC from scratch

Create a HOC that adds hover state tracking to any component.

**Requirements:**
- Track when the component is being hovered
- Pass `isHovered` boolean prop to wrapped component
- Pass `onMouseEnter` and `onMouseLeave` handlers

**Test it:** Apply to a button and change its color when hovered.

**Hint:** Use `useState` to track hover state, and `onMouseEnter`/`onMouseLeave` events.

---

### Exercise 2: Create `withLoading`
**Goal:** Add loading state management

Create a HOC that manages a loading state and provides a `setLoading` function.

**Requirements:**
- Track `isLoading` boolean state
- Pass `isLoading` and `setLoading` to wrapped component
- Useful for async operations

**Test it:** Create a button that shows "Loading..." when clicked, then stops after 2 seconds.

---

### Exercise 3: Create `withToggle`
**Goal:** Add toggle functionality

Create a HOC that provides toggle functionality (on/off state).

**Requirements:**
- Track boolean `isOn` state
- Provide `toggle` function
- Provide `setIsOn` function
- Pass all three to wrapped component

**Test it:** Create a toggle button that switches between "ON" and "OFF".

---

## 🟡 INTERMEDIATE EXERCISES

### Exercise 4: Create `withLocalStorage`
**Goal:** Persist component state to localStorage

Create a HOC that syncs a specific prop value to localStorage.

**Requirements:**
- Accept a `storageKey` parameter
- Save a prop value (e.g., `value` or `count`) to localStorage
- Load from localStorage on mount
- Update localStorage when value changes

**Test it:** Apply to a counter component - refresh the page and see the count persists!

**Hint:** Use `useEffect` to sync with localStorage.

---

### Exercise 5: Create `withDebounce`
**Goal:** Debounce function calls

Create a HOC that debounces a specific prop function (like `onClick` or `onChange`).

**Requirements:**
- Accept a `delay` parameter (default 300ms)
- Debounce the `onClick` handler
- Only call the original function after delay has passed

**Test it:** Apply to a button - rapid clicks should only trigger after you stop clicking.

**Hint:** Use `setTimeout` and `clearTimeout` in the handler.

---

### Exercise 6: Create `withErrorBoundary`
**Goal:** Add error handling

Create a HOC that catches errors and displays a fallback UI.

**Requirements:**
- Catch errors in the wrapped component
- Display error message if error occurs
- Provide `hasError` and `error` props
- Provide `resetError` function to clear error

**Test it:** Create a component that throws an error, wrap it with this HOC.

**Hint:** Use `try-catch` or React's error boundary pattern.

---

### Exercise 7: Enhance `withLogger` - Add Performance Tracking
**Goal:** Extend existing HOC

Modify `withLogger` to also track render performance.

**Requirements:**
- Log how long each render takes
- Use `performance.now()` or `Date.now()`
- Log render time in console

**Test it:** Apply to a component and watch console for render times.

---

## 🟠 ADVANCED EXERCISES

### Exercise 8: Create `withAuth`
**Goal:** Add authentication state

Create a HOC that provides authentication context.

**Requirements:**
- Track `isAuthenticated` state
- Provide `login` and `logout` functions
- Optionally check localStorage for existing auth
- Pass `user` object, `isAuthenticated`, `login`, `logout` to component

**Test it:** Create a component that shows different content for logged in/out users.

---

### Exercise 9: Create `withTheme`
**Goal:** Add theme switching

Create a HOC that manages theme (light/dark mode).

**Requirements:**
- Track current theme (`'light'` or `'dark'`)
- Provide `theme` and `toggleTheme` function
- Apply theme classes to wrapper div
- Persist theme choice to localStorage

**Test it:** Apply to your entire app and switch themes.

---

### Exercise 10: Create `withFormValidation`
**Goal:** Add form validation logic

Create a HOC that validates form inputs.

**Requirements:**
- Accept validation rules as parameter
- Track `errors` object
- Provide `validate` function
- Provide `isValid` boolean
- Provide `resetValidation` function

**Test it:** Create a form with email and password fields, validate them.

---

### Exercise 11: Compose HOCs - Create Super Button
**Goal:** Master HOC composition

Create a button component that uses 3+ HOCs together.

**Requirements:**
- Use `withClickCounter`
- Use `withHover` (from Exercise 1)
- Use `withAnimation`
- Use `withLogger`
- Make sure all props are passed correctly

**Test it:** Your button should count clicks, show hover state, animate on mount, and log to console.

---

### Exercise 12: Apply HOC to LedPanel
**Goal:** Apply HOC to existing component

Enhance your `LedPanel` component with a HOC.

**Requirements:**
- Choose any HOC (or create a new one)
- Apply it to `LedPanel`
- Make sure it doesn't break existing functionality
- Add useful new behavior

**Ideas:**
- Add click tracking to LED circles
- Add animation when LEDs change
- Add logging for LED state changes
- Add hover effects

---

## 🔴 EXPERT CHALLENGES

### Challenge 1: Create `withConditionalRender`
**Goal:** Conditional rendering HOC

Create a HOC that conditionally renders the component based on a condition.

**Requirements:**
- Accept a `condition` function or boolean
- Accept optional `fallback` component
- Only render wrapped component if condition is true
- Render fallback (or nothing) if false

**Test it:** Show/hide components based on user role or feature flags.

---

### Challenge 2: Create `withDataFetching`
**Goal:** Add data fetching logic

Create a HOC that handles async data fetching.

**Requirements:**
- Accept `fetchFunction` and `dependencies` array
- Track `data`, `loading`, `error` states
- Automatically refetch when dependencies change
- Provide `refetch` function

**Test it:** Fetch data from an API and display it.

---

### Challenge 3: Create HOC Factory
**Goal:** Create configurable HOC

Create a HOC factory function that returns a configured HOC.

**Requirements:**
- Function that accepts configuration
- Returns a HOC based on that config
- Example: `withConfigurableLogger({ prefix: 'MY_APP', level: 'debug' })`

**Test it:** Create multiple configured HOCs from the same factory.

---

## 📝 PRACTICE TIPS

1. **Start Simple:** Begin with Exercise 1, don't jump ahead
2. **Test Each One:** Actually use the HOC before moving on
3. **Read the Code:** Study the existing HOCs in `hocs.jsx` for patterns
4. **Console Log:** Use console.log to debug and understand flow
5. **Compose Gradually:** Try combining 2 HOCs, then 3, then more
6. **Break Things:** Intentionally break code to understand how it works
7. **Refactor:** Once it works, try to make it cleaner/better

---

## ✅ CHECKLIST FOR EACH EXERCISE

Before moving on, make sure:
- [ ] HOC follows the pattern: `function withX(WrappedComponent) { return function EnhancedComponent(props) { ... } }`
- [ ] Original props are passed through with `{...props}`
- [ ] New props are added alongside original props
- [ ] HOC is tested with at least one component
- [ ] Code is commented explaining what it does
- [ ] No console errors
- [ ] HOC can be composed with other HOCs

---

## 🎯 BONUS: Real-World Scenarios

Try applying HOCs to solve these problems:

1. **Analytics Tracking:** Create `withAnalytics` that tracks user interactions
2. **Permission Check:** Create `withPermission` that checks user permissions
3. **Rate Limiting:** Create `withRateLimit` that limits function calls
4. **Undo/Redo:** Create `withHistory` that provides undo/redo functionality
5. **Auto-save:** Create `withAutoSave` that saves form data periodically

---

**Remember:** The goal isn't to finish all exercises, but to understand the pattern deeply. Take your time, experiment, and have fun breaking things!

