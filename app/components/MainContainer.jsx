import React, { PropTypes } from 'react';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
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
  render() {
    return (
      <div>
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
