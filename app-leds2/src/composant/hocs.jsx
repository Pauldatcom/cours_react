import React, { useState, useEffect } from 'react'

/**
 * HIGHER-ORDER COMPONENT (HOC) PATTERN
 * 
 * A Higher-Order Component is a function that:
 * 1. Takes a component as input
 * 2. Returns a new component with enhanced functionality
 * 3. Allows code reuse and separation of concerns
 * 
 * Think of it as wrapping a component with additional behavior
 * without modifying the original component itself.
 */

/**
 * HOC Example 1: withClickCounter
 * 
 * This HOC adds click counting functionality to any component.
 * It tracks how many times the component has been clicked.
 * 
 * @param {React.Component} WrappedComponent - The component to enhance
 * @returns {React.Component} - A new component with click counting
 */
export function withClickCounter(WrappedComponent) {
  // Return a new component (this is the HOC pattern)
  return function ClickCounterComponent(props) {
    const [clickCount, setClickCount] = useState(0)

    // Handler that increments count and calls original onClick if provided
    const handleClick = (event) => {
      setClickCount((prev) => prev + 1)
      // Call the original onClick handler if it exists
      if (props.onClick) {
        props.onClick(event)
      }
    }

    // Pass all original props, plus new clickCount and enhanced onClick
    return (
      <WrappedComponent
        {...props}
        clickCount={clickCount}
        onClick={handleClick}
      />
    )
  }
}

/**
 * HOC Example 2: withLogger
 * 
 * This HOC adds logging/debugging capabilities.
 * It logs component lifecycle events and prop changes.
 * 
 * @param {React.Component} WrappedComponent - The component to enhance
 * @param {string} componentName - Optional name for logging
 * @returns {React.Component} - A new component with logging
 */
export function withLogger(WrappedComponent, componentName = 'Component') {
  return function LoggedComponent(props) {
    // Log when component mounts
    useEffect(() => {
      console.log(`[${componentName}] Component mounted`)
      return () => {
        console.log(`[${componentName}] Component unmounted`)
      }
    }, [])

    // Log when props change
    useEffect(() => {
      console.log(`[${componentName}] Props updated:`, props)
    }, [props])

    return <WrappedComponent {...props} />
  }
}

/**
 * HOC Example 3: withAnimation
 * 
 * This HOC adds fade-in animation when component mounts.
 * Demonstrates how HOCs can add visual enhancements.
 * 
 * @param {React.Component} WrappedComponent - The component to enhance
 * @returns {React.Component} - A new component with animation
 */
export function withAnimation(WrappedComponent) {
  return function AnimatedComponent(props) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      // Trigger animation after mount
      const timer = setTimeout(() => setIsVisible(true), 10)
      return () => clearTimeout(timer)
    }, [])

    return (
      <div
        className={`transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <WrappedComponent {...props} />
      </div>
    )
  }
}

/**
 * HOC Example 4: withMountTracking
 * 
 * This HOC tracks mount/unmount events and provides callbacks.
 * Useful for understanding component lifecycle.
 * 
 * @param {React.Component} WrappedComponent - The component to enhance
 * @returns {React.Component} - A new component with mount tracking
 */
export function withMountTracking(WrappedComponent) {
  return function MountTrackedComponent(props) {
    const [mountTime] = useState(() => new Date().toISOString())
    const [isMounted, setIsMounted] = useState(true)

    useEffect(() => {
      setIsMounted(true)
      console.log(`Component mounted at: ${mountTime}`)
      
      return () => {
        setIsMounted(false)
        console.log(`Component unmounted at: ${new Date().toISOString()}`)
      }
    }, [mountTime])

    return (
      <WrappedComponent
        {...props}
        mountTime={mountTime}
        isMounted={isMounted}
      />
    )
  }
}

/**
 * COMPOSING MULTIPLE HOCs
 * 
 * You can combine multiple HOCs to add multiple behaviors.
 * This is called "composing" HOCs.
 * 
 * Example usage:
 * const EnhancedComponent = withLogger(withClickCounter(MyComponent), 'MyComponent')
 * 
 * Note: Order matters! HOCs are applied from inside-out.
 * In the example above, withClickCounter is applied first, then withLogger.
 */

