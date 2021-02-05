import React from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import TopBar from '../../containers/TopBar/TopBar';

import classes from './Layout.css';

const layout = (props) => (
    <Auxiliary>
        <TopBar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;