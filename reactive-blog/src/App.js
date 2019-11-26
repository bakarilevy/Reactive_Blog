import React, {Component} from 'react';
import Posts from './components/posts'
import logo from './logo.svg';
import './App.css';

class App extends Component{

  //This will hold the data pending that should be rendered
  state = {
    posts: []
  }

  //This will fetch the posts and executes after component mounts
  componentDidMount() {
    fetch('http://localhost:8080/posts/')
    .then(res => res.json())
    .then((data) => {
      this.setState({posts: data})
    })
    .catch(console.log)
  }

render(){
  return (
    <div className="App">
      <body>
          <Posts posts={this.state.posts}/>
      </body>
    </div>
    );
  }
}

export default App;
