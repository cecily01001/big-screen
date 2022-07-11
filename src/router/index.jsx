import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Display from '../pages/Display';
import Home from '../pages/Home';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Display} ></Route>
        <Route path="/design" component={Home} ></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default AppRouter;
