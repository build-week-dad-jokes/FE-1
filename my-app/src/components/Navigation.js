import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import CardList from './CardList';

const searchBarFunc = () => {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("jokeCardList");
  li = ul.getElementsByTagName('div');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName("p2")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

const Navigation = () => {
  return (
    <>
      <nav>
        <header>
          <Link className="navlink title" to='/'><img src="https://i.imgur.com/F4Z55qz.png" width="138px" height="20px"/></Link>
          <input id='myInput' className="specialInput" type='search' placeholder='Search setup' onChange={e => searchBarFunc(e)} style={{width: '100px'}}/>
          <Link onClick={() => localStorage.clear()} className="navlink navJoke" to='/addjoke'>+ joke</Link>
          <Link className="navlink navSignIn" to='/signin'>sign in</Link>
        </header>
      </nav>
      <Route exact path="/" component={CardList} />
    </>
  )
}

export default Navigation;
