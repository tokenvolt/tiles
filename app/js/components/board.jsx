/** @jsx React.DOM */

var React           = require("react");
var Fluxxor         = require('fluxxor');
var FluxMixin       = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Tile            = require('./tile.jsx');
var EmptyTile       = require('./empty_tile.jsx');
var _               = require('lodash');
var randomColor     = require('randomcolor');

var Board = React.createClass({
  render: function() {
    var styles = {
      width: this.props.length * this.props.tileLength,
      height: this.props.length * this.props.tileLength,
    };

    var tiles = this.props.tiles.map(function(tile) {
      if (tile.dismissed) {
        return(<EmptyTile side={this.props.tileLength}/>)
      } else {
        return(<Tile side={this.props.tileLength}
                     selected={tile.selected}
                     color={tile.color} />)
      };
    }, this)

    return (
      <div className="board" style={styles}>
        {tiles}
      </div>
    )
  }
});

module.exports = Board;