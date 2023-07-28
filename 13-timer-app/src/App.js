import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [currentTime, setCurrentTime] = useState();

  function handleTime() {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
    console.log(time);
  }

  setInterval(handleTime, 1000);

  return (
    <div className="App">
      <h1>{currentTime}</h1>
    </div>
  );
};

export default App;
