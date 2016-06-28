import React from 'react';
import DashboardInfoSidebar from './dashboard/Dashboard-info-sidebar.jsx';

const Sidebar = (formulaInfo) => (
  <div><DashboardInfoSidebar formulaInfo={formulaInfo} />
    {DashboardInfoSidebar.children}
  </div>
);

Sidebar.propTypes = { formulaInfo: React.PropTypes.object };

export default Sidebar;
