import React from 'react';
import { Router, Route } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import App from './routes/App.js'
import Page from './routes/Page.js'
import Blog from './routes/Blog.js'

React.render((
  <Router history={new BrowserHistory}>
    <Route path="/" component={App}>
      <Route path="/blog" component={Blog}/>
      <Route path="/:slug" component={Page}/>
    </Route>
  </Router>
), document.getElementById('app'));
