import React, {Component} from 'react';
import Posts from './components/posts';
import MainPage from './components/MainPage';
import logo from './logo.svg';
import './App.css';
import Routes from './components/routes';
import PostForm from './components/PostForm';

class App extends Component{


render(){
  return (
    <div className="App">
      <body>
            <Routes/>
      </body>
    </div>
    );
  }
}

export default App;
