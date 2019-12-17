import React, { Component } from 'react';
import './posts.css';
import Post from '../post/post';
//This component will render posts from data received
//it needs to be imported into App.js
class Posts extends Component  {

    //This will hold the data pending that should be rendered
    constructor(props) {
        super(props);
    }



    
    render() {
        let posts = this.props.posts;

        return(
            <div className="post-list">
                {posts.map((post)=>(
                    <Post id={post.id} title={post.title} content={post.content}/>)
                )}
            </div>
        );
    }

}

export default Posts