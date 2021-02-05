import React, { Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './TopBar.css';
import axios from 'axios';


const key = 'pk.eyJ1IjoiaHJpdHZpa2thdXNoaWsiLCJhIjoiY2trcjZhb2ZoMDQ5bzJ3b2kya2U5dGMzYiJ9.SGtqS1r9nXypWmlBnwCbXQ';
const base = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const call = (q) => `${base}${q}.json?access_token=${key}&autocomplete=true`;

class topBar extends Component {

    state = {
        suggestions: [],
        boxVisible: false,
    }

    searchingHandler = (event) => {
        const s = event.target.value;

        if(s.length>=3){
            console.log(call(s));
            axios.get(call(s)).then( response => {
                console.log(response.data.features[2].place_name);
                this.setState({
                    suggestions: response.data.features.map(feature=>{
                        return{
                            id: feature.id,
                            place_name: feature.place_name,
                            text: feature.text,
                            coordinates: feature.geometry.coordinates
                        }
                    }),
                    boxVisible: true,
                });
            });
        }
        
        if(!s) {
            this.setState({
                suggestions: [],
                boxVisible: false,
            });
        }
    }

    clickHandler = (place) => {
        console.log(place.place_name);
        console.log(place.id);
        console.log(place.text);
    }

    render() {

        let searchSuggestions = null;

        if(this.state.boxVisible){
            searchSuggestions = this.state.suggestions.map(s => <div id={s.id} 
                                            className={classes.suggestion}
                                            onClick={() => this.clickHandler(s)}>
                                                <p>{s.place_name}</p>
                                            </div>)
        } else searchSuggestions = null;

        return(
            <Aux>
                <div className={classes.Bar}>
                    <input className={classes.Box} onChange={this.searchingHandler} type="text" placeholder="Search for city..."/>
                </div>
                <div className={this.state.boxVisible?classes.SearchSuggestions:null}>
                    {searchSuggestions}
                </div>
            </Aux>
        )
    }
}

export default topBar;