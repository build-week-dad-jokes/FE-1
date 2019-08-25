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
      axios.post('https://5d6175f45f6487001406047a.mockapi.io/api/v1/user', newUser)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }else {
      alert('Passwords must match.');
    };
  };

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <h2>Create new account</h2>
        <input type='text' placeholder='username' name='username' onChange={e => handleChanges(e)} />
        <br />
        <br />
        <input type='email' placeholder='email' name='email' onChange={e => handleChanges(e)} />
        <br />
        <br />
        <input type='password' placeholder='password' name='password' onChange={e => handleChanges(e)} />
        <br />
        <br />
        <input type='password' placeholder='confirm password' name='confirm' onChange={e => handleChanges(e)} />
        <br />
        <br />
        <button>accept and submit</button>
        <br />
        <br />
        <div>By submitting you accept the terms and conditions.</div>
      </form>
    </>
  )
}

export default SignUp;
