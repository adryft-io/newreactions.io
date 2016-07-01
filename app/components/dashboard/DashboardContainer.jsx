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
    };
    this.getChannelsAndFormulas = this.getChannelsAndFormulas.bind(this);
    this.onSelectFormula = this.onSelectFormula.bind(this);
    this.onSelectChannel = this.onSelectChannel.bind(this);
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
    fetch('http://localhost:8100/api/v1/recipes?trigger_channel__not=null')
    .then(res => res.json())
    .then(data => this.setState({ channels: getUniqueChannels(data), formulae: data.data }));
  }

  filterFormulas(channel) {
    fetch(`http://localhost:8100/api/v1/recipes?trigger_channel__is=${channel}`)
    .then(res => res.json())
    .then(data => this.setState({ formulae: data.data }));
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
          <DashboardInfoSidebar formulaInfo={this.state.selectedFormula} />
        </Sidebar>
      </div>
    );
  }
}

export default DashboardContainer;
