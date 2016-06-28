import React, { PropTypes } from 'react';

const DashboardInfoSidebar = ({ formulaInfo }) => (
  <div>
    <h3>Formulae information</h3>
    <ul>
      <li>Name: {formulaInfo.name}</li>
      <li>Created In: {formulaInfo.createdin}</li>
      <li>Date: {formulaInfo.date}</li>
      <li>Authenticated: {formulaInfo.authenticated}</li>
    </ul>
    <a className="button">Create a Formula</a>
  </div>
);

DashboardInfoSidebar.propTypes = {
  formulaInfo: PropTypes.object.isRequired,
};

export default DashboardInfoSidebar;
