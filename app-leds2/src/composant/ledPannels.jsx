import React from 'react'

function LedPanel({ 
  active, 
  isBlueLedMounted, 
  storedCounter, 
  onUnmount, 
  onMount 
}) {
  const leds = [
    { color: 'red', bgClass: 'bg-red-500' },
    { color: 'yellow', bgClass: 'bg-yellow-400' },
    { color: 'green', bgClass: 'bg-green-500' },
  ]

  return (
    <div className="flex flex-col gap-6 items-center">
      {/* Blue LED Section - Mounted or Unmounted */}
      <div className="flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg min-w-[200px]">
        {isBlueLedMounted ? (
          // Blue LED mounted: show LED + unmount button
          <>
            <div className="w-16 h-16 bg-blue-500 rounded-full opacity-100 scale-110 shadow-lg shadow-blue-500/50 transition-all duration-300" />
            <button
              onClick={onUnmount}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200 font-medium text-sm"
            >
              Démontage
            </button>
          </>
        ) : (
          // Blue LED unmounted: show stored counter + mount button
          <>
            <div className="text-4xl font-bold text-blue-400 mb-2 transition-all duration-300">
              {storedCounter}
            </div>
            <button
              onClick={onMount}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200 font-medium text-sm"
            >
              Remontage
            </button>
          </>
        )}
      </div>

      {/* Main LED Panel - Red, Yellow, Green */}
      <div className="flex gap-4 justify-center items-center p-8 bg-gray-800 rounded-lg">
        {leds.map((led) => {
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
    </div>
  )
}

export default LedPanel
