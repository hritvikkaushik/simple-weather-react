import React, {Component} from 'react';
import Today from '../../components/TodaysWeather/TodaysWeather';
import FiveDays from '../../components/FiveDays/FiveDays';
import axios from 'axios';
import classes from './MainWeather.css';

const APIkey = '57048db528742215f7c88cacad06902c';
const APIbase = 'http://api.openweathermap.org/data/2.5/';

class MainWeather extends Component{

    state = {
        weatherData: null,
        weatherForecast: null,
        weatherID: null
    }
            
    static getDerivedStateFromProps(props, state){
        if(state !== props){
            return({...props.place});
        }
        return state;
    }

    componentDidUpdate(){
        console.log("Update");
        const latitude=this.state.coordinates[1];
        const longitude=this.state.coordinates[0];
        axios.get(`${APIbase}weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`)
            .then((response)=>{
                console.log("Getting weather response");
                console.log(response.data);
                if(this.state.weatherID !== response.data.weather[0].id){
                    this.setState({
                        weatherData: response.data,
                        weatherID: response.data.weather[0].id
                    })
                }
            })
    }

    render(){
        return (
            <div className={classes.MainWeather}>
                <Today weatherData={this.state.weatherData} place={this.state.text}/>
                <FiveDays weatherForecast={this.state.weatherForecast}/>
            </div>
        )
    }
}

export default MainWeather;