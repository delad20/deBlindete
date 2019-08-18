import React from 'react'
import { Switch, Route } from 'react-router-dom'

// routes
import Home from 'containers/Home'
import About from 'containers/About'
import NotFound from './NotFound'

const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/home" exact={true} component={Home} />
    <Route path="/about" exact={true} component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes