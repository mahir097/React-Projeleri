import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [hex, setHex] = useState("#000000");

  const handleHexGenerator = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setHex("#" + randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: hex }}>
      <h1>{hex}</h1>
      <button onClick={handleHexGenerator}>Generate</button>
      <button onClick={() => navigator.clipboard.writeText(hex)}>
        Copy The Hex Value
      </button>
    </div>
  );
};

export default App;
