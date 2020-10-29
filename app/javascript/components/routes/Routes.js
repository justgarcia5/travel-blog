import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Landing from '../pages/Landing';
import Form from '../pages/Form';

export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/form' exact component={Form} />
        </Switch>
      </Router>
    </div>
  )
}
