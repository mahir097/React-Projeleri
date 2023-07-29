import React from "react";
import "./Tours.css";
import Tour from "./Tour";

export default function Tours({ tours, onRemoveTour }) {
  return (
    <div className="title">
      <h2>Our Tours</h2>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} onRemoveTour={onRemoveTour} />
      ))}
    </div>
  );
}
