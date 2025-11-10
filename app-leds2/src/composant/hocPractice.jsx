import React, { useState, useEffect, useRef } from 'react'

/**
 * HOC PRACTICE FILE
 * 
 * Use this file to practice creating HOCs.
 * Uncomment and implement each exercise as you work through them.
 * 
 * Instructions:
 * 1. Read the exercise in HOC_PRACTICE_EXERCISES.md
 * 2. Implement the HOC below
 * 3. Test it with the test component
 * 4. Move on to the next exercise
 */

// ============================================================================
// EXERCISE 1: withHover
// ============================================================================
/**
 * HOC that adds hover state tracking to any component
 * 
 * Pattern breakdown:
 * 1. Function takes WrappedComponent as parameter
 * 2. Returns a new component function
 * 3. New component uses useState to track hover state
 * 4. Creates handlers that update state AND call original handlers if they exist
 * 5. Passes all props plus new hover-related props to wrapped component
 */
export function withHover(WrappedComponent) {
  // Return a new component (this is the HOC pattern)
  return function HoverComponent(props) {
    // Track whether component is currently being hovered
    const [isHovered, setIsHovered] = useState(false)

    // Handler for when mouse enters the component
    const handleMouseEnter = (event) => {
      setIsHovered(true)
      // Call original onMouseEnter if it exists (preserve original behavior)
      if (props.onMouseEnter) {
        props.onMouseEnter(event)
      }
    }

    // Handler for when mouse leaves the component
    const handleMouseLeave = (event) => {
      setIsHovered(false)
      // Call original onMouseLeave if it exists (preserve original behavior)
      if (props.onMouseLeave) {
        props.onMouseLeave(event)
      }
    }

    // Pass all original props, plus new hover-related props
    return (
      <WrappedComponent
        {...props}
        isHovered={isHovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    )
  }
}

// Test component for Exercise 1
function TestButton({ isHovered, onMouseEnter, onMouseLeave, children }) {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isHovered ? 'bg-blue-600' : 'bg-gray-600'
      }`}
    >
      {children} {isHovered && '(Hovered!)'}
    </button>
  )
}
const HoverButton = withHover(TestButton)

// ============================================================================
// EXERCISE 2: withLoading
// ============================================================================
/**
 * HOC that adds loading state management to any component
 * 
 * This is simpler than withHover because we're not intercepting events.
 * We're just providing state management utilities that the component can use.
 * 
 * Pattern:
 * 1. Track isLoading state with useState
 * 2. Provide setLoading function to control the state
 * 3. Pass both to wrapped component so it can use them
 */
export function withLoading(WrappedComponent) {
  // Return a new component (this is the HOC pattern)
  return function LoadingComponent(props) {
    // Track loading state - starts as false (not loading)
    const [isLoading, setIsLoading] = useState(false)

    // Pass all original props, plus new loading-related props
    return (
      <WrappedComponent
        {...props}
        isLoading={isLoading}
        setLoading={setIsLoading}
      />
    )
  }
}

// Test component for Exercise 2
function TestAsyncButton({ isLoading, setLoading, children }) {
  const handleClick = async () => {
    // Set loading to true when operation starts
    setLoading(true)
    // Simulate async operation (like API call, file upload, etc.)
    await new Promise(resolve => setTimeout(resolve, 2000))
    // Set loading to false when operation completes
    setLoading(false)
  }
  
  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}
const AsyncButton = withLoading(TestAsyncButton)

// ============================================================================
// EXERCISE 3: withToggle
// ============================================================================
/**
 * HOC that adds toggle functionality (on/off state) to any component
 * 
 * This builds on withLoading by adding a convenience function (toggle).
 * It provides:
 * - isOn: current state (boolean)
 * - toggle: function to flip the state
 * - setIsOn: function to set state directly (for more control)
 * 
 * Pattern:
 * 1. Track isOn state with useState
 * 2. Create toggle function that flips the state
 * 3. Provide both toggle and setIsOn for flexibility
 */
export function withToggle(WrappedComponent) {
  // Return a new component (this is the HOC pattern)
  return function ToggleComponent(props) {
    // Track toggle state - starts as false (off)
    const [isOn, setIsOn] = useState(false)

    // Convenience function to flip the state
    const toggle = () => {
      setIsOn((prev) => !prev)
    }

    // Pass all original props, plus new toggle-related props
    return (
      <WrappedComponent
        {...props}
        isOn={isOn}
        toggle={toggle}
        setIsOn={setIsOn}
      />
    )
  }
}

// Test component for Exercise 3
function TestToggleButton({ isOn, toggle, children }) {
  return (
    <button
      onClick={toggle}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isOn ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'
      }`}
    >
      {children}: {isOn ? 'ON' : 'OFF'}
    </button>
  )
}
const ToggleButton = withToggle(TestToggleButton)

