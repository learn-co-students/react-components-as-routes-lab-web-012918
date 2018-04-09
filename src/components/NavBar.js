import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className= 'navbar'>
      <NavLink to='/' exact activeStyle={{background: 'orange'}}>Home</NavLink>
      <NavLink to='/movies' exact activeStyle={{background: 'orange'}}>Movies</NavLink>
      <NavLink to='/directors' exact activeStyle={{background: 'orange'}}>Directors</NavLink>
      <NavLink to='/actors' exact activeStyle={{background: 'orange'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
