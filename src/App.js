import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Profile from "./pages/Profile";
import Resume from "./pages/resume";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
