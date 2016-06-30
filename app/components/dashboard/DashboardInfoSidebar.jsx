import React, { PropTypes } from 'react';
import moment from 'moment';
import _ from 'underscore';

const DashboardInfoSidebar = ({ formulaInfo }) => (
  <div>
    <h3>Formula information</h3>
    {_.isEmpty(formulaInfo)
      ?
      <p>Select a Formula to View Details or Create One Below!</p>
      :
      <ul>
        <li>Name: {formulaInfo.trigger_name}</li>
        <li>Created At: {moment(formulaInfo.created_at).fromNow()}</li>
        <li>Action Fields: {formulaInfo.action_fields}</li>
        <li>Action Name: {formulaInfo.action_name}</li>
      </ul>}
    <a href="#/select" className="button">Create a Formula</a>
  </div>
);

DashboardInfoSidebar.propTypes = {
  formulaInfo: PropTypes.object.isRequired,
};

export default DashboardInfoSidebar;
