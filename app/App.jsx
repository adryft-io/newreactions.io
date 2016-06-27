import React from 'react';
import Home from './Home.jsx';
import Address from './Address.jsx';
import NotFound from './NotFound.jsx';
import RecipeForm from './RecipeForm.jsx';
import Gmail from './Gmail.jsx';
import Login from './Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';


const Container = (props) => <div><Nav />{props.children}</div>;

Container.propTypes = { children: React.PropTypes.object };

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

const Nav = () => (
  <div>
    <Link to="/">Home</Link>&nbsp;
    <Link to="/address">Address</Link>&nbsp;
    <Link to="/recipeform">Recipe Form</Link>&nbsp;
    <Link to="/login">Login</Link>&nbsp;
    <Link to="/gmail">Gmail</Link>&nbsp;
    <Link to="/dashboard">Dashboard</Link>
  </div>
);


export default App;
