import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Headroom from "react-headroom";
import ScrollUpButton from "react-scroll-up-button";

// import 'bootstrap/dist/css/bootstrap.min.css';


import Footer from './components/Footer';
import ScrollToTop from "./hooks/ScrollToTop";
import Work from "./pages/Work";
import About from "./pages/About";
import Playground from "./pages/Playground";
import NexusBuilders from "./pages/NexusBuilders";
import DigitalMedia from "./pages/DigitalMedia";
import Buddy from "./pages/Buddy";


import { NavHashLink } from 'react-router-hash-link';


import './App.css';

function App() {
  // Code for scrolling to top on refresh from https://stackoverflow.com/questions/60813961/react-scroll-to-top-on-page-refresh-dont-restore-position
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <React.Fragment>
    <main>
      <Router>
        <Headroom>
          <Navbar expand="lg" sticky="top">
            <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>kayla chea.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <NavHashLink className="nav-hover" activeClassName="active" exact to={'/work/#case-studies'}>design</NavHashLink>
                <NavHashLink className="nav-hover" activeClassName="active" exact to={'/work/#code'}>code</NavHashLink>
                {/* <NavLink className="nav-hover" activeClassName="active" exact to={process.env.PUBLIC_URL + '/'}>work</NavLink> */}
                {/* <NavLink activeClassName="active" exact to={process.env.PUBLIC_URL + '/playground'}>playground</NavLink> */}
                <NavLink className="nav-hover" activeClassName="active" exact to={process.env.PUBLIC_URL + '/about'}>about</NavLink>
                <a className="nav-hover" href="https://drive.google.com/file/d/1vZGzG0Hdyr7Z24i5_dQl6Nw7VUx77gom/view" target="_blank" rel="noopener noreferrer">resume</a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Headroom>

        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Work}></Route>
          <Route exact path="/work" component={Work}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/playground" component={Playground}></Route>
          <Route exact path="/playground/digital-media" component={DigitalMedia}></Route>
          <Route exact path="/work/nexus-builders" component={NexusBuilders}></Route>
          <Route exact path="/work/buddy" component={Buddy}></Route>
        </Switch>

        <ScrollUpButton ContainerClassName="AnyClassForContainer" TransitionClassName="AnyClassForTransition">
          <img src="https://www.flaticon.com/svg/static/icons/svg/130/130906.svg" alt="Up arrow"></img>
        </ScrollUpButton>
      </Router>
    </main>
    <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
