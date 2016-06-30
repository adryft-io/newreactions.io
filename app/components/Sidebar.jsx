import React from 'react';

const Sidebar = (props) => (
  <div className="four columns">
    {props.children}
  </div>
);

Sidebar.propTypes = { children: React.PropTypes.object };

export default Sidebar;
