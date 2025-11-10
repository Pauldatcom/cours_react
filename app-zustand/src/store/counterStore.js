import { create } from 'zustand'

// Counter store - practical example for your app
const useCounterStore = create((set) => ({
  // State
  count: 0,
  
  // Actions
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  // You can also pass a function directly
  incrementBy: (amount) => set((state) => ({ count: state.count + amount })),
}))

export default useCounterStore

