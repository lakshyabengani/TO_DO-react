import React from 'react';
import App  from '../src/App';
import  Calender  from './Calender';
import  NavBar  from './NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={App} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Progress" component={Calender} />
      </Switch>
    </div>
  );
};