import React, { useEffect, useState } from "react";
import { Card as Joke, Icon } from "semantic-ui-react";

function Card(props) {
  const [upVotes, setUpvotes] = useState(0);
  const [downVotes, setDownvotes] = useState(0);
  const [joke, setJoke] = useState(props.joke);

  return (
    //Semantic UI 'Card' imported as 'Joke'
    <Joke key={joke.id}>
      <Joke.Content>
        <Joke.Description>
          #{joke.id}
          <span>{joke.author}</span>
        </Joke.Description>
        <Joke.Description>{joke.setup}</Joke.Description>
        <Joke.Description>{joke.punchline}</Joke.Description>
        <Joke.Description>
          <span>
            <Icon
              name="arrow up"
              size="big"
              onClick={() => setUpvotes(upVotes + 1)}
            />{" "}
            +{upVotes}
          </span>
          <span>
            <Icon
              name="arrow down"
              size="big"
              onClick={() => setDownvotes(downVotes + 1)}
            />
            -{downVotes}
          </span>
        </Joke.Description>
      </Joke.Content>
    </Joke>
  );
}

export default Card;
