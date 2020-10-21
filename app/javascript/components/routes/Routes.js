import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Landing from '../pages/Landing'

export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Landing} />
        </Switch>
      </Router>
    </div>
  )
}
