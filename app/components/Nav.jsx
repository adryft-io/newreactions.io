import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.signOut = this.signOut.bind(this);
  }

  getChildContext() {
    return {
      user: this.state.user,
    };
  }


  componentDidMount() {
    fetch('/api/v1/auth/verify', { credentials: 'include' })
    .then(res => res.json())
    .then(data => {
      this.setState({ user: { data } });
    });
  }

  signOut() {
    fetch('/api/v1/auth/logout', { credentials: 'include' })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/manifesto">manifesto</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/formulae/create/gmail">Create Gmail Formula</Link></li>
          <li><Link to="/sign-in">{this.context.user.data.message === '401' ? 'Sign In' : 'Sign Out'}</Link></li>
          <li onClick={() => { this.signOut(); }}><Link to="/sign-out">Sign Out</Link></li>
          <li><Link to="/select">Select</Link></li>
        </ul>
      </div>
    );
  }
}

Nav.contextTypes = {
  user: PropTypes.object,
};

Nav.childContextTypes = {
  user: PropTypes.object,
};

export default Nav;
