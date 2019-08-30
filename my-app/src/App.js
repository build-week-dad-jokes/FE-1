import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// components
import Navigation from "./components/Navigation";
import AddJoke from "./components/AddJoke";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route path="/addjoke" component={AddJoke} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
