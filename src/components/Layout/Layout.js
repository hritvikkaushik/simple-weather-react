import React, { useState } from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import TopBar from '../../containers/TopBar/TopBar';

import classes from './Layout.css';
import MainWeather from '../../containers/MainWeather/MainWeather';

const layout = (props) => {
    
    const [place, setPlace] = useState({
        id: null,
        place_name: "Waiting for input",
        text: "Waiting for user to select place...",
        coordinates: []
    });

    const placeChangeHandler = (p) => {
        setPlace(p);
    }

    return(
        <Auxiliary>
            <TopBar placeSetter={placeChangeHandler}/>
            <main className={classes.Content}>
                <MainWeather place={place}/>
            </main>
        </Auxiliary>
    );
}

export default layout;