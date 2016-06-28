import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <div>
    <ul>
      <li><Link to="/login">Log in</Link></li>
      <li><Link to="/manifesto">manifesto</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/formulae/create/gmail">Create Gmail Formula</Link></li>
    </ul>
  </div>
);

export default Nav;
