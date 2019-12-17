import React, {Component} from 'react';
import './post.css';

class Post extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="post">
                <h2 className='post-id'>{this.props.id}</h2>
                <h3 className='post-title'>{this.props.title}</h3>
                <p className='post-content'>{this.props.content}</p>
            </div>
        );
    }

}

export default Post