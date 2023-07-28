import React, { useEffect, useState } from "react";
import "./MemeGenerator.css";

const MemeGenerator = () => {
  const [memes, setMemes] = useState([]);
  const [randomMeme, setRandomMeme] = useState({});
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  function getRandomMeme() {
    const randNum = Math.floor(Math.random() * memes.length);
    setRandomMeme(memes[randNum]);
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((d) => {
        setMemes(d.data.memes);
        console.log(memes);
      });
  }, []);

  return (
    <div className="container">
      <div className="inputTop">
        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
      </div>
      <div className="inputBottom">
        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
      <div className="content">
        <div className="meme">
          <h2 className="top">{topText}</h2>
          <img src={randomMeme.url} alt={randomMeme.name} />
          <h2 className="bottom">{bottomText}</h2>
        </div>
        <div className="btn">
          <button onClick={() => getRandomMeme()}>Generate</button>
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
