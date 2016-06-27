import React, { Component } from 'react';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div onClick={this.tick}>
        <h3>Welcome Shams,
          <p>Here you can view all your created actions and reactions.
          You may filter by the type of service you are using.</p>
        </h3>
        Clicks: {this.state.count}
      </div>
    );
  }
}
Dashboard.propTypes = { initialCount: React.PropTypes.number };
Dashboard.defaultProps = { initialCount: 0 };