// ============================================================================
// EXERCISE 4: withLocalStorage
// ============================================================================
/**
 * HOC that syncs component state with browser localStorage
 * 
 * This is more advanced because it:
 * 1. Accepts a parameter (storageKey) - making it a "HOC factory"
 * 2. Uses useEffect to handle side effects (localStorage operations)
 * 3. Loads from localStorage on mount
 * 4. Saves to localStorage when value changes
 * 
 * Pattern:
 * 1. Function takes both component AND storageKey (HOC factory pattern)
 * 2. Load initial value from localStorage on mount
 * 3. Save to localStorage whenever value changes (useEffect with dependency)
 * 4. Handle errors gracefully (localStorage might be disabled)
 */
export function withLocalStorage(WrappedComponent, storageKey) {
  // Return a new component (this is the HOC pattern)
  return function LocalStorageComponent(props) {
    // Helper function to safely get value from localStorage
    const getStoredValue = () => {
      try {
        const item = window.localStorage.getItem(storageKey)
        // Parse the stored value, or return 0 as default
        return item ? JSON.parse(item) : 0
      } catch (error) {
        console.error('Error reading from localStorage:', error)
        return 0
      }
    }

    // Initialize state with value from localStorage (or default to 0)
    // Using lazy initializer function - only runs once on mount
    const [count, setCount] = useState(() => getStoredValue())

    // Save to localStorage whenever count changes
    useEffect(() => {
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(count))
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }
    }, [count, storageKey]) // Run whenever count or storageKey changes

    // Pass all original props, plus count and setCount
    return (
      <WrappedComponent
        {...props}
        count={count}
        setCount={setCount}
      />
    )
  }
}

// Test component for Exercise 4
function TestCounter({ count, setCount }) {
  return (
    <div className="space-y-2">
      <div className="text-2xl font-bold">Count: {count}</div>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
        >
          +
        </button>
      </div>
      <p className="text-sm text-gray-400">
        Refresh page - count should persist!
      </p>
    </div>
  )
}
const PersistentCounter = withLocalStorage(TestCounter, 'counter')

// ============================================================================
// EXERCISE 5: withDebounce
// ============================================================================
/**
 * HOC that debounces function calls (delays execution until after delay)
 * 
 * Debouncing means: wait for a pause in calls before executing.
 * If called again before delay expires, cancel previous call and start new timer.
 * 
 * This is useful for:
 * - Search inputs (wait until user stops typing)
 * - Button clicks (prevent rapid-fire clicks)
 * - Window resize events
 * 
 * Pattern:
 * 1. Use useRef to store timeout ID (persists across renders)
 * 2. Intercept onClick handler
 * 3. Clear existing timeout, set new one
 * 4. Clean up timeout on unmount
 */
export function withDebounce(WrappedComponent, delay = 300) {
  // Return a new component (this is the HOC pattern)
  return function DebouncedComponent(props) {
    // useRef to store timeout ID - persists across renders without causing re-renders
    const timeoutRef = useRef(null)

    // Debounced onClick handler
    const handleDebouncedClick = (event) => {
      // Clear any existing timeout (cancel previous call)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // Set new timeout - will call original onClick after delay
      timeoutRef.current = setTimeout(() => {
        // Call original onClick if it exists
        if (props.onClick) {
          console.log('Debounced onClick executed after', delay, 'ms delay')
          props.onClick(event)
        }
        // Clear the ref after execution
        timeoutRef.current = null
      }, delay)
    }

    // Clean up timeout on unmount (prevent memory leaks)
    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [])

    // Pass all original props, but replace onClick with debounced version
    return (
      <WrappedComponent
        {...props}
        onClick={handleDebouncedClick}
      />
    )
  }
}

