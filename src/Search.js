import React, { useState } from "react";
import "./Search.css";
import Temperature from "./Temperature";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setWeather(<Temperature city={city} />);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City"
          className="SearchCity"
          onChange={updateCity}
        />
        <input type="submit" value="Go!" className="GoButton" />
      </form>
      <h1>City, Country</h1>

      <h2>Day, Time</h2>

      <h3>{weather}</h3>
    </div>
  );
}
