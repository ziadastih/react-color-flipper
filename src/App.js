import { colors, hex } from "./colorsData";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  const [colorValue, setColorValue] = useState("red");
  const [state, setState] = useState("simple");

  const generateHex = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * hex.length);

      hexColor += hex[randomNumber];
    }
    return hexColor;
  };

  const generateSimple = () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
  };

  const handleClick = () => {
    setState((prevState) => {
      return prevState === "simple" ? "hex" : "simple";
    });
    console.log(state);
  };

  const generateColor = () => {
    state === "simple"
      ? setColorValue(generateSimple())
      : setColorValue(generateHex());
  };

  return (
    <div className="App">
      <NavBar handleClick={handleClick} />
      <Main value={colorValue} generateColor={generateColor} />
    </div>
  );
}

export default App;
