import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 import {faAd, faAddressBook,faAddressCard,faGlobeAfrica, faHome, faNewspaper} from '@fortawesome/free-solid-svg-icons'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import News from './News';
import Login from './Login';
import Dashbord from './Dashbord';

export class Nav extends Component {
    render() {
        return (
            <div>
                <Router>
                <ul>
  <li><Link to={"/"}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Home</Link></li>
  <li><Link to={"/News"}><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>News</Link></li>
  <li><Link to={"/About"}><FontAwesomeIcon icon={faGlobeAfrica}></FontAwesomeIcon>About</Link></li>
  <li><Link to={"/Contact"}><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>Contact</Link></li>
  <li><Link to={"/Login"}><FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>Login</Link></li>
  <li><Link to={"/Dashbord"}><FontAwesomeIcon icon={faAd}></FontAwesomeIcon>Dashbord</Link></li>
</ul>
<Switch>
    <Route path="/News">
        <News />
    </Route>
    <Route path="/Contact">
        <Contact />
    </Route>
    <Route path="/About">
        <About />
    </Route>
    <Route path="/Login">
        <Login/>
    </Route>
    <Route path="/Dashbord">
        <Dashbord/>
    </Route>
    <Route path="/">
        <Home/>
        
    </Route>
</Switch>
</Router>

            </div>
        )
    }
}

export default Nav
