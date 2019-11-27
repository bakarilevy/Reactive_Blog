import React, { Component } from 'react';


class MainPage extends Component {

    constructor() {
        super();
        this.state = {
            time: Date.now()
        };
    }

    componentDidMount() {
        this.interval = setInterval(()=> this.setState({time: Date.now()}), 1000);
    }

    //This is cleanup for the importing of the date time.
  componentWillUnmount() {
    clearInterval(this.interval);
  }

    render() {
        return(
            <div className="MainPage">
                <p>Welcome to the Reactful Blog service!</p>
                <div>{this.state.time}</div>
            </div>
        );
    }

}



export default MainPage