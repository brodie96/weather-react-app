import React from "react";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search</h1>
        <Search />
        <p>
          <a
            href="https://github.com/brodie96/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced code
          </a>{" "}
          <br />
          by Rebecca Brodie
        </p>
      </header>
    </div>
  );
}

export default App;
