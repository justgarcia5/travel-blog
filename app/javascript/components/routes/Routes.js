import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Landing from '../pages/Landing';
import NewPost from '../pages/NewPost';
import Post from '../pages/Post'

export default function Routes(props) {

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={() => <Landing instaToken={props.insta_token} />} />
          <Route path='/newpost' exact component={NewPost} />
          <Route path='/post/:id' exact render={props => <Post {...props} />} />
        </Switch>
      </Router>
    </div>
  )
}
