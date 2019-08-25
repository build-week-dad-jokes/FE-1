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

  return (
    <>
      {joke.map(joke => (
        <div key={joke.id}>
          <div>{joke.setup}</div>
          <div>{joke.punchline}</div>
          <button onClick={() => handleEdit(joke)}>edit</button>
          <br />
        </div>
      ))}
    </>
  )
}

export default Profile;
