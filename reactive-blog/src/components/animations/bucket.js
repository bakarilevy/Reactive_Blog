import React, { Component } from 'react';
import './bucket.css';
import Canvas from './canvas/canvas';

class Bucket extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="animation-bucket">
                <Canvas/>
            </div>
        );
    }

}

export default Bucket