import React, { Component } from 'react';

class PostForm extends Component {

    constructor(props) {
        super(props);
    //    this.handleChange = this.handleChange.bind(this);
    //    this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handleChange(event) {}

    //handleSubmit(event) {}

    render() {
        return(
            <form>
                <label>Test Label
                    <select>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                    </select>
                </label>
            </form>
        );
    }

}

export default PostForm