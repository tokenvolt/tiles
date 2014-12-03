/** @jsx React.DOM */

var React           = require("react");
var Fluxxor         = require('fluxxor');
var FluxMixin       = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Header          = require('./header.jsx');

var App = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('GameStore')],

  getDefaultProps: function() {
    return {
      headerName: 'Tiles'
    }
  },

  getStateFromFlux: function() {
    var flux = this.getFlux();

    return {
      game: flux.store("GameStore").getState()
    };
  },

  render: function() {
    return (
      <div>
        <Header name={this.props.headerName} />
        {this.props.activeRouteHandler({
                                         tiles: this.state.game.tiles,
                                         length: this.state.game.boardLength,
                                         tileLength: this.state.game.tileLength,
                                         flippedPair: this.state.game.flippedPair,
                                         area: this.state.game.boardArea
                                      })}
      </div>
    )
  }
});

module.exports = App;