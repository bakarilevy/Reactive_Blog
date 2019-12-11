import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

//All page componenets need to be imported here

import MainPage from './MainPage';
import PostForm from './PostForm';
import Posts from './posts';
import GetOne from './GetOne';
import NewView from './NewView';
import Upload from './upload/Upload';
import Dropzone from './dropzone/Dropzone';

const Routes = ()=> {
    return(
        <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/main">Main</Link></li>
                <li><Link to="/form">Form</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/getone">GetOne</Link></li>
                <li><Link to="/views">Views</Link></li>
                <li><Link to="/upload">Upload</Link></li>
                <li><Link to="/dropzone">Dropzone</Link></li>
            </ul>
        </div>

            <Route path="/main" component={MainPage}/>
            <Route path="/form" component={PostForm}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/getone" component={GetOne}/>
            <Route path="/views" component={NewView}/>
            <Route path="/upload" component={Upload}/>
            <Route path="/dropzone" component={Dropzone}/>
            
        </BrowserRouter>
    ); 
}

export default Routes
