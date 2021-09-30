
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Education from "./Education";
import Home from './Home';
import Project from "./Project";
import Courses from "./Courses";
import Certi from "./Certi";

export default function Navbar(props) {
    return (
        <>
        <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">{props.name}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon bg-dark"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              <div className="d-flex">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Education">Education</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Project">Project</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Courses">Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Certi">Certificates</Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Education">
            <Education />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
          <Route path="/Courses">
            <Courses />
            </Route>
          <Route path="/Certi">
          <Certi />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <br />
        <br />
        </Router>
        </>
    )
}
