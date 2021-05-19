import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Reviews from '../components/Reviews';
import FamilyTree from '../components/FamilyTree';

function Routes(): React.ReactElement {
  return (
    <Switch>
      <Route path="/reviews">
        <Reviews />
      </Route>
      <Route path="/familytree">
        <FamilyTree />
      </Route>
      <Route path="/">
        <Reviews />
      </Route>
    </Switch>
  );
}

export default Routes;
