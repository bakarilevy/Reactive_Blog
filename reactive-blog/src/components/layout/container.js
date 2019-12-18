import React, {Component} from 'react';
import './container.css';
import Header from './header';
import Navbar from './navbar';
import Column from './column';
import Footer from './footer';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import MainPage from '../MainPage';
import PostForm from '../postform/PostForm';
import Posts from '../posts/posts';
import GetOne from '../GetOne';
import NewView from '../NewView';
import Upload from '../upload/Upload';
import Dropzone from '../dropzone/Dropzone';
import Progress from '../progress/Progress';
import Download from '../download/Download';
import View from '../views/View';
import Canvas from '../animations/canvas/canvas';

class Container extends Component {

constructor(props) {
    super(props);
}
render() {
    return(
        <div className="container">
            <Header/>
            <BrowserRouter>
            <Navbar/>
            <Column/>
                <Route path="/main" component={MainPage}/>
                <Route path="/form" component={PostForm}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/getone" component={GetOne}/>
                <Route path="/views" component={NewView}/>
                <Route path="/upload" component={Upload}/>
                <Route path="/dropzone" component={Dropzone}/>
                <Route path="/progress" component={Progress}/>
                <Route path="/download" component={Download}/>
                <Route path="/views" component={View}/>
                <Route path="/canvas" component={Canvas}/>
            </BrowserRouter>
            <Footer/>
        </div>
    );
    }
}

export default Container