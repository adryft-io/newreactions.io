import React from 'react';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import RecipeForm from './RecipeForm.jsx';
import Gmail from './Gmail.jsx';
import Login from './Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Container from './Container.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';



const Container = (props) => (
  <div>
    <h4>new reaction logo</h4>
    {props.children}
    <h4>weather goes here </h4>
    <ul>
      <li><Link to="/login">Log in</Link></li>
      <li><Link to="/manifesto">manifesto</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  </div>
);
// /login should change to log out when the user is loged in

Container.propTypes = {
  children: React.PropTypes.object,
};

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Home} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="gmail" component={Gmail} />
      <Route path="login" component={Login} />
      <Route path="recipeform" component={RecipeForm} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
export default App;
