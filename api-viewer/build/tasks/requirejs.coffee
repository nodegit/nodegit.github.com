module.exports = ->
  @loadNpmTasks "grunt-contrib-requirejs"

  @config "requirejs",
    release:
      options:
        mainConfigFile: "src/config.js"
        baseUrl: "src"
        include: ["webapp/config"]
        insertRequire: ["./index"]
        findNestedDependencies: true
        out: "dist/source.min.js"
        optimize: "uglify2"
        name: "almond"
        wrap: true
        paths:
          "almond": "../bower_components/almond/almond"
