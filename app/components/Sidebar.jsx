import React from 'react';

const Sidebar = (props) => (
  <div>
    {props.children}
  </div>
);

Sidebar.propTypes = { children: React.PropTypes.object };

export default Sidebar;
