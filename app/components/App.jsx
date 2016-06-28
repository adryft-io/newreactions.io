import React from 'react';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import Login from './Login.jsx';
import CreateContainer from './formulae/CreateContainer.jsx';
import Dashboard from './Dashboard.jsx';
import MainContainer from './MainContainer.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="login" component={Login} />
      <Route path="formulae/create/:actionChannel" component={CreateContainer} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
export default App;
