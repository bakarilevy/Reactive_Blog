import React, { Component } from 'react';

class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "Please enter the json for a new post here..."
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value});
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
                    id: '2',
                    title: 'foo',
                    content: 'bar'
                })
            });
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Test Label
                        <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type='submit' value='Submit'/>
            </form>
        );
    }

}

export default PostForm