/* jshint node: true */
'use strict';

var cssnext = require('broccoli-cssnext');
var Funnel = require('broccoli-funnel');

function Preprocessor(options) {
  this.name = 'ember-cli-cssnext';
  this.options = options || {};
}

Preprocessor.prototype.toTree = function(tree, inputPath, outputPath, inputOptions) {
  return new Funnel(cssnext(tree, this.options), {
    srcDir: inputPath,
    destDir: outputPath
  });
};

module.exports = {
  name: 'ember-cli-cssnext',

  included: function(app) {
    this._super.included.apply(this, arguments);
    app.registry.add('css', new Preprocessor(app.options.cssnextOptions));
  }
};
