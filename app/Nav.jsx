import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <div>
    <Link to="/">Home</Link>&nbsp;
    <Link to="/address">Address</Link>&nbsp;
    <Link to="/recipeform">Recipe Form</Link>&nbsp;
    <Link to="/login">Login</Link>&nbsp;
    <Link to="/gmail">Gmail</Link>&nbsp;
    <Link to="/dashboard">Dashboard</Link>
  </div>
);

export default Nav;
