import React from 'react';
import Select from './Select.jsx';
import { getUniqueChannels } from '../dashboard/DashboardHelpers.js';
import { hashHistory } from 'react-router';

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      selectedChannel: null,
    };
    this.getChannels = this.getChannels.bind(this);
    this.onSelectChannel = this.onSelectChannel.bind(this);
  }

  componentDidMount() {
    this.getChannels();
  }

  onSelectChannel(channel) {
    this.setState({ selectedChannel: channel });
    hashHistory.push(`/formulae/create/${channel}`);
  }

  getChannels() {
    fetch('/api/v1/elements?channel__not=null&type=action')
    .then(res => res.json())
    .then(data => this.setState({
      channels: getUniqueChannels(data, 'channel'),
    }));
  }

  render() {
    return (
      <div>
        <Select
          channels={this.state.channels}
          onSelectChannel={this.onSelectChannel}
          selectedChannel={this.state.selectedChannel}
        />
      </div>
    );
  }
}

export default SelectContainer;
