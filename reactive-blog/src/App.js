import React, {Component} from 'react';
import './App.css';
import Routes from './components/routes';
import Header from './components/layout/header';
import Navbar from './components/layout/navbar';
import Column from './components/layout/column';
class App extends Component{


render(){
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Column/>
      <body>
            <Routes/>
      </body>
    </div>
    );
  }
}

export default App;
