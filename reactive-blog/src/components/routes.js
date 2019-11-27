import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

//All page componenets need to be imported here


import MainPage from './MainPage';
import PostForm from './PostForm';
import Posts from './posts';


const Routes = ()=> {
    return(
        <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/main">Main</Link></li>
                <li><Link to="/form">Form</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
        </div>

            <Route path="/main" component={MainPage}/>
            <Route path="/form" component={PostForm}/>
            <Route path="/posts" component={Posts}/>

            
        </BrowserRouter>
    ); 
}

export default Routes
