import React from 'react';
import Manifesto from './Manifesto.jsx';
import Sidebar from '../Sidebar.jsx';
import SidebarManifesto from './SidebarManifesto.jsx';

const ManifestoContainer = () => (
  <div>
    <Manifesto />
    <Sidebar>
      <SidebarManifesto />
    </Sidebar>
  </div>
);

export default ManifestoContainer;
