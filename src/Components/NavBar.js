import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/NavBar.css';

const NavBar = () => {
  return (
    <div align="center">
      <h1>To-Do</h1>
      <h3>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Progress">Progress</Link></li>
        <li style={{float:"right"}}><i className="fa fa-sign-in" aria-hidden="true"> Login/Register</i></li>
     	</ul>
       </h3>
    </div>
  );
};

export default NavBar;