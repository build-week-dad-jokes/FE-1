import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const CardList = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dadjokes-be.herokuapp.com/api/jokes`)
      .then(response => {
        console.log(response);
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
