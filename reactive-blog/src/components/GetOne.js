import React, { Component } from 'react';
import Post from './Post';

class GetOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '2',
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
    }

    // componentDidMount() {

    // }

    // shouldComponentUpdate() {
    //     return this.state.formSubmitted;
    // }

    // componentDidUpdate() {

    // }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    //I may need to async await the createOne function, then attempt to render it.


    handleSubmit() {
        this.createOne();
        this.setState({formSubmitted: true});
        this.getOne();
    }

    createOne() {

        let myPost = new Post(this.state.id, this.state.title, this.state.content);
        //Await this then maybe getOne? or possibly have an endpoint that saves post and returns it?
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
        .then(res => res.json())
        .then((data) => {
          this.setState({renderedPost: [data]})
        })
        .catch(console.log)
    }

    renderMyPost()  {
        let myPost = this.state.renderedPost;
        return(
        <div>
        <center>My Post</center>
        {myPost.map((post)=>(
                <div class="card">
                <div class="card-body"></div>
                <h5 class="card-title">{post.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{post.id}</h6>
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