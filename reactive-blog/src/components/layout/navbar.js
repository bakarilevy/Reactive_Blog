import React, {Component} from 'react';
import './navbar.css';
class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="top-navbar">
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </div>
        );
    }

}

export default Navbar