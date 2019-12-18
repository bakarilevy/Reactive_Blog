import React, { Component } from 'react';
import './canvas.css';

class Canvas extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="animation-canvas">
                <canvas id="glCanvas" width="640" height="480"></canvas>
            </div>
        );
    }

}

export default Canvas