import React, { Component } from 'react';
import './posts.css';
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
            <div>
                <center>Post Cards</center>
                {posts.map((post)=>(
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

}

export default Posts