import axios from "axios";
import React, { useState } from "react";

export default function Weather(prop) {
  let [city, setCity] = useState("");
  let [load, setLoad] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoad(true);
    setWeather({
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `ff4151e1f397ca52bc01c2b445760854`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <nav class="navbar navbar-light">
      <div class="container-fluid">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search for a city"
            autoComplete="off"
            autoFocus="off"
            id="city-input"
            onChange={updateCity}
          />
          <button
            className="btn btn-outline-dark"
            type="submit"
            id="search-button"
          >
            {" "}
            Search{" "}
          </button>
          <button
            className="btn btn-outline-dark"
            type="submit"
            id="geo-button"
          >
            Current
          </button>
        </form>
      </div>
    </nav>
  );

  if (load) {
    return (
      <div className="WeatherInfo">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind speed: {Math.round(weather.wind)} km/h</li>
          <li>
            <img src={weather.icon} alt="icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
