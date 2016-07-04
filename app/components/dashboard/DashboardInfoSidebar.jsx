import React, { PropTypes } from 'react';
import moment from 'moment';
import _ from 'underscore';
import { listActions } from './DashboardHelpers.js';


// TODO add confirm to eslintignore
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
            <span className="bold">Name: </span>
            <p className="dashSideP">{formulaInfo.name}</p>
          </li>
          <li>
            <span className="bold">Reaction Name: </span>
            <p className="dashSideP">{formulaInfo.reaction_name}</p>
          </li>
          <li>
            <span className="bold">Created At: </span>
            <p className="dashSideP">{moment(formulaInfo.created_at).fromNow()}</p>
          </li>
          <li>
            <span className="bold">Action Fields: </span>
            {listActions(formulaInfo.reaction_fields)}
          </li>
          <li>
            <span className="bold">Action Name: </span>
            <p className="dashSideP">{formulaInfo.action_name}</p>
          </li>
          <a
            className="button"
            onClick={() => (confirm(`Delete formula  ${formulaInfo.name}?`) ?
            deleteFormula(formulaInfo.id) : '')}
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
