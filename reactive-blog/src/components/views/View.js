import React, {Component} from 'react';
import PostForm from '../PostForm';

class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formId: 0,
            message: "Look at me! Wee!",
            posts: []
        }
    }


    componentDidMount() {
        fetch('http://localhost:8080/posts/')
        //This captures the json response I think
        .then(res => res.json())
        //This I believe is the equivalent of subscribing to the data recevived
        .then((data) => {
        //This I believe works because it captures the list of posts as an array
          this.setState({posts: data})
        })
        .then(()=>{
            let count = this.state.posts.length + 1;
            this.setState({formId: count});
        })
        .catch(console.log);
    }

    render() {
        return(
            <div className="View">
                <h1>Welcome to the views page</h1>
                <p>From here you can select from a number of different views.</p>
                <PostForm formId={this.state.formId} />
            </div>
        );
    }

}

export default View