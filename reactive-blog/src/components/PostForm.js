import React, { Component } from 'react';

class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "Please enter your contact information here..."
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value});
    }

    handleSubmit(event) {
        alert('A request has been submitted: ' + this.state.value);
        event.preventDefault();
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