import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory , IndexRoute} from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Home from './modules/Home'

render((
  <Router>
    <Route path="/" component={App}>
       <IndexRoute   component={Home}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
