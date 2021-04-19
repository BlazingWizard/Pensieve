import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CardForm from '../components/CardForm';
import Reviews from '../components/Reviews';

function Routes() {
  return (
    <Switch>
      <Route path="/reviews/:id">
        <CardForm />
      </Route>
      <Route path="/reviews">
        <Reviews />
      </Route>
      <Route path="/">
        <Reviews />
      </Route>
    </Switch>
  );
}

export default Routes;
