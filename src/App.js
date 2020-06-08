import React from "react";
import logo from "./logo.svg";
import "./App.css";
var Chart = require("chart.js");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <canvas id="myChart" width="400" height="400"></canvas>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
