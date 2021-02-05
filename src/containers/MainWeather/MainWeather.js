import React, {Component} from 'react';
// import Auxiliary from '../../hoc/Auxiliary';
import Today from '../../components/TodaysWeather/TodaysWeather';
import FiveDays from '../../components/FiveDays/FiveDays';
import axios from 'axios';
import classes from './MainWeather.css';

const APIkey = '57048db528742215f7c88cacad06902c';
const APIbase = 'http://api.openweathermap.org/data/2.5/';

class MainWeather extends Component{

    state = {
        ...this.props.place
    }

    static getDerivedStateFromProps(props, state){
        if(state !== props){
            return({...props.place});
        }
        return state;
    }

    weatherData = null;
    weatherForecast = null;

    componentDidUpdate() {
        console.log("ComponentDidUpdate");
        const latitude=Math.round(this.state.coordinates[1]);
        const longitude=Math.round(this.state.coordinates[0]);
        axios.get(`${APIbase}weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`)
            .then((response)=>{
                console.log(response);
                this.weatherData = response;
            })
        axios.get(`${APIbase}forecast?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`)
            .then((response)=>{
                console.log(response);
                this.weatherForecast = response;
            })
    }

    render(){

        console.log(this.state);
        return (
            <div className={classes.MainWeather}>
                <Today weatherData={this.weatherData} place={this.state.text}/>
                <FiveDays weatherForecast={this.weatherForecast}/>
            </div>
        )
    }
}

export default MainWeather;