import React from 'react';
import Home from './home/Home.jsx';
import NotFound from './NotFound.jsx';
import SignIn from './SignIn.jsx';
import CreateContainer from './formulae/CreateContainer.jsx';
import ConfigureContainer from './formulae/ConfigureContainer.jsx';
import DashboardContainer from './dashboard/DashboardContainer.jsx';
import AboutContainer from './about/AboutContainer.jsx';
import ManifestoContainer from './manifesto/ManifestoContainer.jsx';
import SelectContainer from './select/SelectContainer.jsx';
import MainContainer from './MainContainer.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.requireAuth = this.requireAuth.bind(this);
  }

  requireAuth(nextState, replace, next) {
    fetch('/api/v1/auth/verify', { credentials: 'include' })
    .then(res => res.json())
    .then(data => {
      if (data.message === '401') {
        // replace('/sign-in');
        next();
      } else {
        next();
      }
    });
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={MainContainer}>
          <IndexRoute component={Home} />
          <Route path="dashboard" component={DashboardContainer} onEnter={this.requireAuth} />
          <Route path="sign-in" component={SignIn} />
          <Route path="about" component={AboutContainer} />
          <Route path="manifesto" component={ManifestoContainer} />
          <Route
            path="select"
            component={SelectContainer}
            onEnter={this.requireAuth}
          />
          <Route
            path="formulae/create/:actionChannel"
            component={CreateContainer}
            onEnter={this.requireAuth}
          />
          <Route
            path="formulae/configure/:actionId/:reactionId"
            component={ConfigureContainer}
            onEnter={this.requireAuth}
          />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
  }
}

export default App;
