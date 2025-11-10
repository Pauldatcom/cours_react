import React from 'react'
import { withClickCounter, withLogger, withAnimation } from './hocs.jsx'

/**
 * EXAMPLE: Using HOCs to enhance a simple button component
 * 
 * This demonstrates how HOCs can add functionality without
 * modifying the original component code.
 */

// Base button component (no HOC functionality)
function BaseButton({ children, onClick, clickCount, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-colors duration-200 font-medium ${className}`}
    >
      {children}
      {/* Display click count if provided by HOC */}
      {clickCount !== undefined && (
        <span className="ml-2 text-xs opacity-75">
          (Clicked: {clickCount})
        </span>
      )}
    </button>
  )
}

// Enhanced button with click counter HOC
const ButtonWithCounter = withClickCounter(BaseButton)

// Enhanced button with click counter AND logger HOC (composing HOCs)
const ButtonWithCounterAndLogger = withLogger(
  withClickCounter(BaseButton),
  'EnhancedButton'
)

// Enhanced button with all HOCs: animation, click counter, and logger
const FullyEnhancedButton = withAnimation(
  withLogger(
    withClickCounter(BaseButton),
    'FullyEnhancedButton'
  )
)

/**
 * Demo component showing different HOC usage patterns
 */
function ButtonWithHOCDemo() {
  return (
    <div className="space-y-4 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-center">
        HOC Pattern Examples
      </h3>
      
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-400 mb-2">
            1. Base Button (no HOC)
          </p>
          <BaseButton className="bg-blue-600 hover:bg-blue-700">
            Base Button
          </BaseButton>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-2">
            2. Button with Click Counter HOC
          </p>
          <ButtonWithCounter className="bg-green-600 hover:bg-green-700">
            Button with Counter
          </ButtonWithCounter>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-2">
            3. Button with Counter + Logger HOC (check console)
          </p>
          <ButtonWithCounterAndLogger className="bg-yellow-600 hover:bg-yellow-700">
            Button with Counter & Logger
          </ButtonWithCounterAndLogger>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-2">
            4. Fully Enhanced Button (Animation + Counter + Logger)
          </p>
          <FullyEnhancedButton className="bg-purple-600 hover:bg-purple-700">
            Fully Enhanced Button
          </FullyEnhancedButton>
        </div>
      </div>
    </div>
  )
}

export default ButtonWithHOCDemo
export { BaseButton, ButtonWithCounter, ButtonWithCounterAndLogger, FullyEnhancedButton }

