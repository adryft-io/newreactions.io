import React, { PropTypes } from 'react';

const SelectInfoSidebar = (props) => (
  <div>
    <ul>
      <span className="divider"></span>
      {props.channel.map((value) => (
        <li>{value}</li>)
      )}
    </ul>
  </div>
);

SelectInfoSidebar.propTypes = {
  channel: PropTypes.object.isRequired,
};

export default SelectInfoSidebar;
