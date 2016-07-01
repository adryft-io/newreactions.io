import React from 'react';

const Sidebar = (props) => (
  <div className="three columns sidebar">
    {props.children}
  </div>
);

Sidebar.propTypes = { children: React.PropTypes.object };

export default Sidebar;
