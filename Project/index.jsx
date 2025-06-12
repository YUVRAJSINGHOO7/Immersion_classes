import { useState } from "react";

function ProgressBar() {
  const [value, setValue] = useState(0);
  useState(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
  }, []);

  return (
    <progress value={value} max="100" style={{ width: "100%", marginTop: "10px" }}>
      {value}%
    </progress>
  );
}

export default function App() {
  const [bars, setBars] = useState([]);

  const addBar = () => {
    setBars((prev) => [...prev, Date.now()]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={addBar}>Add</button>
      <div style={{ marginTop: "20px" }}>
        {bars.map((key) => (
          <ProgressBar key={key} />
        ))}
      </div>
    </div>
  );
}