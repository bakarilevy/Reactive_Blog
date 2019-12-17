import React, {Component} from 'react';
import './container.css';
import Header from './header';
import Navbar from './navbar';
import Column from './column';
import Footer from './footer';
import Routes from '../routes';
class Container extends Component {

constructor(props) {
    super(props);
}
render() {
    return(
        <div className="container">
            <Header/>
            <Navbar/>
            <Column/>
            <Routes/>
            <Footer/>
        </div>
    );
    }
}

export default Container