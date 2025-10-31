function App() {
  const [showClock, setShowClock] = React.useState(true);
  const [message, setMessage] = React.useState("");

  const handleUnmount = (msg) => {
    setShowClock(false);
    setMessage(msg);
  };

  return (
    <div>
      <h1>Horloge React</h1>
      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? "Démonter l'horloge" : "Monter l'horloge"}
      </button>
      {showClock ? <Clock onUnmount={handleUnmount} /> : <p>{message}</p>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
