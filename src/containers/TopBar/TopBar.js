import React, {useState} from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './TopBar.css';

// const MapAPI = {
//     key: 'pk.eyJ1IjoiaHJpdHZpa2thdXNoaWsiLCJhIjoiY2trcjZhb2ZoMDQ5bzJ3b2kya2U5dGMzYiJ9.SGtqS1r9nXypWmlBnwCbXQ',
//     base: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
// }

const topBar = (props) => {

    const [suggestions, setSuggestions] = useState([]);
    const [boxVisible, setBoxVisible] = useState(false);

    const searchingHandler = (event) => {
        const s = event.target.value;
        // setQuery({s});
        if(s) setSuggestions(["Suggestion #1","Suggestion #2","Suggestion #3","Suggestion #4","Suggestion #5"]);
        else setSuggestions([]);
        if(event.target.value) {
            setBoxVisible(true);
            console.log("setting");
        }
        else {
            setBoxVisible(false);
            console.log("unsetting");
        }
    }

    return(
        <Aux>
            <div className={classes.Bar}>
                <input className={classes.Box} onChange={searchingHandler} type="text" placeholder="Search for city..."/>
            </div>
            <div className={boxVisible?classes.SearchSuggestions:null}>
                {suggestions.map(s => <div className={classes.suggestion}><p>{s}</p></div>)}
            </div>
        </Aux>
    )
}

export default topBar;