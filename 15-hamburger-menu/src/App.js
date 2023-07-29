import React, { useState } from "react";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div className="burger-menu" onClick={() => setClicked(!clicked)}>
          <div className={`burger-bar ${clicked ? "clicked" : ""}`}>-</div>
          <div className={`burger-bar ${clicked ? "clicked" : ""}`}>-</div>
          <div className={`burger-bar ${clicked ? "clicked" : ""}`}>-</div>
        </div>
        <div className="logo">Hamburger Menu 🍔</div>
      </nav>
      <div className={`menu ${clicked ? "visible" : ""} `}>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
}

export default App;
