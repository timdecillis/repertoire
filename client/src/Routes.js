import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import SignIn from './components/SignIn/SignIn.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  );
};

export default Routes;
