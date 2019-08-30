import React, { useState } from "react";
import { Card as Joke, Icon } from "semantic-ui-react";

function Card(props) {
  const [upVotes, setUpvotes] = useState(0);
  const [downVotes, setDownvotes] = useState(0);
  const [joke, setJoke] = useState(props.joke);

  function upVote(e) {
    //need way to save state on refresh and limit votes to 1 per user

    e.preventDefault();
    setUpvotes(upVotes + 1);
  }

  function downVote(e) {
    //need way to save state on refresh and limit votes to 1 per user
    e.preventDefault();
    setDownvotes(downVotes + 1);
  }

  return (
    //Semantic UI 'Card' imported as 'Joke'
    <Joke key={props.key} props>
      <Joke.Content>
        <Joke.Description>
          <p className='p1'>#{joke.id}</p>
          <p className='p2'>{joke.setup}</p>
          <p className='p3'>{joke.punchline}</p>
          <p>
            <span><Icon name="arrow up" size="big" onClick={e => upVote(e)} />+{upVotes}</span>
            <span><Icon name="arrow down" size="big" onClick={e => downVote(e)} />-{downVotes}</span>
          </p>
        </Joke.Description>
      </Joke.Content>
    </Joke>
  );
}

export default Card;
