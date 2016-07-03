import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
import Create from './Create.jsx';
import Sidebar from '../Sidebar.jsx';
import InfoSidebar from './InfoSidebar.jsx';

class CreateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      channel: props.params.action_channel,
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
        actions: [{
          id: 1,
          channel: this.state.channel,
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
    hashHistory.push(`/formulae/configure/${actionId}/${reactionId}`);
  }

  render() {
    if (this.state.loading) {
      return (<div>loading...</div>);
    }
    return (
      <div>
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
        <Sidebar>
          <InfoSidebar
            title="How it works"
            linkPath="/dashboard"
            linkLabel="go back to dashboard"
          >
            <p>
              When you create a formula you pair a service with another
              in order to automate your life.
            </p>
          </InfoSidebar>
        </Sidebar>
      </div>
    );
  }
}

CreateContainer.propTypes = {
  params: PropTypes.object.isRequired,
};

export default CreateContainer;
