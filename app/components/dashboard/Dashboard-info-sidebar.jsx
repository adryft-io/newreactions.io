import React, { PropTypes } from 'react';

const DashboardInfoSidebar = ({ formulaInfo }) => (
  <div>
    <ul>
      <li>{formulaInfo.name}</li>
      <li>{formulaInfo.createdin}</li>
      <li>{formulaInfo.date}</li>
      <li>{formulaInfo.authenticated}</li>
    </ul>
  </div>
);

DashboardInfoSidebar.propTypes = {
  formulaInfo: PropTypes.object.isRequired,
};

export default DashboardInfoSidebar;
