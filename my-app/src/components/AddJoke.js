import React, { useState, useEffect } from 'react';

const AddJoke = () => {

  // hooks
  const [newJoke, setNewJoke] = useState({});

  // event handlers
  const handleChanges = e => {
    setNewJoke({...newJoke, [e.target.name]: e.target.value});
  };
  const handleSubmit = e => {
    e.preventDefault();
    if(newJoke.checkbox_both === "on") {
      setNewJoke({...newJoke, checkbox_public: "on", checkbox_private: "on"});
    };
    if(newJoke.checkbox_public === "on" && newJoke.checkbox_private === "on") {
      setNewJoke({...newJoke, checkbox_both: "on"});
    };
  };
  useEffect(() => {
    console.log(newJoke);
  }, [newJoke]);

  return (
    <form className="addJokeForm" onSubmit={e => handleSubmit(e)}>
      <h3>Create a joke</h3>
      <div>Set up</div>
      <textarea rows='4' cols='30' name='setup' onChange={e => handleChanges(e)} />
      <br />
      <div>Punchline</div>
      <textarea rows='4' cols='30' name='punchline' onChange={e => handleChanges(e)} />
      <br />
      <br />
      <label className="container"><span className="checkmark"></span> public
        <input className="checkbox" type='checkbox' name='checkbox_public' onChange={e => handleChanges(e)} />
      </label>
      <label className="container"><span className="checkmark"></span> private
        <input className="checkbox" type='checkbox' name='checkbox_private' onChange={e => handleChanges(e)} />
      </label>
      <label className="container"><span className="checkmark"></span> both
        <input className="checkbox" type='checkbox' name='checkbox_both' onChange={e => handleChanges(e)} />
      </label>
      <br />
      <br />
      <button>cancel</button>
      <button>save</button>
    </form>
  )
}

export default AddJoke;
