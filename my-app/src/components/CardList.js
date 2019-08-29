import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const CardList = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://5d6175f45f6487001406047a.mockapi.io/api/v1/joke`)
      .then(response => {
        setJokes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div id='jokeCardList' className="cardList">
      {jokes.map(joke => {
        return (
          <div className="jokeCard" key={joke.id}>
            <Card joke={joke} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
