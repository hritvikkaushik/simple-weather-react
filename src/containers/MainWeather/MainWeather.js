import React, { Component } from "react";
import Today from "../../components/TodaysWeather/TodaysWeather";
import FiveDays from "../../components/FiveDays/FiveDays";
import axios from "../../axios-instances/axiosWeather";
import classes from "./MainWeather.css";

class MainWeather extends Component {
  state = {
    weatherData: null,
    weatherForecast: null,
    weatherID: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (state !== props) {
      return { ...props.place };
    }
    return state;
  }

  componentDidUpdate() {
    const params = {
      lat: this.state.coordinates[1],
      lon: this.state.coordinates[0],
    };

    Promise.all([
      axios.get("/weather", { params: params }),
      axios.get("/onecall", {
        params: {
          ...params,
          cnt: 5,
          exclude: "current,minutely,hourly,alerts",
        },
      }),
    ]).then(([weatherData, weatherForecast]) => {
      if (this.state.weatherID !== weatherData.data.weather[0].id) {
        console.log("Getting weather response");
        console.log(weatherForecast.data);
        this.setState({
          weatherData: weatherData.data,
          weatherID: weatherData.data.weather[0].id,
          weatherForecast: weatherForecast.data.daily.slice(0, 5),
        });
      }
    });
  }

  render() {
    return (
      <div className={classes.MainWeather}>
        <Today weatherData={this.state.weatherData} place={this.state.text} />
        <FiveDays weatherForecast={this.state.weatherForecast} />
      </div>
    );
  }
}

export default MainWeather;
