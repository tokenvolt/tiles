/** @jsx React.DOM */

var React          = require("react");

var EmptyTile = React.createClass({
  getDefaultProps: function() {
    return {
      closedColor: '#acacac'
    }
  },

  render: function() {
    var styles = {
      width: this.props.side,
      height: this.props.side,
      backgroundColor: this.props.closedColor
    };

    return (
      <span className="tile" style={styles}>
      </span>
    )
  }
});

module.exports = EmptyTile;