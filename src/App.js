import React from "react";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather Search</h1>
          <Search />
        </header>
        <footer>
          {" "}
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
        </footer>
      </div>
    </div>
  );
}

export default App;
