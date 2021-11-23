import axios from "axios";
import React, { useState } from "react";

export default function Weather() {
  let [ready, setReady] = useState(false); //setReady being false by default
  const [temperature, setTemperature] = useState(null); //null: not knowing the temperature at the moment

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
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
        <h1>Stockholm</h1>
        <div className="last-updated">Last updated:</div>
        <div className="container">
          <div className="row">
            <div className="col-4">(Icon) </div>
            <div className="col-4">(Temperature)</div>
            <div className="col-4">(WeatherDetails)</div>
          </div>
        </div>
      </div>
    );
  } else {
    //else when its loading, is updating the UI
    const apiKey = "ff4151e1f397ca52bc01c2b445760854";
    let city = "Stockholm";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
