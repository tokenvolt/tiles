/** @jsx React.DOM */

var React         = require('react');
var Router        = require('react-router');
var Route         = Router.Route;
var Routes        = Router.Routes;
var DefaultRoute  = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect      = Router.Redirect;

var Fluxxor       = require('fluxxor');
var stores        = require('../stores/_index');
var actions       = require('../actions/_index');
var flux          = new Fluxxor.Flux(stores, actions);

var App           = require('./app.jsx');
var NotFound      = require('./not_found.jsx');
var Board         = require('./board.jsx');

module.exports = (
  <Routes>
    <Route name="app" path="/" handler={App} flux={flux}>
      <Route name="board" handler={Board}/>
      <NotFoundRoute handler={NotFound}/>
    </Route>
  </Routes>
);