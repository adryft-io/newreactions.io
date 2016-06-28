import React from 'react';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import Login from './Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import MainContainer from './components/MainContainer.jsx';
import CreateContainer from './components/formulae/CreateContainer.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="login" component={Login} />
      <Route path="formulae/create/:actionChannel" component={CreateContainer} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
export default App;
