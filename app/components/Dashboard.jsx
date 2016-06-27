import React, { Component } from 'react';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { actions: [], reactions: [] };
    this.getActions = this.getActions.bind(this);
    this.getReactions = this.getReactions.bind(this);
  }
  getActions() {
    this.setState({ actions: this.state.actions.push('action') });
  }
  getReactions() {
    this.setState({ reactions: this.state.reactions.push('rx') });
  }
  render() {
    return (
      <div>
        <span className="divider">
          <h3>Welcome Shams,</h3>
          <p>Here you can view all your created actions and reactions.
          You may filter by the type of service you are using.</p>
        </span>
        <h3>
          <ul>
            <li>
              {this.props.actions}
            </li>
          </ul>
          <ul>
            <li>
              {this.props.reactions}
            </li>
          </ul>
        </h3>
      </div>
    );
  }
}
Dashboard.propTypes = { actions: React.PropTypes.text, reactions: React.PropTypes.text };
Dashboard.defaultProps = { actions: ['hi im action'], reactions: ['hi im reaction'] };
