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
<<<<<<< 38a5d8d5d77c11806cdf5799d6d2baef4fe9407d
    fetch(`http://localhost:8100/api/v1/recipes?trigger_channel__is=${channel}`)
    .then(res => res.json())
    .then(data => this.setState({ formulae: data.data }));
=======
    // do fetch here 'filter ', channel, ' here'
    this.setState({ formulae: this.state.formulae = [
      { name: 'filname1', createdin: 'filcreatedin1', date: 'fildate1', authenticated: false },
      { name: 'filname2', createdin: 'filcreatedin2', date: 'fildate2', authenticated: false },
    ],
   });
>>>>>>> Styling, and positioning of Dashboard are significantly improved
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
