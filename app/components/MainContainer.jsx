import React, { PropTypes } from 'react';
import Nav from './Nav.jsx';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
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
    .then((data) => {
      if (data.name) {
        localStorage.setItem('name', data.name);
        this.setState({ user: data });
      } else {
        localStorage.clear();
        this.setState({ user: null });
      }
    });
  }

  signOut() {
    fetch('/api/v1/auth/logout', { credentials: 'include' })
    .catch(err => console.warn(err))
    .then(() => localStorage.clear('name'))
    .then(() => this.setState({ user: null }));
  }

  render() {
    return (
      <div>
        <div className="row sidebarDiv">
          <div className="nine columns sidebarLineOne"></div>
          <div className="three columns sidebarLineTwo">
            <div className="navigation">
              <Nav signOut={this.signOut} user={this.state.user} />
            </div>
          </div>
        </div>
        <div className="logo">new reactions</div>
        <div>
        {this.props.children}
        </div>
      </div>
    );
  }
}

MainContainer.propTypes = { children: React.PropTypes.object };

MainContainer.childContextTypes = {
  user: PropTypes.object,
};

export default MainContainer;
