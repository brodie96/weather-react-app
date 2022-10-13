import React, { useState } from "react";
import axios from "axios";

export default function Temperature(props) {
  let city = props.city;
  let [temperature, setTemperature] = useState(null);
  let [icon, setIcon] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let apiKey = "0bc997255f5a3bef3c5d47209c8da7d5";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setIcon(response.data.weather[0].icon);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  if (temperature) {
    return (
      <div>
        <ul>
          <li>Temperature: {temperature}ºC</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind Speed: {wind}km/h</li>
          <li>
            <img
              alt="weather"
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    axios.get(url).then(showTemperature);
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
}
