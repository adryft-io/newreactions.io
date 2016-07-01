import React, { PropTypes } from 'react';
import moment from 'moment';
import _ from 'underscore';

const DashboardInfoSidebar = ({ formulaInfo, deleteFormula }) => (
  <div>
    <h3>Formula information</h3>
    {_.isEmpty(formulaInfo)
      ?
      <div className="space-top">
        <span>Select a Formula to View Details or Create One Below!</span>
      </div>
      :
      <div className="space-top">
        <ul>
          <li>
            <span className="activelink">Name: </span>
              {formulaInfo.trigger_name}
          </li>
          <li>
            <span className="activelink">Created At: </span>
            {moment(formulaInfo.created_at).fromNow()}
          </li>
          <li>
            <span className="activelink">Action Fields: </span>
            {formulaInfo.action_fields}
          </li>
          <li>
            <span className="activelink">Action Name: </span>
            {formulaInfo.action_name}
          </li>
          <a
            className="button"
            onClick={() => { deleteFormula(formulaInfo.id); }}
          >DELETE THIS ACTION
          </a>
        </ul>
      </div>}
    <a href="#/select" className="button">Create a Formula</a>
  </div>
);

DashboardInfoSidebar.propTypes = {
  formulaInfo: PropTypes.object.isRequired,
  deleteFormula: PropTypes.func.isRequired,
};

export default DashboardInfoSidebar;
