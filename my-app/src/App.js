import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// components
import Navigation from "./components/Navigation";
import AddJoke from "./components/AddJoke";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CardList from "./components/CardList";
import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={CardList} />
        <Route path="/addjoke" component={AddJoke} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
