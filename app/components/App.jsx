import React from 'react';
import Home from './home/Home.jsx';
import NotFound from './NotFound.jsx';
import SignIn from './SignIn.jsx';
import CreateContainer from './formulae/CreateContainer.jsx';
import ConfigureContainer from './formulae/ConfigureContainer.jsx';
import DashboardContainer from './dashboard/DashboardContainer.jsx';
import AboutContainer from './about/AboutContainer.jsx';
import ManifestoContainer from './manifesto/ManifestoContainer.jsx';
import MainContainer from './MainContainer.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path="dashboard" component={DashboardContainer} />
      <Route path="sign-in" component={SignIn} />
      <Route path="about" component={AboutContainer} />
      <Route path="manifesto" component={ManifestoContainer} />
      <Route path="formulae/create/:actionChannel" component={CreateContainer} />
      <Route path="formulae/configure/:actionId/:reactionId" component={ConfigureContainer} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
export default App;
