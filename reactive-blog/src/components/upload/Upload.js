import React, { Component } from 'react'
import './Upload.css'
import Dropzone from '../dropzone/Dropzone'
import Progress from '../progress/Progress'

class Upload extends Component{

    constructor(props){
        super(props);
        this.state = {
            files: [],
            uploading: false,
            uploadProgress: {},
            successfullyUploaded: false
        };
        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.renderActions = this.renderActions.bind(this);
        this.newSend = this.newSend.bind(this);
    }

    onFilesAdded(files) {
        this.setState(prevState => ({
            files: prevState.files.concat(files)
        }));
    }

    renderProgress(file) {
        const uploadProgress = this.state.uploadProgress[file.name];
        if(this.state.uploading || this.state.successfullyUploaded) {
            return(
                <div className="ProgressWrapper">
                    <Progress progress={uploadProgress ? uploadProgress.percentage : 0}/>
                    <img
                        className="CheckIcon"
                        alt="done"
                        src="dwcheckyes.png"
                        style={{
                            opacity:
                                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
                        }}
                    />
                </div>
            );
        }
    }

    renderActions()  {
        if(this.state.successfullyUploaded) {
            return(
                <button
                    onClick={()=>
                        this.setState({ files: [], successfullyUploaded: false })
                    }
                >
                    Clear
                </button>
            );
        } else {
            return(
                <button
                    disabled={this.state.files.length < 0 || this.state.uploading}
                    onClick={this.uploadFiles}
                >
                    Upload
                </button>
            );
        }
    }

    async uploadFiles() {
        this.setState({ uploadProgress: {}, uploading: true });
        const promises = [];
        this.state.files.forEach(file =>{
            promises.push(this.sendRequest(file));
        });
        try {
                await Promise.all(promises);

                this.setState({successfullyUploaded: true, uploading: false});
        } catch(e) {
            //Not production ready! do some error handling here
            this.setState({successfullyUploaded: true, uploading: false});
        }
    }

    newSend()  {
        //const file = this.state.files[0];
        const files = this.state.files;
        const endpoint = "http://localhost:8080/uploadMultipleFiles";
        const data = new FormData();
        for(let i = 0; i < files.length; i++) {
            let file = files[i];
            data.append("files", file, file.name);
        }
       // data.append("file", file, file.name);
        fetch(
            endpoint, {
                method: 'POST',
                body: data,
            }
        )
    }

    sendRequest(file)  {
        return new Promise((resolve, reject)=>{
            const request = new XMLHttpRequest();
            //Event listener to observe progress of request.
            request.upload.addEventListener("progress", event => {
                if(event.lengthComputable) {
                    const copy = { ...this.state.uploadProgress };
                    copy[file.name] = {
                        state: "pending",
                        percentage: (event.loaded /event.total) * 100
                    };
                    this.setState({ uploadProgress: copy });
                }
            })

            request.upload.addEventListener("load", event => {
                const copy = {...this.state.uploadProgress };
                copy[file.name] = { state: "done", percentage: 100 };
                this.setState({uploadProgress: copy});
                resolve(request.response);
            });

            request.upload.addEventListener("error", event => {
                const copy = { ...this.state.uploadProgress };
                copy[file.name] = { state: "error", percentage: 0}
                this.setState({ uploadProgress: copy });
                reject(request.response);
            });

            const formData = new FormData();
            formData.append("file", file, file.name);

            request.open("POST", "http://localhost:8080/uploadFile");
            request.send(formData);
        });
    }

    render() {
        return(
            <div className="Upload">
                    <button onClick={this.newSend}>TRY THIS</button>
                <span className="Title">UploadFiles</span>
                <div className="Content">
                    <div>
                        <Dropzone
                        onFilesAdded={this.onFilesAdded}
                        disabled={this.state.uploading || this.state.successfullyUploaded}
                        />
                    </div>
                <div className="Files">
                    {this.state.files.map(file => {
                        return(
                            <div key={file.name} className="Row">
                                <span className="Filename">{file.name}</span>
                                {this.renderProgress(file)}
                            </div>
                        );
                    })}
                 </div>
                </div>
                <div className="Actions">{this.renderActions()}</div>
            </div>
        );
    }

}

export default Upload