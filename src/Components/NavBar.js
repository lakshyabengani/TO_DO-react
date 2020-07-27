import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/NavBar.css';

const NavBar = () => {
  return (
    <div>
      <h5>To DO APP</h5>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Progress">Progress</Link></li>
        <li float="right">Login</li>
        <li float="right">Register</li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;