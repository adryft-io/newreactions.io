import React, { PropTypes } from 'react';
import { listChannels } from '../dashboard/DashboardHelpers.js';

const Select = ({ channels, onSelectChannel }) => (
  <div className="row componentContainer">
    <h3> Pick a channel </h3>
    <p> Welcome to the internet of things, what would you like to create today? </p>
    <ul className="channels">
      {listChannels(channels, onSelectChannel)}
    </ul>
  </div>
);

Select.propTypes = {
  channels: PropTypes.array.isRequired,
  selectedChannel: PropTypes.string,
  onSelectChannel: PropTypes.func.isRequired,
};

export default Select;
