import { useState } from "react";
import "./App.css";

function App() {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [randomNumber, setRandomNumber] = useState();

  function getRandomNumber() {
    if (min > max) return alert("Min must be less than max");
    if (min === max) return alert("Min and max must be different");
    else setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return (
    <div className="app">
      <div className="container">
        <div className="randomNum">
          <p>
            Random Number: <span>{randomNumber}</span>
          </p>
        </div>
        <div className="numContainer">
          <div className="min">
            <p>Min: </p>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
            />
          </div>
          <div className="max">
            <p>Max: </p>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
            />
          </div>
        </div>
        <button onClick={getRandomNumber}>Get random number</button>
      </div>
    </div>
  );
}

export default App;
