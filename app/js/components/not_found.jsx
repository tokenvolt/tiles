var React = require("react");

var NotFound = React.createClass({
  getDefaultProps: function() {
    return {
      message: 'Nothing Found'
    }
  },

  render: function() {
    return (
      <div className="nothing-found">{this.props.message}</div>
    )
  }
});

module.exports = NotFound;