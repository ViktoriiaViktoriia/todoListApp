import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import home from './1160546.png';


class Navbar extends React.Component{
    render() {
        return (
          <div className = "menu">
            <BrowserRouter>
              <nav id = "nav">
                <header className="App-header">
                  <ul>
                  <li><Link to="/home"><img className="todo_img_home" src={home} alt="home"></img>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </header> 
              </nav>
              <div>
                <Switch>
                  <Route path="/home"><Home/></Route>
                  <Route path="/about"><About/></Route>
                  <Route path="/contact"><Contact/></Route>
               </Switch>
              </div> 
              
              <footer className="App-footer">©Viktoriia Sakomaa, ToDo App, 2021</footer>
              
            </BrowserRouter>
          </div>
        );
    }
}

export default Navbar;