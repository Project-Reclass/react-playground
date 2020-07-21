import React from 'react';
import {navBar as NavBar, ImagePanel} from './index.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function Yi() {
    return(
        <div>
            <NavBar />
            <ImagePanel />
        </div>
    )
}

export default Yi