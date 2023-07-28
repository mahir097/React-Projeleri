import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="memeGenerator">
        <MemeGenerator />
      </div>
    </div>
  );
};

export default App;
