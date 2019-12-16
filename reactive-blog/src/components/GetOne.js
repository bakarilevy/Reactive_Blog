import React, { Component } from 'react';
import Post from './Post';

class GetOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '1',
            title: 'foo',
            content: 'bar',
            formSubmitted: false,
            renderedPost:[],
            url: 'http://localhost:8080/posts/',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createOne = this.createOne.bind(this);
        this.getOne = this.getOne.bind(this);
        this.renderMyPost = this.renderMyPost.bind(this);
        this.sleep = this.sleep.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }


    handleSubmit() {
        this.createOne();
        this.setState({formSubmitted: true});
        this.getOne();

    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    createOne() {

        let myPost = new Post(this.state.id, this.state.title, this.state.content);
        fetch(
            this.state.url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(myPost),
        });
    }

    getOne() {
        const endpoint = this.state.url + this.state.id;
        fetch(endpoint)
        .then((data) => {
            this.setState({renderedPost: [data]});
        })
        .catch(console.log)
        console.log(this.state.renderedPost[0])
    }

    renderMyPost()  {
        let myPost = this.state.renderedPost;
        return(
        <div>
        <center>My Post</center>
        {myPost.map((post)=>(
                <div className ="card">
                    <div className="card-body"></div>
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{post.id}</h6>
                    <p>{post.content}</p>
                </div>
            )
                )}
        </div>
        );
    }

    render()  {
        return(
        <div>
        
            <label>New Post
                Id
                    <input type='text' name='id' onChange={this.handleChange} value={this.state.id}/>
                Title
                    <input type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
                Content
                    <input type='text' name='content' onChange={this.handleChange} value={this.state.content}/>
            </label>
            <button onClick={this.handleSubmit}> Create! </button>
        

            {this.state.formSubmitted && this.renderMyPost()}

        </div>
        );
    }

}

export default GetOne