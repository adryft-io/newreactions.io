import React, { PropTypes } from 'react';

const Dashboard = ({
  filters,
  formulae,
  selectedFilter,
  selectedFormula,
  onSelectFilter,
  onSelectFormula,
  onClickConfigure,
}) => (
  <div>
    <div>
      <h3>Welcome Esther,</h3>
      <p>This is your personal dashboard. You may browse your formulae below.
      You may also use the filters to find what you are looking for.</p>
      <span className="divider"></span>
    </div>
    <div>
      <h3>Filter ({selectedFilter})</h3>
      <div className="row">
        <div className="col-4">
          <ul>
            {filters.map((filter, index) => (
              <div key={index} onClick={() => { onSelectFilter(filter); }}>
                <li>{filter}</li>
              </div>
            ))}
          </ul>
        </div>
        <h3>Choose Formula ({selectedFormula})</h3>
        <div className="col-4">
          <ul>
            {formulae.map((formula, index) => (
              <div key={index} onClick={() => { onSelectFormula(formula); }}>
                <li>{formula}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <ul>
            {formulae.map((formula, index) => (
              <div key={index} onClick={() => { onSelectFormula(formula); }}>
                <li>{formula}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );

Dashboard.propTypes = {
  filters: PropTypes.array.isRequired,
  formulae: PropTypes.array.isRequired,
  selectedFilter: PropTypes.string,
  selectedFormula: PropTypes.string,
  onSelectFilter: PropTypes.func.isRequired,
  onSelectFormula: PropTypes.func.isRequired,
  onClickConfigure: PropTypes.func.isRequired,
};

export default Dashboard;
