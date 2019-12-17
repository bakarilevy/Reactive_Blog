import React, {Component} from 'react';
import './App.css';
import Routes from './components/routes';
import Container from './components/layout/container';
class App extends Component{


render(){
  return (
    <div className="App">
      <body>
            <Routes/>
            <Container/>
      </body>
    </div>
    );
  }
}

export default App;
