import React from 'react';
// import Aux from '../../hoc/Auxiliary';
import classes from './TodaysWeather.css';
import picture from '../../assets/img.png';

const todaysWeather = (props) => {
    console.log(classes);
    return (
        <div className={classes.today}>
            <h1>Today, 3rd February, 2020</h1>
            <h2>Manjhanpur, UP</h2>
            <div className={classes.big}>
                <img src={picture} alt="weather icon" height='60px' width='60px'/>
                <div style={{alignSelf: 'center', paddingLeft: '20px'}}>19° C</div>
            </div>
            <p>Clear skies</p>
            <p><span>Feels like: 12°</span><span>Wind Speed: 8 km/h</span><span>Visibility: 2km</span></p>
            <p><span>Humidity: 12%</span><span>Barometer: 1008 mb</span><span>Dew Point: 12°</span></p>
        </div>
    );
}

export default todaysWeather;