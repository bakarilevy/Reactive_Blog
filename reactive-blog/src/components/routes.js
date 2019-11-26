import React from 'react';
import { Route, IndexRoute, Switch, BrowserRouter as Router } from 'react-router-dom';

//All page componenets need to be imported here

import App from '../App';
import MainPage from './MainPage';

// This only works with classes not the function
// componentDidMount() {
//     console.log(BrowserRouter);
// }

const Routes = ()=> {
    return(
    <div>
        <Router>
            <Switch>
                <Route path='/' component={App}/>
                <Route path='/MainPage' component={MainPage}/>
            </Switch>
        </Router>
    </div>
    );
}

export default Routes
