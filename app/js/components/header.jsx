/** @jsx React.DOM */

var React   = require("react");

var Header = React.createClass({

  render: function() {
    var styles = {
      textAlign: 'center'
    };

    return (
      <h1 style={styles}>{this.props.headerName}</h1>
    )
  }
});

module.exports = Header;