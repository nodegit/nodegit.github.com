define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var Component = require("webapp/component");
  var Channel = require("webapp/channel");
  var ApiList = require("../api-list/api-list");
  var template = require("template!./template");

  Component.register(ApiList, "api-list");

  var ApiViewer = Component.extend({
    template: template,
    channel: "api-viewer",

    afterRender: function() {
      ApiList.activateAll(this.$el);
    },

    getApi: function(version) {
      return $.getJSON("/api-viewer/versions/" + version + ".json");
    },

    initialize: function() {
      this.channel.subscribe("version", function(value) {
        this.getApi(value).then(this.channel.publish.bind(this.channel));
      }, this);
    }
  });

  module.exports = ApiViewer;
});
