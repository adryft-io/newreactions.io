import React, { PropTypes } from 'react';
import moment from 'moment';
import _ from 'underscore';
import { listActions } from './DashboardHelpers.js';

const DashboardInfoSidebar = ({ formulaInfo, deleteFormula }) => (
  <div>
    <h3>Formula information</h3>
    {_.isEmpty(formulaInfo)
      ?
      <div className="space-top">
        <p>Select a Formula to View Details</p>
      </div>
      :
      <div className="space-top">
        <ul>
          <li>
            <span className="activelink">Name: </span>
            <p>{formulaInfo.trigger_name}</p>
          </li>
          <li>
            <span className="activelink">Created At: </span>
            <p>{moment(formulaInfo.created_at).fromNow()}</p>
          </li>
          <li>
            <span className="activelink">Action Fields: </span>
            {listActions(formulaInfo.action_fields)}
          </li>
          <li>
            <span className="activelink">Action Name: </span>
            <p>{formulaInfo.action_name}</p>
          </li>
          <a
            className="button"
            onClick={() => { deleteFormula(formulaInfo.id); }}
          >DELETE THIS ACTION
          </a>
        </ul>
      </div>}
    <span className="divider" />
    <a href="#/select" className="button space-top">Create a Formula</a>
  </div>
);

DashboardInfoSidebar.propTypes = {
  formulaInfo: PropTypes.object.isRequired,
  deleteFormula: PropTypes.func.isRequired,
};

export default DashboardInfoSidebar;
