import React from 'react';
import classes from './FiveDays.css';

const fiveDays = () => {

    const data = [
        {outlook: "sunny", max:15, min:8, humidity: 50, date: 4},
        {outlook: "rainy", max:16, min:7, humidity: 40, date: 5},
        {outlook: "cloudy", max:17, min:6, humidity: 10, date: 6},
        {outlook: "haze", max:18, min:5, humidity: 20, date: 7},
        {outlook: "sunny", max:19, min:4, humidity: 30, date: 8},
    ]

    const days = data.map((dayValues) => (
        <div className={classes.Day}>
            <p>{dayValues.date}</p>
            <p><img src="../../assets/img.png" alt="weather icon" height="30px" width="30px"/></p>
            <p><span>Max: {dayValues.max}</span><span>Min: {dayValues.min}</span></p>
            <p>Outlook: {dayValues.outlook}</p>
        </div>
    ))

    return(
        <div className={classes.FiveDays}>
            {days}
        </div>
    )
}

export default fiveDays;