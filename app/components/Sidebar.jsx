import React, { PropTypes } from 'react';

const Sidebar = (props) => (
  <div>
    <li>{props.children}</li>
  </div>
);

Sidebar.propTypes = { children: PropTypes.object.isRequired };

export default Sidebar;
