import React from 'react';
import About from './About.jsx';
import Sidebar from '../Sidebar.jsx';
import SidebarAbout from './SidebarAbout.jsx';

const AboutContainer = () => (
  <div>
    <About />
    <Sidebar>
      <SidebarAbout />
    </Sidebar>
  </div>
);

export default AboutContainer;
