import { create } from 'zustand'

// Bear store example - following the Zustand docs pattern
const useBearStore = create((set) => ({
  // State
  bears: 0,
  
  // Actions - functions that update the state
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export default useBearStore

