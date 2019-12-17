import React, {Component} from 'react';
import './navbar.css';
import Routes from '../routes/routes';
class Navbar extends Component {

    constructor(props) {
        super(props);
        this.renderDefault = this.renderDefault.bind(this);
    }

        //May refactor this to use the browser router links...or maybe imbed it...?
    render() {
        return(
            <div className="top-navbar">
            <a href="http://localhost:3000">Main</a>
            <a href="http://localhost:3000/views">Views</a>
            <a href="http://localhost:3000/upload">Upload</a>
            <a href="http://localhost:3000/download">Download</a>
        </div>
        );
    }

    renderDefault() {
        return(
            <div className="routes-navbar">
                <Routes/>
            </div>
        );
    }

}

export default Navbar