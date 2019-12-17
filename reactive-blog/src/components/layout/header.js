import React, {Component} from 'react';
import './header.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="header">
                <h1>Header</h1>
            </div>
        );
    }

}

export default Header