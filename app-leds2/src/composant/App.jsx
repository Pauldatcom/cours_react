import React, { useReducer, useState, useEffect, useRef } from 'react'
import LedPanel from './ledPannels.jsx'

const LED_ORDER = ['red', 'yellow', 'green']

const initialState = {
  active: 'red'
}

function reducer(state, action) {
  switch (action.type) {
    case 'NEXT':
      const currentIndex = LED_ORDER.indexOf(state.active)
      const nextIndex = (currentIndex + 1) % LED_ORDER.length
      return { active: LED_ORDER[nextIndex] }

    case 'PREV':
      // Cycle backward: red → green → yellow → red
      const prevIndex = LED_ORDER.indexOf(state.active)
      const newIndex = prevIndex === 0 ? LED_ORDER.length - 1 : prevIndex - 1
      return { active: LED_ORDER[newIndex] }

    case 'RESET':
      return { active: 'red' }

    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const [changeCount, setChangeCount] = useState(0)
  const [isBlueLedMounted, setIsBlueLedMounted] = useState(true)
  const [storedCounter, setStoredCounter] = useState(0)
  
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="space-y-8">
        {/* Pass state and handlers to the LedPanel component */}
        <LedPanel 
          active={state.active}
          isBlueLedMounted={isBlueLedMounted}
          storedCounter={storedCounter}
          onUnmount={handleUnmount}
          onMount={handleMount}
        />

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => dispatch({ type: 'PREV' })}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            PREV
          </button>
          <button
            onClick={() => dispatch({ type: 'RESET' })}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            RESET
          </button>
          <button
            onClick={() => dispatch({ type: 'NEXT' })}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
