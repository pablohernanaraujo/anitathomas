import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import HomePage from './components/home/HomePage'
import FashionPage from './components/fashion/Fashion'
import TeensPage from './components/teens/Teens'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='fashion' component={FashionPage} />
    <Route path='teens' component={TeensPage} />
  </Route>
)
