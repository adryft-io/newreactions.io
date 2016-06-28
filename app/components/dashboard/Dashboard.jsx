import React, { PropTypes } from 'react';

const Dashboard = ({ filters, formulae }) => (
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
            {filters.map((filter, index) => (
              <div key={index}>
                <li>{filter}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <ul>
            {formulae.map((formula, index) => (
              <div key={index}>
                <li>{formula}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <ul>
            {formulae.map((formula, index) => (
              <div key={index}>
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
};

export default Dashboard;
