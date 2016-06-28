import React, { Component } from 'react';
import Create from './Create.jsx';

class CreateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      channel: 'gmail',
      selectedAction: null,
      selectedReaction: null,
      actions: [],
      reactions: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        channel: 'gmail',
        actions: [{
          channel: 'gmail',
          name: 'new-important',
        }],
        reactions: [{
          channel: 'twilio',
          name: 'sms',
        }],
      });
    }, 250);
  }

  render() {
    return (
      <Create
        channel={this.state.channel}
        actions={this.state.actions}
        reactions={this.state.reactions}
      />
    );
  }
}

export default CreateContainer;
