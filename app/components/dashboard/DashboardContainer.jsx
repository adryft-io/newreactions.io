import React from 'react';
import Dashboard from './Dashboard.jsx';
import DashboardInfoSidebar from './DashboardInfoSidebar.jsx';
import Sidebar from '../Sidebar.jsx';
import { getUniqueChannels } from './DashboardHelpers.js';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      formulae: [],
      selectedChannel: null,
      selectedFormula: {},
      user: null,
    };
    this.getChannelsAndFormulas = this.getChannelsAndFormulas.bind(this);
    this.deleteFormula = this.deleteFormula.bind(this);
    this.onSelectFormula = this.onSelectFormula.bind(this);
    this.onSelectChannel = this.onSelectChannel.bind(this);
    this.filterFormulas = this.filterFormulas.bind(this);
  }

  componentDidMount() {
    this.getChannelsAndFormulas();
  }

  onSelectFormula(formula) {
    this.setState({ selectedFormula: formula });
  }

  onSelectChannel(channel) {
    this.filterFormulas(channel);
    this.setState({ selectedChannel: channel });
  }

  getChannelsAndFormulas() {
    fetch(`/api/v1/formulae?action_channel__not=null&user_id=${localStorage.getItem('user.id')}`)
    .then(res => res.json())
    .then(data => this.setState({
      channels: getUniqueChannels(data, 'action_channel'),
      formulae: data.data,
    }));
  }

  deleteFormula(id) {
    fetch(`/api/v1/formulae/${id}`,
      {
        method: 'DELETE',
      }
    )
    .then(() => this.setState({ selectedFormula: {} }))
    .then(() => this.getChannelsAndFormulas())
    .catch(err => console.warn(err));
  }

  filterFormulas(channel) {
    fetch(`/api/v1/formulae?action_channel__is=${channel}`)
    .then(res => res.json())
    .then(data => this.setState({
      formulae: data.data,
      selectedFormula: {},
    }));
  }

  render() {
    return (
      <div className="row">
        <Dashboard
          channels={this.state.channels}
          formulae={this.state.formulae}
          selectedChannel={this.state.selectedChannel}
          selectedFormula={this.state.selectedFormula}
          onSelectChannel={this.onSelectChannel}
          onSelectFormula={this.onSelectFormula}
        />
        <Sidebar>
          <DashboardInfoSidebar
            formulaInfo={this.state.selectedFormula}
            deleteFormula={this.deleteFormula}
          />
        </Sidebar>
      </div>
    );
  }
}

export default DashboardContainer;
