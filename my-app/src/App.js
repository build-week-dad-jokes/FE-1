import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// components
import Navigation from './components/Navigation';
import AddJoke from './components/AddJoke';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={Navigation} />
        <Route path='/addjoke' component={AddJoke} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <div>Public Jokes</div>
      </div>

    </Router>
  );
}

export default App;
