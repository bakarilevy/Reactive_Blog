import React, { Component } from 'react';

class NewView extends Component {

    constructor(props) {
        //super(props); always needs to be called on class component constructors
        super(props);
        this.state = {
        //everything the component needs to keep track of should be here

        }
        //The binding of methods should be placed here
    }

    //How will this componenet look in the browser? render function, return jsx
    render(){
        return(
            <div>
            </div>
        );
    }

}

export default NewView