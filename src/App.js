import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import Contact from "./components/Contact/index";
import Portfolio from "./components/Portfolio/index";
// import Project from "./components/Project/index";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer/index"

// class
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Portfolio />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
