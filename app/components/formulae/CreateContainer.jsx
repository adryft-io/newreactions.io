import React, { Component } from 'react';
import { browserHistory } from 'react-router';
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

    this.onSelectAction = this.onSelectAction.bind(this);
    this.onSelectReaction = this.onSelectReaction.bind(this);
    this.onClickConfigure = this.onClickConfigure.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        channel: 'gmail',
        actions: [{
          id: 1,
          channel: 'gmail',
          name: 'new-important',
        }],
        reactions: [{
          id: 1,
          channel: 'twilio',
          name: 'sms',
        }],
      });
    }, 250);
  }

  onSelectAction(action) {
    this.setState({ selectedAction: action });
  }

  onSelectReaction(reaction) {
    this.setState({ selectedReaction: reaction });
  }

  onClickConfigure() {
    const actionId = this.state.selectedAction.id;
    const reactionId = this.state.selectedReaction.id;
    browserHistory.push(`/formulae/configure/${actionId}/${reactionId}`);
  }

  render() {
    return (
      <Create
        channel={this.state.channel}
        selectedAction={this.state.selectedAction}
        actions={this.state.actions}
        selectedReaction={this.state.selectedReaction}
        reactions={this.state.reactions}
        onSelectAction={this.onSelectAction}
        onSelectReaction={this.onSelectReaction}
        onClickConfigure={this.onClickConfigure}
      />
    );
  }
}

export default CreateContainer;
