import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
      .then((response) => response.json())
      .then((data) => setData(data.meals));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>British Meals</h1>
      <div className="meal-container">
        {data.slice(0, visible).map((item) => (
          <Card data={item} key={item.idMeal} />
        ))}
      </div>

      <div className="btn-container">
        {visible > 3 && (
          <button className="btn-less" onClick={() => setVisible(visible - 3)}>
            Less
          </button>
        )}

        <button className="btn-more" onClick={() => setVisible(visible + 3)}>
          More
        </button>
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.strMealThumb} alt={data.idMeal} />
      <h1>{data.strMeal}</h1>
    </div>
  );
};

export default App;
