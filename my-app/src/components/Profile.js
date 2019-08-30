import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Profile = (props) => {

  const [joke, setJoke] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('https://dadjokes-be.herokuapp.com/api/jokes')
      .then(response => {
        console.log(response.data.filter(item => item.private === 1));
        setJoke(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleEdit = joke => {
    localStorage.setItem('jokeId', joke.id);
    props.history.push('./addjoke');
  };

  const handleDelete = joke => {
    axiosWithAuth()
      .delete(`https://dadjokes-be.herokuapp.com/api/jokes/delete/${joke.id}`)
        .then(response => {
          console.log(response);
          window.location.href='./profile';
        })
        .catch(error => {
          console.log(error);
        });
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <>
      <button onClick={e => handleLogout(e)}>logout</button>
      <div className="box">
        {joke.map(joke => (
          <div className="editDelete" key={joke.id}>
            <div>{joke.setup}</div>
            <div>{joke.punchline}</div>
            <div>public: {joke.checkbox_public ? 'true' : 'false'}</div>
            <div>private: {joke.checkbox_private ? 'true' : 'false'}</div>
            <div className="editButtons">
              <button onClick={() => handleEdit(joke)}>edit</button>
              <button onClick={() => handleDelete(joke)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Profile;
