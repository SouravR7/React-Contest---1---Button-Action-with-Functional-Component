import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [hide, sethide] = useState(false);
  const handleClick = () => {
    const newHide = !hide;
    sethide(newHide);
  };

  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        button
      </button>
      {hide === true ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
