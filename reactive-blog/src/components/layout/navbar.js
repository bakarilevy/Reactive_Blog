import React, {Component} from 'react';
import './navbar.css';
import Routes from '../routes';
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
        </div>
        );
    }

    render() {
        return(
            <div className="top-navbar">
                <a href="http://localhost:3000">Main</a>
                <a href="http://localhost:3000/views">Views</a>
                <a href="http://localhost:3000/upload">Upload</a>
            </div>
        );
    }

}

export default Navbar