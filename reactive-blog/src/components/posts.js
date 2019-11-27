import React, { Component } from 'react';

//This component will render posts from data received
//it needs to be imported into App.js
class Posts extends Component  {

    //This will hold the data pending that should be rendered
    constructor() {
        super();
        this.state = {
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
        .catch(console.log)
    }

    
    render() {
        let posts = this.state.posts;

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