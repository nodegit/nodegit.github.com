define(function(require, exports, module) {
  "use strict";

  var Component = require("webapp/component");
  var template = require("template!./template");

  var ApiList = Component.extend({
    template: template,

    initialize: function() {
      this.channel.subscribe(this.render, this);
    },

    afterRender: function() {
      console.log("here");
    }
  });

  module.exports = ApiList;
});
