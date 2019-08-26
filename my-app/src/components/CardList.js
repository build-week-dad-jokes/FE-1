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

  const jokeKeys = Object.keys(jokes);

  return (
    <div className="cards">
      {jokeKeys.map(key => {
        return (
          <div className="card-container">
            <Card joke={jokes[key]} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
