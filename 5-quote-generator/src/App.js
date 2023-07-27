import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [quote, setQuote] = useState("");
  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuote(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const getCleanAuthor = (author) => {
    const typeFitIndex = author.indexOf(", type.fit");
    return typeFitIndex !== -1 ? author.substring(0, typeFitIndex) : author;
  };
  return (
    <div className="App">
      <div className="container">
        <div className="header">Random Quote Generator</div>
        <div className="quote">
          <h2>{quote.text}</h2>
          <h4>{getCleanAuthor(quote.author)}</h4>
        </div>
        <div className="btn-container">
          <button onClick={getQuotes}>Get Quotes</button>
        </div>
      </div>
    </div>
  );
}

export default App;
