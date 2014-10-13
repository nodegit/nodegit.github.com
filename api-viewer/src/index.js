define(function(require, exports, module) {
  "use strict";

  require("webapp/config");

  var Component = require("webapp/component");
  var ApiViewer = require("./components/api-viewer/api-viewer");

  Component.configure({
    fetchTemplate: function(template) {
      return template;
    },
   
    renderTemplate: function(template, context) {
      return template.render(context);
    }
  });

  // Register the components for this application.
  Component.register(ApiViewer, "api-viewer").activateAll();

  module.exports = ApiViewer;
});
