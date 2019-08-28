import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = (props) => {

  // hooks
  const [user, setUser] = useState({});

  // event handlers
  const handleChanges = e => {
    setUser({...user, [e.target.name]: e.target.value});
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
  };

  return(
    <form onSubmit={e => handleSubmit(e)}>
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
      <div>Don't have an account? <Link to='/signup'>Sign up now</Link></div>
    </form>
  )
}

export default SignIn;
