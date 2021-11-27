import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="last-updated">
        <FormattedDate date={props.data.date} />{" "}
        {/*sending this data to a new component*/}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
          <div className="col-4">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-4">
            <ul>
              <li>Wind {Math.round(props.data.wind)}m/s</li>
              <li>Humidity {props.data.humidity}%</li>
              <li>Real feel {props.data.feel}°C</li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
