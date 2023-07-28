import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [data, setData] = useState(null);

  const handleData = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    setData(data.results[0]);
  };

  return (
    <div className="App">
      <div className="card">
        {data && (
          <>
            {" "}
            <img src={data?.picture.large} alt="" />
            <p className="name">
              {data?.name.first} {data?.name.last}
            </p>
            <p className="email">{data?.email}</p>
            <p className="phone">{data?.phone}</p>{" "}
          </>
        )}

        <button onClick={handleData}>Get Random Person</button>
      </div>
    </div>
  );
};

export default App;
