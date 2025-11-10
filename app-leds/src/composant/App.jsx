import React, { useReducer } from 'react'
import LedPanel from './ledPannels.jsx'

const LED_ORDER = ['red', 'yellow', 'green']

// Initial state: start with red LED active
const initialState = {
  active: 'red'
}

/**
 * Reducer function to manage LED state transitions
 * Handles NEXT, PREV, and RESET actions
 *
 * @param {Object} state - Current state with active LED color
 * @param {Object} action - Action object with type property
 * @returns {Object} New state with updated active LED
 */
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

/**
 * App Component
 * Main component that manages LED state using useReducer
 * Provides buttons to control LED transitions
 */
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="space-y-8">
        {/* Pass the active LED color to the LedPanel component */}
        <LedPanel active={state.active} />

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
