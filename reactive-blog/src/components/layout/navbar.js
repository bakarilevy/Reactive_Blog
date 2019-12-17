import React, {Component} from 'react';
import './navbar.css';
import Routes from '../routes/routes';
import { Link } from 'react-router-dom';
class Navbar extends Component {

    constructor(props) {
        super(props);
        this.renderDefault = this.renderDefault.bind(this);
    }

        //May refactor this to use the browser router links...or maybe imbed it...?
    renderDefault() {
        return(
            <div className="top-navbar">
            <a href="http://localhost:3000">Main</a>
            <a href="http://localhost:3000/views">Views</a>
            <a href="http://localhost:3000/upload">Upload</a>
            <a href="http://localhost:3000/download">Download</a>
        </div>
        );
    }

    render() {
        return(
            <div className="routes-navbar">
               <ul>
                <li><Link to="/main">Main</Link></li>
                <li><Link to="/upload">Upload</Link></li>
                <li><Link to="/download">Download</Link></li>
                <li><Link to="/views">Views</Link></li>
                </ul>
            </div>
        );
    }

}

export default Navbar