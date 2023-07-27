import React, { useState } from "react";

const Card = ({ item }) => {
  const [btn, setBtn] = useState(false);
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={item.image} alt={item.character} />
        </div>
        <div className="card-title">
          <h2>{item.character}</h2>
        </div>
        {btn && (
          <div className="card-content">
            <p>{item.hakkında}</p>
          </div>
        )}
        <div className="card-btn">
          <button onClick={() => setBtn(!btn)}>
            {btn ? "Hide" : "See More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