// Test component for Exercise 5
function TestDebounceButton({ onClick, children }) {
  // Track how many times the button was actually clicked (not debounced)
  const [clickCount, setClickCount] = useState(0)
  
  // This handler runs immediately (not debounced)
  // The onClick from HOC is debounced, so this shows the difference
  const handleClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1
      console.log('Button clicked immediately (click #' + newCount + ')')
      return newCount
    })
    // Call the debounced onClick from HOC
    // This will be delayed by 500ms, and only fires if no more clicks happen
    if (onClick) {
      onClick()
    }
  }
  
  return (
    <div className="space-y-2">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
      >
        {children}
      </button>
      <p className="text-sm">Button clicks: {clickCount}</p>
      <p className="text-xs text-gray-400">
        Rapid click - the debounced onClick only fires after you stop clicking for 500ms
      </p>
      <p className="text-xs text-gray-500">
        (Check console to see the difference: immediate clicks vs debounced execution)
      </p>
    </div>
  )
}
const DebouncedButton = withDebounce(TestDebounceButton, 500)

// ============================================================================
// DEMO COMPONENT - Use this to test your HOCs
// ============================================================================
export function HOCPracticeDemo() {
  return (
    <div className="space-y-8 p-8 bg-gray-800 rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        HOC Practice Area
      </h2>
      
      <div className="space-y-6">
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="font-bold mb-2">Exercise 1: withHover ✅</h3>
          <p className="text-sm text-gray-400 mb-2">
            Hover over the button below to see the HOC in action!
          </p>
          <HoverButton>Hover Me</HoverButton>
          <p className="text-xs text-gray-500 mt-2">
            The button changes color and shows "(Hovered!)" when you hover over it.
            This is all handled by the withHover HOC!
          </p>
        </div>

        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="font-bold mb-2">Exercise 2: withLoading ✅</h3>
          <p className="text-sm text-gray-400 mb-2">
            Click the button below to see loading state management!
          </p>
          <AsyncButton>Click to Load</AsyncButton>
          <p className="text-xs text-gray-500 mt-2">
            The button shows "Loading..." for 2 seconds, then returns to normal.
            The HOC provides isLoading state and setLoading function automatically!
          </p>
        </div>

        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="font-bold mb-2">Exercise 3: withToggle ✅</h3>
          <p className="text-sm text-gray-400 mb-2">
            Click the button below to toggle between ON and OFF states!
          </p>
          <ToggleButton>Toggle</ToggleButton>
          <p className="text-xs text-gray-500 mt-2">
            Each click flips the state. The HOC provides isOn, toggle, and setIsOn functions!
          </p>
        </div>

        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="font-bold mb-2">Exercise 4: withLocalStorage ✅</h3>
          <p className="text-sm text-gray-400 mb-2">
            Change the count, then refresh the page - it persists!
          </p>
          <PersistentCounter />
          <p className="text-xs text-gray-500 mt-2">
            The count is saved to browser localStorage automatically. 
            Try changing it, refreshing the page, and see it persist!
          </p>
        </div>

        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="font-bold mb-2">Exercise 5: withDebounce ✅</h3>
          <p className="text-sm text-gray-400 mb-2">
            Rapidly click the button below - the debounced onClick only fires after you stop!
          </p>
          <DebouncedButton>Click Rapidly</DebouncedButton>
          <p className="text-xs text-gray-500 mt-2">
            Watch the console: you'll see immediate clicks logged, but the debounced onClick 
            only executes 500ms after you stop clicking. This prevents rapid-fire function calls!
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-900/30 rounded-lg border border-yellow-600">
        <p className="text-sm">
          <strong>Tip:</strong> Work through exercises in order. Each builds on concepts from previous ones.
          Read the full exercise descriptions in <code>HOC_PRACTICE_EXERCISES.md</code>
        </p>
      </div>
    </div>
  )
}

export default HOCPracticeDemo

