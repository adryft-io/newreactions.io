import React from 'react';
import Dashboard from './Dashboard.jsx';
import DashboardInfoSidebar from './DashboardInfoSidebar.jsx';
import Sidebar from '../Sidebar.jsx';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      formulae: [],
      selectedChannel: null,
      selectedFormula: { name: null, createdin: null, date: null, aunthenticated: false },
    };
    this.getChannels = this.getChannels.bind(this);
    this.getFormulae = this.getFormulae.bind(this);
    this.onSelectFormula = this.onSelectFormula.bind(this);
    this.onSelectChannel = this.onSelectChannel.bind(this);
  }

  componentDidMount() {
    this.getChannels();
    this.getFormulae();
  }

  onSelectFormula(formula) {
    this.setState({ selectedFormula: formula });
  }

  onSelectChannel(channel) {
    this.filterFormulas(channel);
    this.setState({ selectedChannel: channel });
  }

  getChannels() {
    this.setState({
      channels: this.state.channels = [
        'getchannelname1',
        'getchannelname2',
        'getchannelname3',
      ],
    });
  }

  getFormulae() {
    this.setState({ formulae: this.state.formulae = [
      { name: 'getname1', createdin: 'getcreatedin1', date: 'getdate1', authenticated: false },
      { name: 'getname2', createdin: 'getcreatedin2', date: 'getdate2', authenticated: false },
    ],
   });
  }

  filterFormulas(channel) {
    // do fetch here 'filter ', channel, ' here'
    console.log('filtered: ', channel);
    this.setState({ formulae: this.state.formulae = [
      { name: 'filname1', createdin: 'filcreatedin1', date: 'fildate1', authenticated: false },
      { name: 'filname2', createdin: 'filcreatedin2', date: 'fildate2', authenticated: false },
    ],
   });
  }

  render() {
    return (
      <div>
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
