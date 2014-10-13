(function(window) {
  "use strict";

  // Handle search.
  var search = document.querySelector("input[type=search]");

  function getAPI(version) {
    return $.getJSON("/api-viewer/versions/" + version + ".json");
  }

  getAPI("wip").then(function(resp) {
    var listApi = $("#list-api");
    var content = $(".api-content");
    var scrollable = listApi.find(".scrollable");

    var contentTemplate = combyne($(".api-content script").eq(1).html().trim());

    resp.forEach(function(ctor) {
      // Add nav entry.
      var anchor = $("<a href='#" + ctor.jsClassName + "'><li>" + ctor.jsClassName + "</li><ul class='subnav'></ul></a>").appendTo(scrollable);

      scrollable.height($("html").innerHeight() - 160);

      // Add new content.
      var contentOutput = contentTemplate.render(ctor);

      content.append(contentOutput);

      ctor.functions.forEach(function(func) {
        var isPrototype = func.isPrototypeMethod ? "#" : ".";
        anchor.find(".subnav").append("<a href='#" + ctor.jsClassName + "/function/" + func.jsFunctionName + "'><li>" + ctor.jsClassName + isPrototype + func.jsFunctionName + "</li></a>");
      });
    });

    listApi.on("click", "a", function(ev) {
      $(this).siblings().removeClass("active").end().addClass("active");
    });
  });
})(this);
