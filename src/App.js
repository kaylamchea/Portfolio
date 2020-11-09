import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ScrollToTop from "./ScrollToTop";
import WorkPage from "./WorkPage";
import AboutPage from "./AboutPage";
import FunPage from "./FunPage";
import NexusBuilders from "./NexusBuilders";

import Headroom from "react-headroom";
import ScrollUpButton from "react-scroll-up-button";

function App() {
  // Code for scrolling to top on refresh from https://stackoverflow.com/questions/60813961/react-scroll-to-top-on-page-refresh-dont-restore-position
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <Router>
      <Headroom>
      <Navbar expand="lg" sticky="top">
        <Navbar.Brand href="/work">Kayla Chea</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <NavLink activeClassName="active" exact to="/work">Work</NavLink>
            <NavLink activeClassName="active" exact to="/fun">Fun</NavLink>
            <NavLink activeClassName="active" exact to="/about">About</NavLink>
            <a href="https://drive.google.com/file/d/1--4k5WQrwN_4lsw8hyjTWFhcpl_9sJrq/view" target="_blank" rel="noopener noreferrer">Resume</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Headroom>

      <ScrollToTop />
      <Switch>
        <Route exact path="/work" component={WorkPage}>
          {/* <Work /> */}
        </Route>
        <Route exact path="/about" component={AboutPage}>
          {/* <About /> */}
        </Route>
        <Route exact path="/fun" component={FunPage}></Route>
        <Route exact path="/work/nexus-builders" component={NexusBuilders}></Route>
      </Switch>

      <ScrollUpButton ContainerClassName="AnyClassForContainer" TransitionClassName="AnyClassForTransition">
                <img src="https://www.flaticon.com/svg/static/icons/svg/130/130906.svg" alt="Up arrow"></img>
      </ScrollUpButton>

      <footer>
        <div className="socials">
          <a href="mailto: kaylamchea@hotmail.com">
            <img src="https://www.flaticon.com/svg/static/icons/svg/37/37572.svg" alt="letter"></img>
          </a>
          <a href="https://www.linkedin.com/in/kaylamchea/" target="_blank" rel="noopener noreferrer">
            <img src="https://www.flaticon.com/svg/static/icons/svg/25/25320.svg" alt="Linkedin logo"></img>
          </a>
          <a href="https://github.com/kaylamchea" target="_blank" rel="noopener noreferrer">
            <img src="https://www.flaticon.com/svg/static/icons/svg/733/733609.svg" alt="GitHub logo"></img>
          </a>
        </div>
        <div>Designed and Coded with <span role="img" aria-label="purple heart">💜</span></div>
        <div>© 2020 by Kayla Chea</div>
      </footer>
    </Router>
  );
}

// function Work() {
//   return (
//   );
// }

// function About() {
//   return (
//     <AboutPage></AboutPage>
//   );
// }

export default App;
