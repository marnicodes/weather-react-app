import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false); //by default its no.
  let [forecast, setForecast] = useState();

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    //when it is loaded, it should display below
    //console.log(forecast); //this will show data from the response of the state
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            /*to display only 6 days of forecast, using conditioned statement*/
            if (index < 6) {
              return (
                <div className="col-2" key={index}>
                  <WeatherForecastDay data={dailyForecast} />{" "}
                  {/*instead of sending the forecast array, it is sending the dailyForecast*/}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    //if not, it will make API call
    let apiKey = "ff4151e1f397ca52bc01c2b445760854";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); //which will call on the response, and set the forecast/setForecast in the response
    return null;
  }
}
