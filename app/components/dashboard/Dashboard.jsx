import React, { PropTypes } from 'react';
import { listChannels, listFormulae } from './DashboardHelpers.js';

const Dashboard = ({
  channels,
  formulae,
  selectedChannel,
  selectedFormula,
  onSelectChannel,
  onSelectFormula,
}) => (
  <div>
    <div>
      <h3>Welcome Esther,</h3>
      <p>This is your personal dashboard. You may browse your formulae below.
      You may also use the channels to find what you are looking for.</p>
      <span className="divider"></span>
    </div>
    <div>
      <h3>Choose a Channel ({selectedChannel})</h3>
      <div className="row">
        <div className="col-4">
          <ul>
            {listChannels(channels, onSelectChannel)}
          </ul>
        </div>
        <h3>Choose Formula For Details ({selectedFormula.trigger_name})</h3>
        <div className="col-4">
          <ul>
            {listFormulae(formulae, onSelectFormula, formulae.length / 2)}
          </ul>
        </div>
        <div className="col-4">
          <ul>
            {listFormulae(formulae, onSelectFormula, 0, formulae.length / 2)}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );

Dashboard.propTypes = {
  channels: PropTypes.array.isRequired,
  formulae: PropTypes.array.isRequired,
  selectedChannel: PropTypes.string,
  selectedFormula: PropTypes.object,
  onSelectChannel: PropTypes.func.isRequired,
  onSelectFormula: PropTypes.func.isRequired,
};

export default Dashboard;
