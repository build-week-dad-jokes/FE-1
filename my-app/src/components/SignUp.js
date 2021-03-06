import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {

  // hooks
  const [newUser, setNewUser] = useState({});

  // event handlers
  const handleChanges = e => {
    setNewUser({...newUser, [e.target.name]: e.target.value});
  };
  const handleSubmit = e => {
    e.preventDefault();
    if(newUser.password === newUser.confirm) {
      console.log(newUser);
      axios.post('https://dadjokes-be.herokuapp.com/api/auth/register', {username: newUser.username, password: newUser.password})
        .then(response => {
          console.log(response);
          window.location.href='./signin';
        })
        .catch(error => {
          console.log(error);
        });
    }else {
      alert('Passwords must match.');
    };
  };

  return (
    <form className="signUpDiv" onSubmit={e => handleSubmit(e)}>
      <h2>Create new account</h2>
      <input className="default" type='text' placeholder='username' name='username' onChange={e => handleChanges(e)} />
      <br />
      <br />
      <input className="default" type='email' placeholder='email' name='email' onChange={e => handleChanges(e)} />
      <br />
      <br />
      <input className="default" type='password' placeholder='password' name='password' onChange={e => handleChanges(e)} />
      <br />
      <br />
      <input className="default" type='password' placeholder='confirm password' name='confirm' onChange={e => handleChanges(e)} />
      <br />
      <br />
      <button>accept and submit</button>
      <br />
      <br />
      <div>By submitting you accept the terms and conditions.</div>
    </form>
  )
}

export default SignUp;
