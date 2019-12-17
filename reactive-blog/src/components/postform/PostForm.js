import React, { Component } from 'react';
import './PostForm.css';

class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "Please enter the content for your new post here...",
            title: "Title of Post"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendPost = this.sendPost.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        //find some way to call a post request function here.
        //alert('A new post has been submitted: ' + this.state.value);
        //this.sendAgain();
        this.sendPost();
        event.preventDefault();
    }

    sendPost() {
        const url = 'http://localhost:8080/posts';
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: this.props.formId,
                    title: this.state.title,
                    content: this.state.value
                })
            });
    }


    render() {
        return(
            <div className="PostForm">
            <form  class='styleform' onSubmit={this.handleSubmit}>
                <label for="title"> New Post Title</label>
                <input type="text" name="title" class="titleInput" value={this.state.title} onChange={this.handleChange}/>
                <label for="content"> New Post Content</label>
                <textarea name="value" class="valueInput" value={this.state.value} onChange={this.handleChange}/>
                <button class="submitbutton" onClick={this.sendPost}>Submit</button>
            </form>
            </div>
        );
    }

}

export default PostForm