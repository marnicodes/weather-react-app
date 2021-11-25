import axios from "axios";
import React, { useState } from "react";

export default function Weather(props) {
  let [ready, setReady] = useState(false); //setReady being false by default
  const [weatherData, setWeatherData] = useState({}); //by default is an empty object, as it wil store all the weather data
  //const [temperature, setTemperature] = useState(null); //null: not knowing the temperature at the moment

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      //ready: true, //formerly setReady(true);
      date: "Thursday 15.00",
      icon: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
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

  if (ready) {
    //ready being "true", will return the information below
    return (
      <div class="container-fluid">
        <nav class="navbar navbar-light">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for a city"
              autoComplete="off"
              autoFocus="off"
              id="city-input"
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
        <h1>{weatherData.city}</h1>
        <div className="last-updated">Last updated:{weatherData.date}</div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img src={weatherData.icon} alt={weatherData.description} />
            </div>
            <div className="col-4">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
            <div className="col-4">
              <ul>
                <li>Wind {Math.round(weatherData.wind)}m/s</li>
                <li>Humidity {weatherData.humidity}%</li>
                <li>Real feel {weatherData.feel}°C</li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    //else when its loading, is updating the UI
    const apiKey = "ff4151e1f397ca52bc01c2b445760854";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
