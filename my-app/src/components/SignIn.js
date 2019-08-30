import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignIn = (props) => {

  // hooks
  const [user, setUser] = useState({});

  // event handlers
  const handleChanges = e => {
    setUser({...user, [e.target.name]: e.target.value});
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://dadjokes-be.herokuapp.com/api/auth/login', user)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        window.location.href='./profile';
      })
      .catch(error => {
        console.log(error);
      })
  };

  return(
    <form className="signInDiv" onSubmit={e => handleSubmit(e)}>
      <h2>Welcome back</h2>
      <input className="default" type='text' placeholder='username or email' name='username' onChange={e => handleChanges(e)} />
      <br />
      <br />
      <input className="default" type='password' placeholder='password' name='password' onChange={e => handleChanges(e)} />
      <br />
      <br />
      <button>sign in</button>
      <br />
      <br />
      <div>Don't have an account? <Link className="linkSignUp" to='/signup'>Sign up now</Link></div>
    </form>
  )
}

export default SignIn;
