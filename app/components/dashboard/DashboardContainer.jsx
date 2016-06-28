import React from 'react';
import Dashboard from './Dashboard.jsx';
import Sidebar from '../Sidebar.jsx';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filters: ['filter 1', 'filter 2', 'filter 3'],
      formulae: ['formula 1', 'formula 2', 'formula 3'],
      formulaInfo: {
        name: 'name',
        createdin: 'createdin',
        date: 'date',
        authenticated: 'authenticated',
      },
    };
    this.getFilters = this.getFilters.bind(this);
    this.getFormulae = this.getFormulae.bind(this);
  }

  getFilters() {
    this.setState({ filters: this.state.filters.push('filter') });
  }

  getFormulae() {
    this.setState({ formulae: this.state.formulae.push('formulae') });
  }

  render() {
    return (
      <div>
        <Dashboard
          filters={this.state.filters}
          formulae={this.state.formulae}
        />
        <Sidebar
          props={this.state.formulaInfo}
        />
        <h3>Formulae information</h3>
        <a className="button">create a formulae</a>
      </div>
    );
  }
}

export default DashboardContainer;
