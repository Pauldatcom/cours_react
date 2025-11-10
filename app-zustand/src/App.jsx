import useCounterStore from './store/counterStore'
import useBearStore from './store/bearStore'
import './App.css'

function App() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  const reset = useCounterStore((state) => state.reset)

  // Bear store example
  const bears = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  const removeAllBears = useBearStore((state) => state.removeAllBears)

  return (
    <div className="app-container">
      <h1 className="app-title">Zustand Store Examples</h1>
      
      <div className="stores-grid">
        {/* Counter Store Example */}
        <div className="card">
          <h2 className="card-title">Counter Store</h2>
          <div className="value-display">
            <span className="value-label">Count:</span>
            <span className="value-number">{count}</span>
          </div>
          <div className="button-group">
            <button className="btn btn-secondary" onClick={decrement}>
              Decrement
            </button>
            <button className="btn btn-primary" onClick={increment}>
              Increment
            </button>
            <button className="btn btn-danger" onClick={reset}>
              Reset
            </button>
          </div>
        </div>

        {/* Bear Store Example */}
        <div className="card">
          <h2 className="card-title">Bear Store Example</h2>
          <div className="value-display">
            <span className="value-label">Bears in the forest:</span>
            <span className="value-number">{bears}</span>
          </div>
          <div className="button-group">
            <button className="btn btn-primary" onClick={increasePopulation}>
              Add Bear
            </button>
            <button className="btn btn-danger" onClick={removeAllBears}>
              Remove All Bears
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
