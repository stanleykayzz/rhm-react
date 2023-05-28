
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from './components/Home';
// import Gallery from './components/Gallery';
import Login from './components/Login';
import Room from './components/Room';

// import Footer from './Footer';
import { Component } from "react";

export default class Main extends Component {
    render() {
      return (
        <div>
            Main
<br></br>
            On menu selection we will display different components
            <br></br>
            We can either use class extends components that will be more of a hassle to handle
            <br></br>
            Or use react Hooks that will take less code lines 
        </div>
        // <HashRouter>
        //   <div>
        //     <h1>Simple SPA</h1>
        //     <ul className="header">
        //       <li><NavLink to="/">Home</NavLink></li>
        //       <li><NavLink to="/Login">Login</NavLink></li>
        //       <li><NavLink to="/Gallery">Gallery</NavLink></li>
        //     </ul>
        //     <div className="content">
               
        //     </div>
        //   </div>
        // </HashRouter>
      );
    }
  };