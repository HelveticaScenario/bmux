import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Monitor from './containers/Monitor';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Monitor} />
  </Route>
);
