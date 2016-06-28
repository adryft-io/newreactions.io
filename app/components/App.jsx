import React from 'react';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import SignIn from './SignIn.jsx';
import CreateContainer from './formulae/CreateContainer.jsx';
import DashboardContainer from './dashboard/DashboardContainer.jsx';
import MainContainer from './MainContainer.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path="dashboard" component={DashboardContainer} />
      <Route path="sign-in" component={SignIn} />
      <Route path="formulae/create/:actionChannel" component={CreateContainer} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
export default App;
