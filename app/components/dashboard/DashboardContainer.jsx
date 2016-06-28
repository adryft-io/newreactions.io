import React from 'react';
import Dashboard from './Dashboard.jsx';
import DashboardInfoSidebar from './DashboardInfoSidebar.jsx';
import Sidebar from '../Sidebar.jsx';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ['filter 1', 'filter 2', 'filter 3'],
      formulae: [
        { name: 'name1', createdin: 'createdin1', date: 'date1', authenticated: false },
        { name: 'name2', createdin: 'createdin2', date: 'date2', authenticated: false },
      ],
      selectedFilter: null,
      selectedFormula: { name: null, createdin: null, date: null, aunthenticated: false },
    };
    this.getFilters = this.getFilters.bind(this);
    this.getFormulae = this.getFormulae.bind(this);
    this.onSelectFormula = this.onSelectFormula.bind(this);
    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  onSelectFormula(formula) {
    this.setState({ selectedFormula: formula });
  }

  onSelectFilter(filter) {
    this.setState({ selectedFilter: filter });
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
        />
        <h3>Formulae information</h3>
        <Sidebar>
          <DashboardInfoSidebar formulaInfo={this.state.selectedFormula} />
        </Sidebar>
        <a className="button">create a formulae</a>
      </div>
    );
  }
}

export default DashboardContainer;
