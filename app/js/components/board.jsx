/** @jsx React.DOM */

var React     = require("react");
var Tile      = require('./tile.jsx');
var EmptyTile = require('./empty_tile.jsx');

var Board = React.createClass({
  // board props
  // {
  //   length: Number, ANOTHER NAME!!!
  //   tileLength: Number
  // }

  render: function() {
    var styles = {
      width: this.props.length * this.props.tileLength,
      height: this.props.length * this.props.tileLength
    };

    // tile props
    // {
    //   selected: Boolean,
    //   dismissed: Boolean,
    //   color: String
    // }

    if (this.props.tiles.length == 0) {
      console.log('sss');
      var board =
        <button>
          Restart
        </button>
    }

    var board = this.props.tiles.map(function(tile) {
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
        {board}
      </div>
    )
  }
});

module.exports = Board;