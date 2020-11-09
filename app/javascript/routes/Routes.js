import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Landing from '../pages/Landing';
import NewPost from '../pages/NewPost';

export default function Routes() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/NewPost' exact component={NewPost} />
        </Switch>
      </Router>
    </div>
  )
}
