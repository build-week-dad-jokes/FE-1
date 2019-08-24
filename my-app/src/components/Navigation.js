import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to='/'>Dad Jokes</Link>
      <input type='search' placeholder='search' style={{width: '100px'}}/>
      <Link to='/addjoke'>+ joke</Link>
      <Link to='/signin'>sign in</Link>
    </nav>
  )
}

export default Navigation;
