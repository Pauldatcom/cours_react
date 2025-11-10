import { create } from 'zustand'

// following the exact same pattern as the doc in zustand
const useBearStore = create((set) => ({
  // State
  bears: 0,
  
  // Actions - functions that update the state
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export default useBearStore

