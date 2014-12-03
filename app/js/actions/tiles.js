var Constants       = require("../constants");

module.exports = {
  flip: function(selected, color) {
    this.dispatch(Constants.FLIP_TILE, {selected: selected, color: color});
  }
};