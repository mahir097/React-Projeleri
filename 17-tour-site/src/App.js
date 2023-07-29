import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function handleRemoveTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    const response = await fetch("https://course-api.com/react-tours-project");
    const data = await response.json();
    setTours(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn" onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} onRemoveTour={handleRemoveTour} />
    </div>
  );
};

export default App;
