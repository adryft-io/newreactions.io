import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Nav = ({ signOut }) => (
  <div className="nav">
    <ul>
      {localStorage.getItem('user.id') ?
        <div>
          <li><Link to="/manifesto">Manifesto</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/select">Channels</Link></li>
          <li><Link to="/" onClick={signOut}>Sign Out</Link></li>
        </div> :
        <div>
          <li><Link to="/sign-in">Sign In</Link></li>
          <li><Link to="/manifesto">Manifesto</Link></li>
          <li><Link to="/about">About</Link></li>
        </div>
      }
    </ul>
  </div>
);

Nav.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Nav;
