import React, { Component, PropTypes } from 'react';
import Configure from './Configure.jsx';

class CreateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      selectedAction: null,
      selectedReaction: null,
    };

    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        selectedAction: {
          id: this.props.params.actionId,
          channel: 'gmail',
          name: 'new-important',
          fields: [],
        },
        selectedReaction: {
          id: this.props.params.reactionId,
          channel: 'twilio',
          name: 'sms',
          fields: [{
            name: 'phone',
            type: 'text',
            label: 'Phone Number',
          }, {
            name: 'message',
            type: 'text',
            label: 'Message',
          }],
        },
      });
    }, 250);
  }

  onSave() {
    console.log('saving...');
    setTimeout(() => { console.log('saved'); }, 250);
  }

  render() {
    if (this.state.loading) {
      return (<div>loading...</div>);
    }
    return (
      <Configure
        selectedAction={this.state.selectedAction}
        selectedReaction={this.state.selectedReaction}
        onSave={this.onSave}
      />
    );
  }
}

CreateContainer.propTypes = {
  params: PropTypes.object.isRequired,
};

export default CreateContainer;
