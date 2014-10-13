require.config({
  packages: [{
    "name": "webapp",
    "main": "index.js",
    "location": "../bower_components/webapp/lib"
  }],

  paths: {
    "bower_components": "../bower_components",
    "combyne": "../bower_components/combyne/dist/combyne",
    "template": "../bower_components/combyne-amd-loader/loader"
  },

  deps: ["webapp/config"]
});
