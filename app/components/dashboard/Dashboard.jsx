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
  <div className="nine columns componentContainer">
    <div>
      <h3>Welcome Esther,</h3>
      <p>This is your personal dashboard. You may browse your formulae below.
      You may also use the channels to find what you are looking for.
        <span className="divider"></span>
      </p>
    </div>
    <div className="row space-top">
      <div>
        <div className="four columns">
          <h3>Channel</h3>
          <ul className="offset">
            {listChannels(channels, onSelectChannel, selectedChannel)}
          </ul>
        </div>
        <div className="four columns">
          <h3>Formulae</h3>
          <ul>
            {listFormulae(formulae, onSelectFormula, selectedFormula, formulae.length / 2)}
          </ul>
        </div>
        <div className="four columns">
          <ul>
            {listFormulae(formulae, onSelectFormula, selectedFormula, 0, formulae.length / 2)}
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
