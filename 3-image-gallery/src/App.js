import { useState } from "react";
import "./styles.css";
import Images from "./Images";

function App() {
  const [selected, setSelected] = useState(Images[0]);

  return (
    <div className="App">
      <div className="container">
        <img src={selected} alt="selected" className="selected" />
        <div className="images">
          {Images.map((image, i) => (
            <img
              src={image}
              alt={i}
              key={i}
              onClick={() => setSelected(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
