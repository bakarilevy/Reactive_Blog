import React, {Component} from 'react';
import PostForm from '../postform/PostForm';
import './View.css';
import Posts from '../posts/posts';

class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formId: 0,
            message: "",
            posts: []
        }
    }


    componentDidMount() {
        fetch('http://localhost:8080/posts/')
        .then(res => res.json())
        .then((data) => {
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
                <p>From here you can create a new post.</p>
                <PostForm formId={this.state.formId} />
                <Posts posts={this.state.posts}/>
            </div>
        );
    }

}

export default View