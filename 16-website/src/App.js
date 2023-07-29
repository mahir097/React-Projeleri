import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="content">Mahir Demir</div>
        <div className="title">Web Developer</div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <div className="icons">
          <div className="social-icons">
            <FaInstagram />
          </div>
          <div className="social-icons">
            <FaFacebook />
          </div>
          <div className="social-icons">
            <FaGithub />
          </div>
          <div className="social-icons">
            <FaTwitter />
          </div>
          <div className="social-icons">
            <FaTelegram />
          </div>
        </div>

        <div className="copy">Copyright © 2023. Mahir Demir</div>
      </div>
    </div>
  );
}

export default App;
