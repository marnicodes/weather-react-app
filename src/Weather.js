import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [ready, setReady] = useState(false); //setReady being false by default
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({}); //by default is an empty object, as it wil store all the weather data
  //const [temperature, setTemperature] = useState(null); //null: not knowing the temperature at the moment

  function handleResponse(response) {
    setWeatherData({
      //ready: true, //formerly setReady(true);
      date: new Date(response.data.dt * 1000) /*calling the date API*/,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      feel: response.data.main.feels_like,
      description: response.data.weather[0].description,
    });
    setReady(true);
    //setTemperature(response.data.main.temp); //initial object: when temperature is set, result will be displayed as temperature below (state)
  }

  function search() {
    const apiKey = "ff4151e1f397ca52bc01c2b445760854";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for a city
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    //ready being "true", will return the information below
    return (
      <div class="container-fluid">
        <nav class="navbar navbar-light">
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for a city"
              autoFocus="on"
              onChange={handleCityChange}
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
        </nav>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    //else when its loading, is updating the UI
    search();
    return "Loading...";
  }
}
