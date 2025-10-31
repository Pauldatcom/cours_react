function Clock({ onUnmount }) {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(timer);
      onUnmount("Horloge démontée à " + new Date().toLocaleTimeString());
    };
  }, []);

  return <h2> {time.toLocaleTimeString()}</h2>;
}
