import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';

const Select = (props) => (
  <div className="row componentContainer">
    <h3> Here is Action and Reaction </h3>
    <p> Welcome to the internet of things, what would you like to create today? </p>
    <ul>
      {props.channel.map((value, index) => (
        <li
          key={index}
          onMouseEnter={() => { props.onMouseEnter(value); }}
          onMouseLeave={() => { props.onMouseLeave(); }}
          onClick={() => { hashHistory.push(`/formulae/create/${value}`); }}
        >
        {value}
        </li>
        )
        )}
    </ul>
  </div>
);

Select.propTypes = {
  channel: PropTypes.array.isRequired,
  isHovered: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default Select;
