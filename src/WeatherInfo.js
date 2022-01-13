import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mb-0">{props.data.city}</h1>
      <div className="last-updated">
        <FormattedDate date={props.data.date} />{" "}
        {/*sending this data to a new component*/}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <WeatherIcon code={props.data.icon} size={100} />
          </div>
          <div className="col-md-6">
            <div class="WeatherTemperature">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div class="row">
          <div className="col">
            <span className="current-details">
              <ul>
                <li>Wind {Math.round(props.data.wind)}m/s</li>
                <li>Humidity {props.data.humidity}%</li>
                <li>Real feel {Math.round(props.data.feel)}°C</li>
                <li className="text-capitalize">{props.data.description}</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
