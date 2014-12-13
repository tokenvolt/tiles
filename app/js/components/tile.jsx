/** @jsx React.DOM */

var React          = require("react");
var Fluxxor        = require('fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var Tile = React.createClass({
  mixins: [FluxChildMixin],

  getDefaultProps: function() {
    return {
      closedColor: '#eafeff'
    }
  },

  getInitialState: function() {
    return {
      selected: false
    }
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.selected != nextProps.selected) return;
    var that = this;

    setTimeout(function() {
      that.setState({selected: nextProps.selected});
    }, 350);
  },

  flip: function() {
    this.setState({selected: !this.state.selected}, function() {
      this.getFlux().actions
                    .tiles
                    .flip(this.state.selected, this.props.color);
    })
  },

  render: function() {
    var styles = {
      width:           this.props.side,
      height:          this.props.side,
      backgroundColor: this.state.selected ? this.props.color : this.props.closedColor
    };

    return (
      <span className="tile" style={styles} onClick={this.flip}>
      </span>
    )
  }
});

module.exports = Tile;