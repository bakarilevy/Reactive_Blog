import React, { Component } from 'react';

class MainPage extends Component {


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
                <p>This is a test to see if it works</p>
                <div>{this.props.time}</div>
            </div>
        );
    }

};

export default MainPage