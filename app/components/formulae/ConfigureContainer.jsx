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

    this.handleName = this.handleName.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
        formula: {
          name: '',
          trigger_channel: 'gmail',
          trigger_name: 'new-important',
          trigger_fields: {},
          action_channel: 'twilio',
          action_name: 'sms',
          action_fields: {},
          user_id: 1,
        },
      });
    }, 250);
  }

  onSave() {
    console.log(this.state.formula);
    console.log('saving...');
    setTimeout(() => { console.log('saved'); }, 250);
  }

  handleName(name) {
    this.setState({ formula: { ...this.state.formula, name } });
  }

  handleChange(formulaPart, fieldName, fieldValue) {
    // TODO: state should be treated as immutable
    this.state.formula[`${formulaPart}_fields`][fieldName] = fieldValue;
  }

  render() {
    if (this.state.loading) {
      return (<div>loading...</div>);
    }
    return (
      <Configure
        selectedAction={this.state.selectedAction}
        selectedReaction={this.state.selectedReaction}
        handleName={this.handleName}
        handleChange={this.handleChange}
        onSave={this.onSave}
      />
    );
  }
}

CreateContainer.propTypes = {
  params: PropTypes.object.isRequired,
};

export default CreateContainer;
