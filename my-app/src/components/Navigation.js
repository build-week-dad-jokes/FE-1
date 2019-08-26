import React from 'react';
import { Link } from 'react-router-dom';

const searchBarFunc = () => {
  return (
    null
  )
}

const Navigation = () => {
  return (
    <nav>
      <header>
        <Link className="navlink title" to='/'>Dad Jokes</Link>
        <input type='search' placeholder='Search for jokes' onKeyUp={searchBarFunc()} style={{width: '100px'}}/>
        <Link onClick={() => localStorage.clear()} className="navlink navJoke" to='/addjoke'>+ joke</Link>
        <Link className="navlink navSignIn" to='/signin'>sign in</Link>
      </header>
    </nav>
  )
}

export default Navigation;
