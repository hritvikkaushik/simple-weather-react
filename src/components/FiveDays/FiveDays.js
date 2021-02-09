import React from "react";
import classes from "./FiveDays.css";

const fiveDays = (props) => {
  let days = Array(5).fill(<div className={classes.Day}></div>);

  if (props.weatherForecast) {
    const dateOptions = {
      weekday: "long",
      //   year: "numeric",
      month: "short",
      day: "numeric",
    };

    days = props.weatherForecast.map((dayValues) => {
      const date = new Date(dayValues.dt * 1000).toLocaleDateString(
        "en-US",
        dateOptions
      );
      return (
        <div className={classes.Day}>
          <h5>{date}</h5>
          <img
            src={`http://openweathermap.org/img/w/${dayValues.weather[0].icon}.png`}
            alt="weather icon"
            height="50px"
            width="50px"
          />
          <p>
            <b>Max </b> {dayValues.temp.max}° C
          </p>
          <p>
            <b>Min </b> {dayValues.temp.min}° C
          </p>
          <p>
            <b>Humidity</b> {dayValues.humidity}%
          </p>
          <p>
            <b>Outlook</b> {dayValues.weather[0].main}
          </p>
        </div>
      );
    });
  }

  return <div className={classes.FiveDays}>{days}</div>;
};

export default fiveDays;
