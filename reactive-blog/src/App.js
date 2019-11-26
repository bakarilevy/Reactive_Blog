import React, {Component} from 'react';
import Posts from './components/posts'
import logo from './logo.svg';
import './App.css';

class App extends Component{

  //This will hold the data pending that should be rendered
  state = {
    posts: [],
    time: Date.now(),
  };

  //This will fetch the posts and executes after component mounts
  componentDidMount() {
    this.interval = setInterval(()=> this.setState({time: Date.now()}), 1000);

    fetch('http://localhost:8080/posts/')
    .then(res => res.json())
    .then((data) => {
      this.setState({posts: data})
    })
    .catch(console.log)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

render(){
  return (
    <div className="App">
      <body>
      <div>{this.state.time}</div>
          <Posts posts={this.state.posts}/>
      </body>
    </div>
    );
  }
}

export default App;
