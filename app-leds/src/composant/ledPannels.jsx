import React from 'react'

/**
 * LedPanel Component
 * Displays a panel of 3 LEDs (red, yellow, green) with one active LED highlighted
 *
 * @param {string} active
 */
function LedPanel({ active }) {
  const leds = [
    { color: 'red', bgClass: 'bg-red-500' },
    { color: 'yellow', bgClass: 'bg-yellow-400' },
    { color: 'green', bgClass: 'bg-green-500' },
  ]

  return (
    <div className="flex gap-4 justify-center items-center p-8 bg-gray-800 rounded-lg">
      {leds.map((led) => {
        // Check if is the active led
        const isActive = led.color === active

        return (
          <div
            key={led.color}
            className={`
              rounded-full transition-all duration-300
              ${led.bgClass}
              ${isActive
                ? 'w-16 h-16 opacity-100 scale-110 shadow-lg shadow-red-500/50'
                : 'w-10 h-10 opacity-30 scale-100'
              }
            `}
          />
        )
      })}
    </div>
  )
}

export default LedPanel
