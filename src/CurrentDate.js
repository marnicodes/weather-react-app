import React from "react";

export default function CurrentDate(props) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (minutes < 10) {
    hours = `0${hours}`;
  }

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
