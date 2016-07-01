import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
import Configure from './Configure.jsx';
import Sidebar from '../Sidebar.jsx';
import InfoSidebar from './InfoSidebar.jsx';

class ConfigureContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: false,
      loading: true,
      selectedAction: null,
      selectedReaction: null,
      formula: {
        name: '',
        trigger_fields: {},
        action_fields: {},
      },
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
      });
    }, 250);
  }

  onSave() {
    const formula = {
      name: '',
      trigger_channel: 'gmail',
      trigger_name: 'new-important',
      trigger_fields: JSON.stringify(this.state.formula.trigger_fields),
      action_channel: 'twilio',
      action_name: 'sms',
      action_fields: JSON.stringify(this.state.formula.action_fields),
      user_id: 1,
    };

    fetch('/api/v1/recipes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formula),
    })
    .then(() => {
      hashHistory.push('/dashboard');
    })
    .catch(err => {
      // TODO: give error feedback in UI
      console.error(err);
    });
  }

  handleName(name) {
    this.setState({ formula: { ...this.state.formula, name }, valid: name.length > 0 });
  }

  handleChange(formulaPart, fieldName, fieldValue) {
    // TODO: state should be treated as immutable
    this.state.formula[`${formulaPart}_fields`][fieldName] = fieldValue;
    this.setState({ valid: fieldValue.length > 0 });
  }

  render() {
    if (this.state.loading) {
      return (<div>loading...</div>);
    }
    return (
      <div>
        <Configure
          selectedAction={this.state.selectedAction}
          selectedReaction={this.state.selectedReaction}
          handleName={this.handleName}
          handleChange={this.handleChange}
          valid={this.state.valid}
          onSave={this.onSave}
        />
        <Sidebar>
          <InfoSidebar
            title="About Configuration"
            linkPath="/dashboard"
            linkLabel="cancel"
          >
            <p>
              These settings create a simple configuration for your formula.
              They show the options you have per service.
            </p>
          </InfoSidebar>
        </Sidebar>
      </div>
    );
  }
}

ConfigureContainer.propTypes = {
  params: PropTypes.object.isRequired,
};

export default ConfigureContainer;
