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

  const handleEdit = () => {
    props.history.push('./addjoke');
  };

  return (
    <>
      {joke.map(user => (
        <div key={user.id}>
          <div>{user.setup}</div>
          <div>{user.punchline}</div>
          <button onClick={handleEdit}>edit</button>
          <br />
        </div>
      ))}
    </>
  )
}

export default Profile;
