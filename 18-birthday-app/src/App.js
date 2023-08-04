import React from "react";
import "./App.css";
import data from "./Data";
import List from "./List";

export default function App() {
  const [people, setPeople] = React.useState(data);
  return (
    <div className="App">
      <div className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <div className="btn">
          <button onClick={() => setPeople([])}>Clear All</button>
          <button onClick={() => setPeople(data)}>Reset All</button>
        </div>
      </div>
    </div>
  );
}
