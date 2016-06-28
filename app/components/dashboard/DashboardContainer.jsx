import React from 'react';
import { browserHistory } from 'react-router';
import Dashboard from './Dashboard.jsx';
import Sidebar from '../Sidebar.jsx';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ['filter 1', 'filter 2', 'filter 3'],
      formulae: ['formula 1', 'formula 2', 'formula 3'],
      selectedFilter: null,
      selectedFormula: null,
    };
    this.getFilters = this.getFilters.bind(this);
    this.getFormulae = this.getFormulae.bind(this);
    this.onSelectFormula = this.onSelectFormula.bind(this);
    this.onSelectFilter = this.onSelectFilter.bind(this);
    this.onClickConfigure = this.onClickConfigure.bind(this);
  }

  onSelectFormula(formula) {
    this.setState({ selectedFormula: formula });
  }

  onSelectFilter(filter) {
    this.setState({ selectedFilter: filter });
  }

  onClickConfigure() {
    const filter = this.state.selectedFilter;
    const formula = this.state.selectedFormula;
    browserHistory.push(`/dashboard/configure/${filter}/${formula}`);
  }

  getFilters() {
    this.setState({ filters: this.state.filters.push('this is a filter') });
  }

  getFormulae() {
    this.setState({ formulae: this.state.formulae.push('this is a formulae') });
  }

  render() {
    return (
      <div>
        <Dashboard
          filters={this.state.filters}
          formulae={this.state.formulae}
          selectedFilter={this.state.selectedFilter}
          selectedFormula={this.state.selectedFormula}
          onSelectFilter={this.onSelectFilter}
          onSelectFormula={this.onSelectFormula}
          onClickConfigure={this.onClickConfigure}
        />
        <h3>Formulae information</h3>
        <Sidebar formulaInfo={this.state.formulaInfo} />
        <a className="button">create a formulae</a>
      </div>
    );
  }
}

export default DashboardContainer;
