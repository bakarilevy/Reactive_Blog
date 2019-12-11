import React, { Component } from 'react'
import './Upload.css'

class Upload extends Component{

    constructor(props){
        super(props);
    }

    //We will use the dropzone component to make it super fancy!

    render() {
        return(
            <div className="Upload">
                <span className="Title">UploadFiles</span>
                <div className="Content">
                    
                </div>
                <div className="Files"/>
                <div className="Actions"/>
            </div>
        );
    }

}

export default Upload