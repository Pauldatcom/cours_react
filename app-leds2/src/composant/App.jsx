import React, { useReducer, useState, useEffect, useRef } from 'react'
import LedPanel from './ledPannels.jsx'
import ButtonWithHOCDemo from './ButtonWithHOC.jsx'
import HOCPracticeDemo from './hocPractice.jsx'
import { withClickCounter, withLogger } from './hocs.jsx'

const LED_ORDER = ['red', 'yellow', 'green']

const initialState = {
  active: 'red'
}

function reducer(state, action) {
  switch (action.type) {
    case 'NEXT':
      const currentIndex = LED_ORDER.indexOf(state.active)
      const nextIndex = (currentIndex + 1) % LED_ORDER.length
      return { ...state, active: LED_ORDER[nextIndex] }

    case 'PREV':
      // Cycle backward: red → green → yellow → red
      const prevIndex = LED_ORDER.indexOf(state.active)
      const newIndex = prevIndex === 0 ? LED_ORDER.length - 1 : prevIndex - 1
      return { ...state, active: LED_ORDER[newIndex] }

    case 'RESET':
      return { ...state, active: 'red' }

    default:
      return state
  }
}

// Base button component for HOC demonstration
function BaseControlButton({ children, onClick, clickCount, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium ${className}`}
    >
      {children}
      {/* Show click count if provided by HOC */}
      {clickCount !== undefined && clickCount > 0 && (
        <span className="ml-2 text-xs opacity-60">({clickCount})</span>
      )}
    </button>
  )
}

// Enhanced buttons using HOCs
// withLogger wraps withClickCounter - order matters!
const EnhancedControlButton = withLogger(
  withClickCounter(BaseControlButton),
  'ControlButton'
)

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const [changeCount, setChangeCount] = useState(0)
  const [isBlueLedMounted, setIsBlueLedMounted] = useState(true)
  const [storedCounter, setStoredCounter] = useState(0)
  const [showPracticeArea, setShowPracticeArea] = useState(false)
  
  // useRef to track previous active LED to detect changes
  const prevActiveRef = useRef(state.active)
  
  useEffect(() => {
    // Check if the active LED has changed
    if (prevActiveRef.current !== state.active) {
      // Only increment if blue LED is mounted
      if (isBlueLedMounted) {
        setChangeCount((prev) => prev + 1)
      }
      // Update the ref to current active LED
      prevActiveRef.current = state.active
    }
  }, [state.active, isBlueLedMounted])
  
  const handleUnmount = () => {
    setStoredCounter(changeCount)
    setIsBlueLedMounted(false)
  }
  
  const handleMount = () => {
    setIsBlueLedMounted(true)
    setChangeCount(storedCounter)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 py-8">
      <div className="space-y-8 max-w-4xl w-full px-4">
        {/* Practice Area Toggle */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setShowPracticeArea(!showPracticeArea)}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200 font-medium"
          >
            {showPracticeArea ? 'Hide' : 'Show'} Practice Area
          </button>
        </div>

        {/* HOC Practice Area - For Your Exercises */}
        {showPracticeArea && (
          <div className="mb-8">
            <HOCPracticeDemo />
          </div>
        )}

        {/* HOC Demo Section - Educational Example */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            Higher-Order Component (HOC) Pattern Demo
          </h2>
          <p className="text-center text-gray-400 mb-4 text-sm">
            Open browser console to see HOC logging in action
          </p>
          <ButtonWithHOCDemo />
        </div>

        {/* LED Panel Section */}
        <LedPanel 
          active={state.active}
          isBlueLedMounted={isBlueLedMounted}
          storedCounter={storedCounter}
          onUnmount={handleUnmount}
          onMount={handleMount}
        />

        {/* Control Buttons - Using HOCs */}
        <div className="flex gap-4 justify-center">
          <EnhancedControlButton
            onClick={() => dispatch({ type: 'PREV' })}
          >
            PREV
          </EnhancedControlButton>
          <EnhancedControlButton
            onClick={() => dispatch({ type: 'RESET' })}
          >
            RESET
          </EnhancedControlButton>
          <EnhancedControlButton
            onClick={() => dispatch({ type: 'NEXT' })}
          >
            NEXT
          </EnhancedControlButton>
        </div>
      </div>
    </div>
  )
}

export default App
