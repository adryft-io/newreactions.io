import React from 'react';
import Sidebar from './Sidebar.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filters: ['filter 1', 'filter 2', 'filter 3'],
      formulae: ['formula 1', 'formula 2', 'formula 3'],
      formulaInfo: {
        createdIn: null,
        name: null,
        date: null,
        authenticated: null,
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
        <div>
          <h3>Welcome Esther,</h3>
          <p>This is your personal dashboard. You may browse your formulae below.
          You may also use the filters to find what you are looking for.</p>
          <span className="divider"></span>
        </div>
        <div>
          <h3>Filter</h3>
          <div className="row">
            <div className="col-4">
              <ul>
                <li>{this.state.filters}</li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li>{this.state.formulae}</li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li>{this.state.formulae}</li>
              </ul>
            </div>
          </div>
        </div>
        <Sidebar>
          <h3>Formulae information</h3>
          <ul>
          </ul>
          <a className="button">create a formulae</a>
        </Sidebar>
      </div>
    );
  }
}

Dashboard.propTypes = { initialFilters: React.PropTypes.array };
Dashboard.defaultProps = { initialFormulae: React.PropTypes.array };

export default Dashboard;
