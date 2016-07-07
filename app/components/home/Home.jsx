import React from 'react';
import Splash from '../Splash.jsx';

const Home = () => (
  <div className="splash">
    <Splash
      title={'Here we create action and reaction'}
      subtitle={!localStorage.getItem('user.name') ?
        'Please login to get started' :
        'Visit your dashboard to get started'}
    />
  </div>
);

export default Home;
