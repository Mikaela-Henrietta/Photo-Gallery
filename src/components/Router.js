import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import App from './App';
import Details from './Details';

const Router =  () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}></Route>
      <Route path='/details/:id' component={Details}></Route>
    </Switch>
  </BrowserRouter>
)
export default Router