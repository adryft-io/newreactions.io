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
      You may also use the channels to find what you are looking for.</p>
      <span className="divider">    </span>
    </div>
    <div>
<<<<<<< 38a5d8d5d77c11806cdf5799d6d2baef4fe9407d
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
=======
      <div className="row space-top">
        <div className="four columns">
          <h3>Channels</h3>
          <ul className="offset">
            {channels.map((channel, index) => (
              <div key={index} onClick={() => { onSelectChannel(channel); }}>
                <li className={selectedChannel === channel ? 'activelink' : ''}>{channel}</li>
              </div>
            ))}
          </ul>
        </div>
        <h3>Formulae</h3>
        <div className="four columns">
          <ul>
            {formulae.map((formula, index) => (
              <div key={index} onClick={() => { onSelectFormula(formula); }}>
                <li className={selectedFormula.name === formula.name ? 'activelink' : ''} >{formula.name}</li>
              </div>
            ))}
>>>>>>> Styling, and positioning of Dashboard are significantly improved
          </ul>
        </div>
        <div className="four columns">
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
