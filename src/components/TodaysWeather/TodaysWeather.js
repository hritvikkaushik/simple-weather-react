import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './TodaysWeather.css';

const todaysWeather = (props) => {
    
    let today = (
        <p style={{textAlign: 'center', marginTop: '30%', paddingTop: '0'}}>
            Waiting for user to select city...
        </p>
    );
    
    if(props.weatherData){
        
        const timeOptions = {
            hour12 : true,
            hour:  "numeric",
            minute: "numeric",seconds:"numeric"
        }
        const time = new Date().toLocaleTimeString("en-US", timeOptions);

        const dateOptions = {
            weekday: "long",
            year: "numeric",
            month:"long",
            day:"numeric"
        }
        const date = new Date().toLocaleDateString("en-US", dateOptions);

        today = (
            <Aux>
                <h1>{props.place}</h1>
                <h2>{`${date}`}</h2>
                <h3>{`Time: ${time}`}</h3>
                <div className={classes.big}>
                    <img src={`http://openweathermap.org/img/w/${props.weatherData.weather[0].icon}.png`} alt="weather icon" height='90px' width='90px'/>
                    <div className={classes.temp}>{props.weatherData.main.temp}° C</div>
                </div>
                <p>{props.weatherData.weather[0].main}</p>
                <p>
                    <span>Feels like: {props.weatherData.main.feels_like}°</span>
                    <span>Min Temp: {props.weatherData.main.temp_min}</span>
                    <span>Max Temp: {props.weatherData.main.temp_max}</span>
                </p>
                <p>
                    <span>Humidity: {props.weatherData.main.humidity}%</span>
                    <span>Barometer: {props.weatherData.main.pressure} mb</span>
                    <span>Wind Speed: {props.weatherData.wind.speed} km/h</span>
                </p>
            </Aux>
        );
    }

    return (
        <div className={classes.today}>
            {today}
        </div>
    );
}

export default todaysWeather;