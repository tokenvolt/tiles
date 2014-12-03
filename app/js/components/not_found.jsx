var React = require("react");

var NotFound = React.createClass({
  getDefaultProps: function() {
    return {
      message: 'Nothing Found'
    }
  },

  render: function() {
    return (
      <p className="nothing-found">{this.props.message}</p>
    )
  }
});

module.exports = NotFound;