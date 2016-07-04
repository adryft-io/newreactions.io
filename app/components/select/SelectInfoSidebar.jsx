import React, { PropTypes } from 'react';

const SelectInfoSidebar = (props) => (
  <div>
    <ul>
      {props.channel.map((value, index) => (
        <li key={index}>
        {value}
        {(props.isHovered === value) ? `${value}` : ''}
        </li>)
      )}
    </ul>
  </div>
);

SelectInfoSidebar.propTypes = {
  channel: PropTypes.array.isRequired,
  isHovered: PropTypes.string.isRequired,
};

export default SelectInfoSidebar;
