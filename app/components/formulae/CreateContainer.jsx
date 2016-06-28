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

  onSelectAction(action) {
    console.log('action: ', action);
    this.setState({ selectedAction: action });
    console.log(this.state);
  }

  onSelectReaction(reaction) {
    console.log('reaction: ', reaction);
    this.setState({ selectedReaction: reaction });
    console.log(this.state);
  }

  onClickConfigure() {
    console.log('go to configuration page...');
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
