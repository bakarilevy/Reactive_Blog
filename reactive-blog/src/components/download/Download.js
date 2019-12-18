import React, { Component } from 'react';
import './Download.css';

class Download extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            url: 'http://localhost:8080/downloadFile/',
            href: '',
            fileFound: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.sleep = this.sleep.bind(this);
        this.renderDownloadButton = this.renderDownloadButton.bind(this);
        this.searchFile = this.searchFile.bind(this);
    }


    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    renderDownloadButton() {
        return(
        <div className="download-button">
            <a href={this.state.href} download={this.state.href}><button>Download</button></a>
        </div>
        )
    }

    searchFile()  {
        let url = this.state.url + this.state.search;
        let request = new Request(url);
        fetch(request)
        .then((response)=>{
            if(response.ok){
                this.setState({fileFound: true});
                this.setState({href:url});
            }
        });
        this.sleep(300).then(()=>{
            if(this.state.fileFound){
                alert("File was found.");
            } else {
                alert("File was not found.");
            }
        })
    }


    render(){
        return(
            <div className="MainForm">
                <div>
                    <label>Search File to Download
                        <input type='text' name='search' onChange={this.handleChange} value={this.state.search}></input>
                        <button className="search-button" onClick={this.searchFile}>Search</button>
                    </label>
                </div>
                    {this.state.fileFound && this.renderDownloadButton()}
                </div>
        );
    }

}

export default Download