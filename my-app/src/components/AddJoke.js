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
    axios.post('https://5d6175f45f6487001406047a.mockapi.io/api/v1/joke', newJoke)
      .then(response => {
        console.log(response);
        axios.get('https://5d6175f45f6487001406047a.mockapi.io/api/v1/joke')
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      })
    window.location.href='./profile';
  };

  useEffect(() => {
    if(id !== null) {
    axios.get('https://5d6175f45f6487001406047a.mockapi.io/api/v1/joke')
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
    axios.put(`https://5d6175f45f6487001406047a.mockapi.io/api/v1/joke/${placeHolderId}`, newJoke)
      .then(response => {
        console.log('post', response);
      })
      .catch(error => {
        console.log('post error', error.response);
      });
    window.location.href='./profile';
  };

  const handleCancel = e => {
    e.preventDefault();
    window.location.href= './';
  };

  return (
    <form>
      <h3>Create a joke</h3>
      <div>Set up</div>
      <textarea rows='4' cols='30' name='setup' value={setUpValue} onChange={e => handleChanges(e)} />
      <br />
      <div>Punchline</div>
      <textarea rows='4' cols='30' name='punchline' value={punchlineValue} onChange={e => handleChanges(e)} />
      <br />
      <br />
      <input type='checkbox' name='checkbox_public' onChange={e => handleChanges(e)} /><span>public</span>
      <input type='checkbox' name='checkbox_private' onChange={e => handleChanges(e)} /><span>private</span>
      <input type='checkbox' name='checkbox_both' onChange={e => handleChanges(e)} /><span>both</span>
      <br />
      <br />
      <button onClick={e => handleCancel(e)}>cancel</button>
      {id === null ?
        <button onClick={e => handleSubmit(e)} >save</button> :
        <button onClick={e => handleEdit(e)}>edit</button>
      }

    </form>
  )
}

export default AddJoke;
