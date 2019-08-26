import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = (props) => {

  const [joke, setJoke] = useState([]);

  useEffect(() => {
    axios.get(`https://5d6175f45f6487001406047a.mockapi.io/api/v1/joke`)
      .then(response => {
        console.log(response.data);
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
    axios
      .delete(`https://5d6175f45f6487001406047a.mockapi.io/api/v1/joke/${joke.id}`)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    document.location.reload(true);
  }

  return (
    <>
      {joke.map(joke => (
        <div key={joke.id}>
          <div>{joke.setup}</div>
          <div>{joke.punchline}</div>
          <div>public: {joke.checkbox_public ? 'true' : 'false'}</div>
          <div>private: {joke.checkbox_private ? 'true' : 'false'}</div>
          <button onClick={() => handleEdit(joke)}>edit</button>
          <button onClick={() => handleDelete(joke)}>delete</button>
          <br />
        </div>
      ))}
    </>
  )
}

export default Profile;
