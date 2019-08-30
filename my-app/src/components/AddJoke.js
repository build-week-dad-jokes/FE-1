import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddJoke = (props) => {
  const id = localStorage.getItem('jokeId');

  // hooks
  const [newJoke, setNewJoke] = useState({});
  const [setUpValue, setSetUpValue] = useState('');
  const [punchlineValue, setPunchlineValue] = useState('');
  const [placeHolderId, setPlaceHolderId] = useState('');

  // event handlers
  const handleChanges = e => {
    setNewJoke({...newJoke, [e.target.name]: e.target.value});
    if(e.target.name === 'setup') {
      setSetUpValue(e.target.value);
    }
    if(e.target.name === 'punchline') {
      setPunchlineValue(e.target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if(e.target.checkbox_both === "on") {e.target.checkbox_public = true; e.target.checkbox_private = true};
    if(e.target.checkbox_public === "on") {e.target.checkbox_public = true};
    if(e.target.checkbox_private === "on") {e.target.checkbox_private = true};
    axios.post('https://dadjokes-be.herokuapp.com/api/jokes/addjoke', {setup: newJoke.setup, punchline: newJoke.punchline, public: 1, private: 1 })
      .then(response => {
        console.log(response);
        axios.get('https://dadjokes-be.herokuapp.com/api/jokes')
          .then(response => {
            console.log(response);
            window.location.href='./profile';
          })
          .catch(error => {
            console.log(error.response);
          });
      })
  };

  useEffect(() => {
    if(id !== null) {
    axios.get('https://dadjokes-be.herokuapp.com/api/jokes')
      .then(response => {
        const jokeInArr = response.data.find(joke => `${joke.id}` === id);
        setSetUpValue(jokeInArr.setup);
        setPunchlineValue(jokeInArr.punchline);
        setPlaceHolderId(jokeInArr.id);
        if(jokeInArr) setNewJoke(jokeInArr);
      })
      .catch(error => {
        console.log(error);
      });
    }else {
      setSetUpValue('');
      setPunchlineValue('');
    };
  }, [id]);

  const handleEdit = e => {
    e.preventDefault();
    axios.put(`https://dadjokes-be.herokuapp.com/api/jokes/updatebyid/${placeHolderId}`, newJoke)
      .then(response => {
        console.log('post', response);
        window.location.href='./profile';
      })
      .catch(error => {
        console.log('post error', error.response);
      });
  };

  const handleCancel = e => {
    e.preventDefault();
    window.location.href= './';
  };

  return (
    <form className="addJokeForm" onSubmit={e => handleSubmit(e)}>
      <h3>Create a joke</h3>
      <div className="textAreaDiv">
        <div>Set up</div>
        <textarea maxlength="100" rows='4' cols='30' name='setup' placeholder='Enter the setup of your joke. Must be 100 characters or less.' value={setUpValue} onChange={e => handleChanges(e)} />
        <div>Punchline</div>
        <textarea maxlength="100" rows='4' cols='30' name='punchline' placeholder='Enter the punchline of your joke. Must be 100 characters or less.' value={punchlineValue} onChange={e => handleChanges(e)} />
      </div>
      <br />
      <br />
      <div className="labelDiv">
        <label className="container"> public
          <input className="checkbox" type='checkbox' name='checkbox_public' onChange={e => handleChanges(e)} />
        </label>
        <label className="container"> private
          <input className="checkbox" type='checkbox' name='checkbox_private' onChange={e => handleChanges(e)} />
        </label>
        <label className="container"> both
          <input className="checkbox" type='checkbox' name='checkbox_both' onChange={e => handleChanges(e)} />
        </label>
      </div>
      <br />
      <br />
      <div className="buttonsDiv">
        <button onClick={e => handleCancel(e)}>cancel</button>
        {id === null ?
          <button onClick={e => handleSubmit(e)} >save</button> :
          <button onClick={e => handleEdit(e)}>edit</button>
        }
      </div>
    </form>
  )
}

export default AddJoke;
