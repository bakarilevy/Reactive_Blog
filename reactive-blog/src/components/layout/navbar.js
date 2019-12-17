import React, {Component} from 'react';
import './navbar.css';
class Navbar extends Component {

    constructor(props) {
        super(props);
    }

        //May refactor this to use the browser router links...or maybe imbed it...?

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