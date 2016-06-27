import React from 'react';
import Home from './Home.jsx';
import Address from './Address.jsx';
import NotFound from './NotFound.jsx';
import RecipeForm from './RecipeForm.jsx';
import Gmail from './Gmail.jsx';
import Login from './Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Container from './Container.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Home} />
      <Route path="address" component={Address} />
      <Route path="gmail" component={Gmail} />
      <Route path="login" component={Login} />
      <Route path="recipeform" component={RecipeForm} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default App;
