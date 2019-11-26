import React, {Component} from 'react';
import Posts from './components/posts';
import MainPage from './components/MainPage';
import logo from './logo.svg';
import './App.css';
import Routes from './components/routes';
import PostForm from './components/PostForm';

class App extends Component{

  //This will hold the data pending that should be rendered
  state = {
    posts: [],
    time: Date.now(),
  };

  //This will fetch the posts and executes after component mounts
  componentDidMount() {
    //This rerenders the page every second 
    this.interval = setInterval(()=> this.setState({time: Date.now()}), 1000);

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

render(){
  return (
    <div className="App">
      <body>
            <MainPage time={this.state.time}/>
            <Posts posts={this.state.posts}/>
            <PostForm/>
      </body>
    </div>
    );
  }
}

export default App;
//    <MainPage time={this.state.time}/>
//  <Posts posts={this.state.posts}/>
//  <Routes time={this.state.time}/>