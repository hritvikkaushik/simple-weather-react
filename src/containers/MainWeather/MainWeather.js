import React, {Component} from 'react';
// import Auxiliary from '../../hoc/Auxiliary';
import Today from '../../components/TodaysWeather/TodaysWeather';
import FiveDays from '../../components/FiveDays/FiveDays';
import axios from 'axios';
import classes from './MainWeather.css';

const APIkey = '57048db528742215f7c88cacad06902c';

class MainWeather extends Component{

    state = {
        selectedCity: 'Delhi',
        // makerequest: true
    }
// api.openweathermap.org/data/2.5/weather?q=London&appid=57048db528742215f7c88cacad06902c
    componentDidMount() {
        // if(this.state.makerequest)
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.selectedCity}&appid=${APIkey}`)
            .then((response)=>{
                console.log(response);
            })
    }

    render(){
        return (
            <div className={classes.MainWeather}>
                <Today/>
                <FiveDays/>
            </div>
        )
    }
}

export default MainWeather;