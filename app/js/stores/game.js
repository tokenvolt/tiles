var _               = require('lodash');
var Fluxxor         = require('fluxxor');
var Constants       = require("../constants");
var randomColor     = require('randomcolor');

module.exports = Fluxxor.createStore({
  initialize: function(options) {
    this.boardLength = 6;
    this.tileLength  = 125;
    this.area        = this.boardLength * this.boardLength;
    this.flippedPair = [];

    var colorPalette = randomColor({ count: this.area / 2 });
    var colors       = _.shuffle(colorPalette.concat(colorPalette));

    this.tiles = _.reduce(colors, function(result, color) {
      result.push({ color: color, selected: false, dismissed: false });
      return result;
    }, []);

    this.bindActions(Constants.FLIP_TILE, 'handleFlip');
  },

  handleFlip: function(flippedTile) {
    // push
    if (flippedTile.selected) {
      this.flippedPair.push(flippedTile);
    } else {
    // or pop the flippedTile
      this.flippedPair.pop(flippedTile);
    }

    // check if there is already 2 tiles selected
    if (this.flippedPair.length < 2) return;

    if (this.equalFlippedTiles()) {
      this.tiles = _.map(this.tiles, function(tile) {
        if (flippedTile.color == tile.color) {
          tile.dismissed = true;
        }

        return tile;
      });
    }

    this.flippedPair = [];

    this.emit("change");
  },

  equalFlippedTiles: function() {
    return (this.flippedPair[0].color == this.flippedPair[1].color) && (this.flippedPair[0].selected == this.flippedPair[1].selected);
  },

  getState: function() {
    return {
      tiles: this.tiles,
      boardLength: this.boardLength,
      tileLength: this.tileLength,
      flippedPair: this.flippedPair,
      boardArea: this.area
    };
  }
});