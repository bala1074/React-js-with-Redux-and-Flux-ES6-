var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;

var Main = require('../components/Main');
var Home = require("../components/Home");
var Account = require('../components/Account');
var Profile = require("../components/Profile");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}> //
              <Route path='/account' component={Account}> // acount
           <IndexRoute   component={Profile} />
         </Route>
       </Route>
  </Router>
);

module.exports = routes;
