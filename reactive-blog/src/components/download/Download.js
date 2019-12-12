import React, { Component } from 'react';

class Download extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            url: 'http://localhost:8080/downloadFile/',
            href: '',
            fileFound: false
        };
        this.getFile = this.getFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.testDownload = this.testDownload.bind(this);
        this.testFunction = this.searchFile.bind(this);
        this.sleep = this.sleep.bind(this);
        this.downloadButton = this.renderDownloadButton.bind(this);
        this.searchFile = this.searchFile.bind(this);
    }

    //I need to create a field to enter text that will post a request to the backend capture the file
    //then ideally open the file system to select save destination

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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
        // fetch(
        //     this.state.url + this.state.search,
        //     {
        //         method: 'GET'
        //     }
        // )
        this.setState({href: newHref});
        
    }

    renderDownloadButton() {
        return(
        <div className="DownloadButton">
            <button><a href={this.state.href} download={this.state.href}>Test</a></button>
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


//Component mount should get all file names and render on screen with a button next
//to each entry to download specific file
 //href={this.state.url}

    render(){
        return(
            <div className="MainForm">
                <div>
                    <label>Search File to Download
                        <input type='text' name='search' onChange={this.handleChange} value={this.state.search}></input>
                        <button onClick={this.searchFile}>Search</button>
                    </label>
                </div>
                    {this.state.fileFound && this.renderDownloadButton()}
                </div>
        );
    }

}

export default Download