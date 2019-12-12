import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

class Download extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            url: 'http://localhost:8080/downloadFile/',
            href: ''
        };
        this.getFile = this.getFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.testDownload = this.testDownload.bind(this);
    }

    //I need to create a field to enter text that will post a request to the backend capture the file
    //then ideally open the file system to select save destination

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    getFile() {
        fetch(
            this.state.url + this.state.search,
            {
                method: 'GET'
            }
        )
        .then((data)=>{this.setState({file: data})})
    }

    testDownload() {
        const newHref = this.state.url + this.state.search;
        fetch(
            this.state.url + this.state.search,
            {
                method: 'GET'
            }
        )
        this.setState({href: newHref});
        
    }
//Use the router to launch the file download to a new link
 //href={this.state.url}

    render(){
        return(
            <div className="MainForm">
            <div>
                <label>Download File
                    <input type='text' name='search' onChange={this.handleChange} value={this.state.search}></input>
                    <button onClick={this.testDownload}>Download</button>
                </label>
            </div>
            <div className="TestButton">
                <button><a href={this.state.href} download={this.state.href}>Test</a></button>
            </div>
            </div>
        );
    }

}

export default Download